/* assessment.js — multi-step form, validation, scoring, modal */

const STEPS = 5;
let cur = 1;

// ── PROGRESS ────────────────────────────────────────────────
function setProgress(n) {
  const fill = document.getElementById('pbarFill');
  const txt  = document.getElementById('pbarTxt');
  if (fill) fill.style.width = (n / STEPS * 100) + '%';
  if (txt)  txt.textContent  = `Step ${n} of ${STEPS}`;
}

// ── SHOW STEP ────────────────────────────────────────────────
function showStep(n) {
  document.querySelectorAll('.fstep').forEach(s => s.classList.remove('on'));
  const el = document.querySelector(`.fstep[data-step="${n}"]`);
  if (el) {
    el.classList.add('on');
    // Scroll to progress bar, not top of form
    const bar = document.querySelector('.pbar-wrap');
    if (bar) bar.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  setProgress(n);
  cur = n;
}

// ── VALIDATE ────────────────────────────────────────────────
function validate(n) {
  const step = document.querySelector(`.fstep[data-step="${n}"]`);
  let ok = true;
  step.querySelectorAll('[required]').forEach(f => {
    f.style.borderColor = '';
    if (!f.value.trim()) {
      f.style.borderColor = 'var(--stop)';
      ok = false;
    }
  });
  if (!ok) {
    const bad = step.querySelector('[style*="stop"]');
    if (bad) bad.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return ok;
}

// ── NAV FUNCTIONS ────────────────────────────────────────────
function nextStep(from) { if (validate(from) && from < STEPS) showStep(from + 1); }
function prevStep(from) { if (from > 1) showStep(from - 1); }

// ── RATING BUTTONS ───────────────────────────────────────────
document.querySelectorAll('.rbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    document.querySelectorAll(`.rbtn[data-name="${name}"]`).forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const hidden = document.getElementById(name) || document.querySelector(`input[name="${name}"]`);
    if (hidden) hidden.value = btn.dataset.value;
  });
});

// ── SCORE ─────────────────────────────────────────────────
function calcScore(d) {
  // Financial 0-25
  const sav = { '0':0,'1':6,'3':12,'6':20,'12':25 }[d.savingsMonths] ?? 10;
  const ofr = d.hasOffer === 'yes_better' ? 8 : d.hasOffer === 'yes_similar' ? 4 : d.hasOffer === 'no_searching' ? 2 : 0;
  const dep = d.dependents === 'multiple' ? -5 : d.dependents === 'children' ? -3 : d.dependents === 'parents' ? -2 : 0;
  const financial = Math.max(0, Math.min(25, sav + ofr / 2 + dep));

  // Career readiness 0-25
  const ten = { '0.5':2,'1':8,'2':16,'3':20,'5':22,'8':24 }[d.currentCompanyTenure] ?? 12;
  const mkt = parseInt(d.marketDemand || 3) * 3;
  const net = parseInt(d.networkStrength || 3) * 2;
  const career = Math.min(25, Math.round((ten + mkt + net) / 3.2));

  // Leave urgency 0-25
  const sat  = parseInt(d.jobSatisfaction || 3);
  const mgr  = parseInt(d.managerRelation || 3);
  const wlb  = parseInt(d.workLifeBalance || 3);
  const lrn  = parseInt(d.learningOpportunity || 3);
  const avg  = (sat + mgr + wlb + lrn) / 4;
  const urgency = Math.round((5 - avg) / 4 * 25);

  // Timing 0-15
  const tmap = { immediate:15, soon:12, planned:8, exploring:4 };
  const pmap = { recent:5, '1year':12, '2years':14, '3years':15, never:15 };
  const timing = Math.min(15, Math.round(((tmap[d.timeline] || 8) + (pmap[d.lastPromotion] || 10)) / 2));

  // Goals 0-10
  const goals = d.careerGoal && d.careerGoal !== 'unsure' ? 10 : 4;

  const score = Math.max(5, Math.min(96, Math.round(financial + career + urgency + timing + goals)));
  return { score, breakdown: { financial, career, urgency, timing, goals } };
}

// ── VERDICT ──────────────────────────────────────────────────
function getVerdict(score, d) {
  if (score >= 68) return {
    label: '✅ Strong Case to Resign',
    color: 'var(--go)',
    summary: `Your profile shows strong readiness across multiple dimensions. You're financially positioned, skills appear market-ready, and your current situation is genuinely holding you back. This looks like a well-timed move — not an impulse.`,
    recs: [
      `Start applying immediately — your profile is competitive in the current market.`,
      `Set a resignation date giving at least ${d.currentCompanyTenure <= 1 ? '30' : '60'} days' notice to exit professionally.`,
      `Activate your network: reach out to at least 10 contacts this week.`,
      `Confirm all pending bonuses, PF withdrawal, and relieving documents in writing before your last day.`,
      `Prepare a confident, honest narrative about your transition for interviews.`,
    ],
  };
  if (score >= 42) return {
    label: '⚠️ Proceed with Caution',
    color: 'var(--warn)',
    summary: `You have meaningful reasons to leave, but a few important factors need strengthening first. Strategic actions over the next 2–4 months will dramatically improve your outcomes.`,
    recs: [
      d.savingsMonths < 3 ? `Build emergency savings to at least 3 months of expenses before resigning.` : `Your savings are reasonable — keep building while you search.`,
      d.hasOffer === 'no_notstarted' ? `Begin your job search now while still employed — this protects your leverage.` : `Keep nurturing your pipeline: aim for 2+ live opportunities.`,
      `Have a direct conversation with your manager about your concerns before deciding.`,
      `Complete one relevant certification in the next 60 days to sharpen market positioning.`,
      `Set a deadline: "If X doesn't change by [3 months], I resign."`,
    ],
  };
  return {
    label: '🛑 Wait & Prepare First',
    color: 'var(--stop)',
    summary: `Resigning right now carries significant risk. This isn't a permanent "no" — it's a strategic pause. Strengthening your position over 3–6 months will dramatically reduce financial and career risk.`,
    recs: [
      `Build emergency savings to at least 4–6 months of expenses before any move.`,
      `Start your job search discreetly but immediately — building a pipeline takes time.`,
      d.networkStrength <= 2 ? `Invest in your network: attend industry events and connect with 5 people per week on LinkedIn.` : `Leverage your network to explore quietly without broadcasting you're searching.`,
      `Identify the 2 skills most valued in your target role and begin learning now.`,
      `Give the internal conversation a genuine try first — you may not need to leave.`,
    ],
  };
}

// ── OPPORTUNITIES ─────────────────────────────────────────────
function getOpps(d) {
  const ops = [];
  const exp = parseInt(d.totalExp) || 4;
  if (d.careerGoal === 'entrepreneur' || (Array.isArray(d.resignReason) ? d.resignReason : [d.resignReason]).includes('startup'))
    ops.push({ em:'🚀', title:'Entrepreneurship', desc:'Your motivations suggest readiness to explore a venture. Start with a low-risk part-time model before full commitment.' });
  if (exp >= 6)
    ops.push({ em:'🎯', title:'Senior / Leadership Roles', desc:`With ${exp}+ years, you're positioned for senior IC or management roles — especially in growing startups or MNCs seeking domain expertise.` });
  if ((d.industry || '').includes('Technology') || (d.industry || '').includes('IT'))
    ops.push({ em:'🌍', title:'Global Remote Roles', desc:'The global remote market for tech talent is thriving. US/EU remote roles can offer 2–4× domestic salaries while working from India.' });
  if (d.careerGoal === 'pivot' || d.careerGoal === 'specialization')
    ops.push({ em:'📚', title:'Upskilling / MBA Route', desc:'A strategic educational investment could position you 2–3 levels above current market value and accelerate your pivot.' });
  ops.push({ em:'🤝', title:'Consulting / Freelancing', desc:'Independent consulting lets you test the market and generate income during transition — highly effective with a strong network.' });
  return ops.slice(0, 3);
}

// ── RENDER MODAL ──────────────────────────────────────────────
function renderModal(d, score, bd, v) {
  const opps = getOpps(d);
  const c  = 2 * Math.PI * 52;
  const dc = c - (score / 100) * c;
  const dimColor = (val, max) => {
    const p = val / max * 100;
    return p >= 65 ? 'var(--g500)' : p >= 40 ? 'var(--warn)' : 'var(--stop)';
  };
  const dims = [
    { label:'Financial Safety',  val:bd.financial, max:25 },
    { label:'Career Readiness',  val:bd.career,    max:25 },
    { label:'Leave Urgency',     val:bd.urgency,   max:25 },
    { label:'Timing',            val:bd.timing,    max:15 },
    { label:'Goal Clarity',      val:bd.goals,     max:10 },
  ];

  document.getElementById('modalBody').innerHTML = `
    <div class="ring-wrap">
      <div class="ring">
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="var(--n100)" stroke-width="8"/>
          <circle cx="60" cy="60" r="52" fill="none" stroke="${v.color}" stroke-width="8"
            stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${dc.toFixed(2)}"
            stroke-linecap="round" transform="rotate(-90 60 60)"
            style="transition:stroke-dashoffset 1.1s cubic-bezier(.22,1,.36,1)"/>
        </svg>
        <div class="ring-inner">
          <span class="ring-num">${score}</span>
          <span class="ring-sub">/ 100</span>
        </div>
      </div>
    </div>
    <div class="verdict">
      <h2 style="color:${v.color}">${v.label}</h2>
      <p>${v.summary}</p>
    </div>
    <div class="dims">
      ${dims.map(d => `
        <div class="drow">
          <span class="dlbl">${d.label}</span>
          <div class="dtrack"><div class="dfill" style="width:${Math.round(d.val/d.max*100)}%;background:${dimColor(d.val,d.max)}"></div></div>
          <span class="dpct" style="color:${dimColor(d.val,d.max)}">${Math.round(d.val/d.max*100)}%</span>
        </div>
      `).join('')}
    </div>
    <div class="recs-box">
      <h4>🗺️ Your Next Steps</h4>
      <ul>${v.recs.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>
    <div class="opps">
      <p class="opps-ttl">💡 Opportunities to Explore</p>
      ${opps.map(o => `
        <div class="opp">
          <span style="font-size:1.3rem;flex-shrink:0">${o.em}</span>
          <div><strong>${o.title}</strong><p>${o.desc}</p></div>
        </div>
      `).join('')}
    </div>
    <div class="modal-actions">
      <a href="guidance.html" class="btn btn-outline" style="flex:1;text-align:center">Explore Guidance →</a>
      <a href="consult.html" class="btn btn-primary" style="flex:1;text-align:center">Book a Counselor →</a>
    </div>
  `;

  document.getElementById('resultsModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('resultsModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── FORM SUBMIT ───────────────────────────────────────────────
document.getElementById('assessForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  if (!document.getElementById('consent').checked) {
    alert('Please agree to the terms to proceed.');
    return;
  }
  const btn  = document.getElementById('submitBtn');
  const txt  = document.getElementById('btnTxt');
  const load = document.getElementById('btnLoad');
  txt.style.display = 'none';
  load.style.display = 'inline';
  btn.disabled = true;

  const fd = new FormData(this);
  const d  = {};
  fd.forEach((v, k) => {
    d[k] = d[k] ? (Array.isArray(d[k]) ? [...d[k], v] : [d[k], v]) : v;
  });

  await new Promise(r => setTimeout(r, 1600));

  const { score, breakdown } = calcScore(d);
  const verdict = getVerdict(score, d);

  txt.style.display = 'inline';
  load.style.display = 'none';
  btn.disabled = false;

  renderModal(d, score, breakdown, verdict);
});
