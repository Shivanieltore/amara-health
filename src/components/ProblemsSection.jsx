import React from 'react';
import { AlertCircle, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import LayoutContainer from './LayoutContainer';

export default function ProblemsSection() {
  const problems = [
    { title: 'Fragmented EHR Patient History', desc: 'Digging through dozens of unstructured legacy PDFs, previous clinic summaries, and disjointed lab portals in separate tabs.' },
    { title: 'Unstructured Patient Media Assets', desc: 'Wasting cognitive focus sifting through grainy smartphone screenshots of blood pressure logs, pharmacy labels, or lab printouts.' },
    { title: 'Recall Gaps & Subjective Diary Loss', desc: 'Relying on scattered hand-written paper logs or vague patient memory: "I think my blood sugar was high Tuesday, but I lost the sheet."' },
    { title: 'Pre-Visit Administrative Latency', desc: 'Spending the first 6 to 8 minutes of a standard 15-minute consultation manually re-typing medications and subjective history.' },
  ];

  const solutions = [
    { title: 'Unified Patient Story Context Screen', desc: 'Every critical vital trend, previous lab parameter, and active prescription beautifully organized onto an elegant, chronological timeline.' },
    { title: 'Automated Medical-Grade OCR Parsing', desc: 'An intelligent processing layer that converts uploaded patient documents, handwritten logs, and receipts into structured digital data in seconds.' },
    { title: 'Verifiable Home Device Syncing', desc: 'Securely ingest logs from connected blood pressure cuffs, continuous glucose monitors, and scales directly into clean visual trend charts.' },
    { title: 'Clinical Readiness Inside 10 Seconds', desc: 'Step into the consultation room fully contextualized. Spend your valuable clinical minutes diagnosing and discussing treatments, not searching.' },
  ];

  return (
    <section
      className="bg-slate-50/50 border-y border-slate-100 overflow-hidden"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <LayoutContainer>

        {/* Section heading */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '999px', padding: '6px 16px', marginBottom: '20px' }}>
            EHR Integration &amp; Pre-Visit Efficiency Comparison
          </p>
          <h2 className="font-bold text-slate-900 tracking-tight" style={{ fontSize: '38px', lineHeight: 1.15, maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            The Cost of Patient Data Fragmentation in<br />Clinical Workflows
          </h2>
          <p className="text-slate-500 leading-relaxed" style={{ fontSize: '17px', maxWidth: '640px', margin: '20px auto 0', textAlign: 'center' }}>
            Clinicians do not suffer from a lack of patient health data—they suffer from cognitive overload trying to synthesize it. Learn how Amara transforms fragmented files into immediate diagnostic clarity.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '32px', alignItems: 'stretch' }}>

          {/* ── LEFT CARD: Status Quo ── */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col" style={{ padding: '40px' }}>

            {/* Card header */}
            <div className="flex items-start justify-between gap-4" style={{ marginBottom: '36px' }}>
              <div>
                <span className="block font-bold uppercase tracking-widest text-rose-500" style={{ fontSize: '11px', marginBottom: '8px' }}>
                  The Status Quo
                </span>
                <h3 className="font-bold text-slate-900" style={{ fontSize: '28px', lineHeight: 1.15 }}>
                  Decentralized Chart Sifting
                </h3>
              </div>
              <div className="flex items-center justify-center rounded-full bg-rose-50 border border-rose-200 text-rose-500 shrink-0"
                style={{ width: '44px', height: '44px' }}>
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>

            {/* Items */}
            <div className="flex flex-col flex-1" style={{ gap: '24px' }}>
              {problems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span
                    className="flex items-center justify-center font-bold text-rose-600 bg-rose-50 border border-rose-100 rounded shrink-0"
                    style={{ width: '26px', height: '26px', fontSize: '12px', marginTop: '1px' }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800" style={{ fontSize: '14px' }}>{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed" style={{ fontSize: '13px', marginTop: '5px' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-start gap-3 border-t border-slate-100" style={{ marginTop: '32px', paddingTop: '24px' }}>
              <Clock className="w-4 h-4 text-rose-500 shrink-0" style={{ marginTop: '2px' }} />
              <p className="text-slate-500 leading-relaxed" style={{ fontSize: '13px' }}>
                <strong className="text-slate-700">Workflow Impact:</strong> On average, clinicians waste{' '}
                <span className="text-rose-600 font-bold">6-8 minutes</span>{' '}
                per patient merely navigating disparate tabs and PDFs, triggering severe charting fatigue.
              </p>
            </div>
          </div>

          {/* ── RIGHT CARD: With Amara ── */}
          <div
            className="rounded-2xl shadow-xl flex flex-col"
            style={{ padding: '40px', background: '#1a2744' }}
          >

            {/* Card header */}
            <div className="flex items-start justify-between gap-4" style={{ marginBottom: '36px' }}>
              <div>
                <span className="block font-bold uppercase tracking-widest text-blue-400" style={{ fontSize: '11px', marginBottom: '8px' }}>
                  With Amara
                </span>
                <h3 className="font-bold text-white" style={{ fontSize: '28px', lineHeight: 1.15 }}>
                  Standardized Timeline Layer
                </h3>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-600/20 text-blue-300 font-semibold shrink-0"
                style={{ fontSize: '11px', padding: '6px 12px' }}>
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                Fully Synthesized
              </div>
            </div>

            {/* Items */}
            <div className="flex flex-col flex-1" style={{ gap: '24px' }}>
              {solutions.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="flex items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300 shrink-0"
                    style={{ width: '26px', height: '26px', marginTop: '1px' }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white" style={{ fontSize: '14px' }}>{item.title}</h4>
                    <p className="leading-relaxed" style={{ fontSize: '13px', marginTop: '5px', color: 'rgba(147,197,253,0.85)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-start gap-3 border-t border-blue-700/40" style={{ marginTop: '32px', paddingTop: '24px' }}>
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0" style={{ marginTop: '2px' }} />
              <p className="leading-relaxed" style={{ fontSize: '13px', color: 'rgba(147,197,253,0.85)' }}>
                <strong className="text-white">Immediate Clinical Advantage:</strong>{' '}
                Spend your consultations connecting with patients and formulating exact diagnostic plans. Zero charting friction. 100% preparation.
              </p>
            </div>
          </div>

        </div>
      </LayoutContainer>
    </section>
  );
}
