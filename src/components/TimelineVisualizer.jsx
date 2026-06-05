import React, { useState } from 'react';
import {
  Heart, Activity, FileText, AlertCircle, Pill,
  Sparkles, CheckCircle2, Clock, ChevronRight, Info,
} from 'lucide-react';

const EVENTS = [
  { id: 'ev-1', type: 'symptom', title: 'New Symptom: Chest Tightness', timestamp: '2 days ago', subtitle: 'Occurs primarily during fast walking or climbing stairs', status: 'attention', details: 'Patient reports mild pressure under the breastbone when walking uphill. Relieved within 3-4 minutes of rest. Rating intensity as 4/10. No radiation to jaw or left arm.', source: 'Patient Self-Log (Amara Web Link)' },
  { id: 'ev-2', type: 'vitals', title: '7-Day Blood Pressure Log', timestamp: '3 days ago (Average)', subtitle: 'Elevated systolic average: 138/88 mmHg', status: 'stable', details: 'Systolic values fluctuating between 132 and 144. Diastolic values between 84 and 92. High readings generally registered in the morning before medication.', source: 'Omron BP Connect Sync' },
  { id: 'ev-3', type: 'ecg', title: 'Apple Watch ECG Screenshot', timestamp: 'Thursday, May 28', subtitle: 'Parsed Single-lead: Sinus Rhythm, 72 BPM', status: 'normal', details: "Amara's clinical engine OCR-parsed the Apple Watch PDF export. Detected: Normal sinus rhythm with no ST-segment elevation or depression. Heart rate stable. Minor sinus arrhythmia noted.", source: 'Uploaded iPhone Screenshot' },
  { id: 'ev-4', type: 'lab', title: 'Lipid Panel Report (Labcorp)', timestamp: 'May 15, 2026', subtitle: 'LDL Cholesterol: 136 mg/dL (Elevated)', status: 'attention', details: 'Total Cholesterol: 218 mg/dL (Borderline High). HDL: 46 mg/dL (Normal). Triglycerides: 180 mg/dL (Elevated). Previous LDL from Dec 2025 was 142 mg/dL; indicating mild improvement.', source: 'Shared Lab PDF' },
  { id: 'ev-5', type: 'medication', title: 'Current Active Medications', timestamp: 'Last updated May 10', subtitle: '2 active prescriptions', status: 'normal', details: '1. Atorvastatin 20mg once daily in the evening (verified adherence: 90%).\n2. Metformin 500mg twice daily with meals (verified adherence: 95%). No active OTC supplements reported.', source: 'Prescription scan & Patient interview' },
  { id: 'ev-6', type: 'question', title: 'Patient Inquiry / Concerns', timestamp: 'Pre-consultation intake', subtitle: 'Questions Robert wants to ask you today', status: 'normal', details: '1. "Is it safe to continue playing tennis with this tightness in my chest?"\n2. "I noticed my legs feel a bit heavy in the evening—is that related to the statin medicine or something new?"', source: 'Amara Pre-Visit Questionnaire' },
  { id: 'ev-7', type: 'note', title: 'Daily Health Note', timestamp: '1 week ago', subtitle: '"Felt a bit dizzy after skipping lunch."', status: 'normal', details: 'Patient checked BP immediately during dizziness: 118/74 mmHg. Blood glucose: 88 mg/dL (checked on home glucometer). Dizziness resolved fully within 15 minutes of eating a banana.', source: 'Amara Voice-to-Text Note' },
];

function getIconBg(status) {
  if (status === 'attention') return 'text-amber-600 bg-amber-50 border border-amber-200';
  if (status === 'critical') return 'text-rose-600 bg-rose-50 border border-rose-200';
  return 'text-blue-600 bg-blue-50 border border-blue-100';
}

const TYPE_ICON = { symptom: AlertCircle, vitals: Activity, ecg: Heart, lab: FileText, medication: Pill, question: Info };

export default function TimelineVisualizer() {
  const [sel, setSel] = useState(EVENTS[0]);

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">

      {/* Patient header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-100 bg-gradient-to-r from-blue-50/50 to-indigo-50/20" style={{ padding: '20px 24px' }}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center text-base shadow-sm shrink-0">RC</div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-bold text-slate-900 text-base">Robert Chen</h4>
              <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full whitespace-nowrap">Age 58</span>
              <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full whitespace-nowrap">New Patient Intake</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 truncate">Primary Concern: Stable exertional chest tightness, hypertension review</p>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-white/80 shadow-sm border border-slate-100 rounded-xl shrink-0 self-start sm:self-auto" style={{ padding: '8px 12px' }}>
          <span className="text-xs font-medium text-slate-400">Amara Unified Engine:</span>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg flex items-center gap-1" style={{ padding: '4px 10px' }}>
            <Sparkles className="w-3 h-3 shrink-0" style={{ fill: 'rgba(37,99,235,0.2)' }} /> Active Context Loaded
          </span>
        </div>
      </div>

      {/* Main workspace — side by side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12">

        {/* Left: event list */}
        <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/40 flex flex-col">
          <div className="flex items-center justify-between border-b border-slate-100/60 bg-white" style={{ padding: '12px 20px' }}>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Unified Stream (7 Elements Sorted)</span>
            <span className="text-xs text-slate-500 italic hidden sm:block">Click any card to inspect context</span>
          </div>
          <div className="overflow-y-auto flex-1" style={{ padding: '16px', gap: '12px', display: 'flex', flexDirection: 'column', maxHeight: '540px' }}>
            {EVENTS.map(ev => {
              const active = sel.id === ev.id;
              const Icon = TYPE_ICON[ev.type] || FileText;
              return (
                <button
                  key={ev.id}
                  onClick={() => setSel(ev)}
                  className={`w-full text-left rounded-2xl border transition-all duration-200 flex gap-4 ${
                    active
                      ? 'bg-white shadow-md border-l-4 border-l-blue-600 border-slate-100'
                      : 'bg-white/80 hover:bg-white hover:shadow-sm border-slate-100/60'
                  }`}
                  style={{ padding: '16px' }}
                >
                  <div className={`w-10 h-10 p-2.5 rounded-xl shrink-0 flex items-center justify-center ${getIconBg(ev.status)}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{ev.type}</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 shrink-0">
                        <Clock className="w-3 h-3" /> {ev.timestamp}
                      </span>
                    </div>
                    <h5 className="font-semibold text-slate-900 text-sm truncate">{ev.title}</h5>
                    {ev.subtitle && <p className="text-xs text-slate-500 mt-0.5 truncate">{ev.subtitle}</p>}
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 self-center ${active ? 'text-blue-600' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: detail panel */}
        <div className="lg:col-span-5 bg-white flex flex-col justify-between" style={{ padding: '32px' }}>
          <div className="space-y-5 flex-1">
            <div className="border-b border-slate-100 pb-5">
              <span className="inline-block text-xs font-semibold bg-slate-100 text-slate-700 rounded-lg max-w-full truncate" style={{ padding: '4px 10px' }}>
                Source: {sel.source}
              </span>
              <h4 className="font-bold text-slate-900 text-lg mt-3 leading-snug">{sel.title}</h4>
              <p className="text-sm text-blue-800 font-medium mt-1">{sel.subtitle}</p>
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">Unified Clinical Digest</span>
              <div className="bg-slate-50 rounded-2xl border border-slate-100 text-sm text-slate-600 leading-relaxed whitespace-pre-line overflow-hidden" style={{ padding: '16px' }}>
                {sel.details}
              </div>
            </div>

            <div className="bg-blue-50/40 rounded-xl border border-blue-100 flex gap-2.5" style={{ padding: '14px' }}>
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong className="text-blue-900 font-semibold">How Amara saves time:</strong> Instantly extracted key risk vectors, temporal occurrence parameters, and self-log context into this structured file card. No digging into disparate sub-menus.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400" style={{ paddingTop: '20px', marginTop: '20px' }}>
            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
            <span>Direct HIPAA-compliant patient sharing standard</span>
          </div>
        </div>

      </div>
    </div>
  );
}
