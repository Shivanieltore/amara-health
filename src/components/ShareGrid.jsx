import React, { useState } from 'react';
import {
  FileText, Activity, Heart, Pill, FileSpreadsheet, BookOpen,
  Calendar, FileDigit, TrendingUp, BrainCircuit, MessageSquare,
  HelpCircle, Thermometer, Sparkles,
} from 'lucide-react';
import LayoutContainer from './LayoutContainer';

const ALL_ITEMS = [
  { cat: 'clinical', title: 'Lab Reports',           desc: 'PDFs or raw data parameters from standard clinical laboratories such as Labcorp, Quest, or local providers.',                    Icon: FileText,    color: 'amber'  },
  { cat: 'clinical', title: 'Prescription Files',    desc: 'Historical and active prescriptions parsed directly from pharmacy receipts, PDF summaries, or photos.',                         Icon: Pill,        color: 'amber'  },
  { cat: 'clinical', title: 'Discharge Summaries',   desc: 'Comprehensive clinical abstracts chronicling previous inpatient, emergency department, or outpatient visits.',                  Icon: FileSpreadsheet, color: 'amber' },
  { cat: 'clinical', title: 'Diagnostic Reports',    desc: 'Radiology summaries, ultrasound results, biopsy write-ups, and specialized clinical diagnostic outcomes.',                     Icon: FileDigit,   color: 'amber'  },
  { cat: 'vitals',   title: 'Home BP Readings',      desc: 'Long-term blood pressure tracking logs compiled on smart cuffs or entered manually by the patient.',                          Icon: Activity,    color: 'indigo' },
  { cat: 'vitals',   title: 'ECG Screenshots',       desc: 'Apple Watch, KardiaMobile, or other single-lead wearable ECG screenshot files parsed for rhythm and rate.',                  Icon: Heart,       color: 'indigo' },
  { cat: 'vitals',   title: 'Blood Glucose Logs',    desc: 'CGM reports or manual finger-stick trends tracking sugar spikes and fasting levels.',                                         Icon: TrendingUp,  color: 'indigo' },
  { cat: 'vitals',   title: 'Weight Tracking',       desc: 'Incremental weight gains or drops connected to digital smart scales to screen daily cardiovascular changes.',                 Icon: Thermometer, color: 'indigo' },
  { cat: 'vitals',   title: 'Wearable Biosensor Data', desc: 'Sleep cycles, respiratory rates, average resting heart rates, and daily activity metrics aggregated securely.',           Icon: BrainCircuit,color: 'indigo' },
  { cat: 'patient',  title: 'Active Symptoms',       desc: 'Patient-declared symptoms described using intuitive digital check-ins prior to the visit.',                                  Icon: MessageSquare, color: 'blue' },
  { cat: 'patient',  title: 'Health Concerns',       desc: 'Primary concerns the patient wants to address today (such as energy drops, headaches, or pain).',                           Icon: BookOpen,    color: 'blue'   },
  { cat: 'patient',  title: 'Questions for Doctor',  desc: 'Explicit list of questions synthesized by patients so they do not forget critical concerns in the room.',                    Icon: HelpCircle,  color: 'blue'   },
  { cat: 'patient',  title: 'Personal Health Notes', desc: 'Contextual voice or text notes reflecting daily lifestyle logs, exercise changes, or dietary choices.',                      Icon: Calendar,    color: 'blue'   },
];

const ICON_STYLE = {
  amber:  'bg-blue-50   border-blue-100   text-blue-500',
  indigo: 'bg-slate-100 border-slate-200  text-slate-400',
  blue:   'bg-blue-50   border-blue-100   text-blue-500',
};

const PILL_STYLE = {
  amber:  'text-amber-500',
  indigo: 'text-indigo-500',
  blue:   'text-blue-500',
};

const TABS = [
  { id: 'all',      label: 'All Shared Metrics'         },
  { id: 'clinical', label: 'Clinical Records'           },
  { id: 'vitals',   label: 'Home Vitals & Wearables'    },
  { id: 'patient',  label: 'Subjective Patient Context' },
];

export default function ShareGrid() {
  const [cat, setCat] = useState('all');
  const items = cat === 'all' ? ALL_ITEMS : ALL_ITEMS.filter(i => i.cat === cat);

  return (
    <section
      className="bg-slate-50/50 border-b border-slate-100 overflow-hidden"
      style={{ paddingTop: '100px', paddingBottom: '100px' }}
    >
      <LayoutContainer>

        {/* ── Header block ──────────────────────────────────────────────
            Spec: max-width 1100px, centered, flex-col, items-center, text-center
        ─────────────────────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth:       '1100px',
            margin:         '0 auto',
            display:        'flex',
            flexDirection:  'column',
            alignItems:     'center',
            textAlign:      'center',
          }}
        >

          {/* ── Badge ── centered pill, mb: 24px ── */}
          <span
            className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full"
            style={{ marginBottom: '24px' }}
          >
            Patient Data Capabilities
          </span>

          {/* ── Heading ── clamp(64px,5vw,80px), fw 800, lh 1.05, max-w 950px ── */}
          <h2
            className="text-slate-900"
            style={{
              maxWidth:   '950px',
              margin:     '0 auto',
              fontSize:   'clamp(32px, 5vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Much More Than Report Uploads
          </h2>

          {/* ── Description ── 22px, lh 1.6, max-w 800px, mt 24px ── */}
          <p
            className="text-slate-500"
            style={{
              maxWidth:   '800px',
              marginTop:  '24px',
              fontSize:   '22px',
              lineHeight: 1.6,
            }}
          >
            Amara isn't a passive file vault. We parse subjective feelings and home readings
            with standard clinical data to form a cohesive, structured picture.
          </p>

          {/* ── Tab bar ── mt 28px, mb 48px, flex, center, gap 24px, no wrap ── */}
          <div
            style={{
              marginTop:      '28px',
              marginBottom:   '48px',
              display:        'flex',
              justifyContent: 'center',
              alignItems:     'center',
              gap:            '24px',
              flexWrap:       'wrap',
            }}
          >
            {TABS.map(t => {
              const active = cat === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setCat(t.id)}
                  className="whitespace-nowrap transition-colors"
                  style={{
                    fontSize:     '15px',
                    fontWeight:   active ? 700 : 500,
                    color:        active ? '#2563eb' : '#64748b',
                    paddingBottom: '6px',
                    borderBottom:  active ? '2px solid #2563eb' : '2px solid transparent',
                    background:    'none',
                    border:        'none',
                    borderBottom:  active ? '2px solid #2563eb' : '2px solid transparent',
                    cursor:        'pointer',
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

        </div>
        {/* ── End header block ── */}

        {/* ── Cards section ── begins 48px below tabs (handled by tab mb) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white border border-black/[.06] overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-px transition-all duration-200"
              style={{ padding: '28px' }}
            >
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 mb-5 ${ICON_STYLE[item.color]}`}
              >
                <item.Icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-slate-900 text-base mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">{item.desc}</p>
              <div className="pt-5 border-t border-slate-50 flex items-center justify-between" style={{ marginTop: '40px' }}>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Category</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${PILL_STYLE[item.color]}`}>
                  {item.cat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer banner ── */}
        <div
          className="rounded-3xl bg-white border border-black/[.06] overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ marginTop: '40px', padding: '24px 28px' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 p-2.5 bg-blue-50 rounded-xl border border-blue-100 shrink-0 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-blue-600" style={{ fill: 'rgba(37,99,235,0.1)' }} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Dynamic OCR &amp; Structural Parsing Engine</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Amara automatically structures messy PDFs and images using specialized medical OCR parsing schemas.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-500 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl whitespace-nowrap shrink-0">
            99.8% Extraction Accuracy
          </span>
        </div>

      </LayoutContainer>
    </section>
  );
}
