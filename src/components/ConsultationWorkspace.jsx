import React, { useState } from 'react';
import {
  AlertCircle, Activity, Heart, FileText, Info, File,
  Clock, ChevronRight, CheckCircle, Sparkles, Pill,
} from 'lucide-react';

const STREAM_ITEMS = [
  {
    id: 1,
    category: 'SYMPTOM',
    catColor: 'text-blue-600',
    iconBg: '#fff7ed',
    iconBorder: '#fed7aa',
    iconColor: '#f97316',
    Icon: AlertCircle,
    time: '2 days ago',
    title: 'New Symptom: Chest Tightness',
    subtitle: 'Occurs primarily during fast walking or climbing stairs',
    detail: {
      source: 'Patient Self-Log (Amara Web Link)',
      title: 'New Symptom: Chest Tightness',
      subtitle: 'Occurs primarily during fast walking or climbing stairs',
      digest: 'Patient reports mild pressure under the breastbone when walking uphill. Relieved within 3-4 minutes of rest. Rating intensity as 4/10. No radiation to jaw or left arm.',
      tip: 'Instantly extracted key risk vectors, temporal occurrence parameters, and self-log context into this structured file card. No digging into disparate sub-menus.',
    },
  },
  {
    id: 2,
    category: 'VITALS',
    catColor: 'text-blue-600',
    iconBg: '#eff6ff',
    iconBorder: '#bfdbfe',
    iconColor: '#3b82f6',
    Icon: Activity,
    time: '3 days ago (Average)',
    title: '7-Day Blood Pressure Log',
    subtitle: 'Elevated systolic average: 138/88 mmHg',
    detail: {
      source: 'Patient Wearable Device',
      title: '7-Day Blood Pressure Log',
      subtitle: 'Elevated systolic average: 138/88 mmHg',
      digest: '7-day average shows consistent elevation with readings ranging 135-142 systolic. Diastolic consistently 82-88. No orthostatic variations noted. Patient reports taking medications as prescribed.',
      tip: 'Blood pressure trends automatically plotted and averaged from patient-submitted home monitor readings. No manual transcription required.',
    },
  },
  {
    id: 3,
    category: 'ECG',
    catColor: 'text-blue-600',
    iconBg: '#eff6ff',
    iconBorder: '#bfdbfe',
    iconColor: '#60a5fa',
    Icon: Heart,
    time: 'Thursday, May 28',
    title: 'Apple Watch ECG Screenshot',
    subtitle: 'Parsed Single-lead: Sinus Rhythm, 72 BPM',
    detail: {
      source: 'Apple Health Integration',
      title: 'Apple Watch ECG Screenshot',
      subtitle: 'Parsed Single-lead: Sinus Rhythm, 72 BPM',
      digest: 'Single-lead ECG shows normal sinus rhythm with regular rate and rhythm. No acute ST changes or arrhythmias detected. Rate 72 bpm, intervals within normal limits. Quality acceptable for screening.',
      tip: 'ECG image automatically parsed via medical-grade OCR. Rhythm classification extracted without manual reading or file navigation.',
    },
  },
  {
    id: 4,
    category: 'LAB',
    catColor: 'text-amber-600',
    iconBg: '#fff7ed',
    iconBorder: '#fed7aa',
    iconColor: '#f97316',
    Icon: FileText,
    time: 'May 15, 2026',
    title: 'Lipid Panel Report (Labcorp)',
    subtitle: 'LDL Cholesterol: 136 mg/dL (Elevated)',
    detail: {
      source: 'LabCorp Direct Integration',
      title: 'Lipid Panel Report (Labcorp)',
      subtitle: 'LDL Cholesterol: 136 mg/dL (Elevated)',
      digest: 'LDL 136 mg/dL exceeds target of <100 mg/dL for cardiovascular risk management. HDL 48 mg/dL. Triglycerides 162 mg/dL. Total cholesterol 218 mg/dL. Risk stratification: moderate-high.',
      tip: 'Lab values auto-extracted from uploaded PDF and flagged against clinical reference ranges. Elevated markers highlighted for immediate clinical attention.',
    },
  },
  {
    id: 5,
    category: 'MEDICATION',
    catColor: 'text-blue-600',
    iconBg: '#eff6ff',
    iconBorder: '#bfdbfe',
    iconColor: '#60a5fa',
    Icon: Pill,
    time: 'Last updated May 10',
    title: 'Current Active Medications',
    subtitle: '2 active prescriptions',
    detail: {
      source: 'Patient Medication Log',
      title: 'Current Active Medications',
      subtitle: '2 active prescriptions',
      digest: 'Amlodipine 5mg once daily (hypertension). Atorvastatin 20mg once daily (cholesterol). Patient reports consistent adherence. No reported side effects. Last pharmacy fill: May 8, 2026.',
      tip: 'Medication list reconciled from patient self-report and prescription history. Compliance indicators automatically surfaced without manual chart review.',
    },
  },
  {
    id: 6,
    category: 'QUESTION',
    catColor: 'text-blue-600',
    iconBg: '#eff6ff',
    iconBorder: '#bfdbfe',
    iconColor: '#3b82f6',
    Icon: Info,
    time: 'Pre-consultation intake',
    title: 'Patient Inquiry / Concerns',
    subtitle: 'Questions Robert wants to ask you today',
    detail: {
      source: 'Pre-Consultation Intake Form',
      title: 'Patient Inquiry / Concerns',
      subtitle: 'Questions Robert wants to ask you today',
      digest: '1. Should I be concerned about the chest tightness during exercise?\n2. Can I increase my Amlodipine dosage?\n3. Do I need a stress test given my symptoms?\n4. Is my LDL level dangerous at 136?',
      tip: 'Patient questions captured during digital intake and organized chronologically, so you enter the consultation fully prepared to address every concern.',
    },
  },
  {
    id: 7,
    category: 'NOTE',
    catColor: 'text-blue-600',
    iconBg: '#f8fafc',
    iconBorder: '#e2e8f0',
    iconColor: '#94a3b8',
    Icon: File,
    time: '1 week ago',
    title: 'Daily Health Note',
    subtitle: '"Felt a bit dizzy after skipping lunch."',
    detail: {
      source: 'Patient Self-Log (Amara Web Link)',
      title: 'Daily Health Note',
      subtitle: '"Felt a bit dizzy after skipping lunch."',
      digest: 'Patient self-reported dizziness episode approximately 3 hours after skipping lunch. Duration approximately 15 minutes. No associated symptoms. Resolved spontaneously after eating.',
      tip: 'Daily health notes are automatically timestamped and indexed into the chronological timeline, providing longitudinal context for symptom patterns.',
    },
  },
];

export default function ConsultationWorkspace() {
  const [selectedId, setSelectedId] = useState(1);
  const selected = STREAM_ITEMS.find((item) => item.id === selectedId);

  return (
    <>
      <style>{`
        .stream-scroll::-webkit-scrollbar { width: 6px; }
        .stream-scroll::-webkit-scrollbar-track { background: transparent; }
        .stream-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 8px; }
      `}</style>

      <section style={{ background: '#f8fafc', paddingTop: '96px', paddingBottom: '96px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingInline: '32px' }}>

          {/* ── Top meta bar ── */}
          <div className="flex flex-wrap justify-between items-center gap-2" style={{ marginBottom: '14px' }}>
            <span className="font-semibold uppercase tracking-widest text-slate-400" style={{ fontSize: '11px' }}>
              Interactive Consultation Workspace
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
              <span className="text-slate-400" style={{ fontSize: '12px' }}>Sandbox Clinical Environment</span>
            </div>
          </div>

          {/* ── Main workspace block ── */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden" style={{ minHeight: '700px' }}>

            {/* Patient header bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200" style={{ padding: '16px 20px' }}>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0"
                  style={{ width: '44px', height: '44px', fontSize: '16px' }}>
                  RC
                </div>
                <div>
                  <div className="flex items-center flex-wrap" style={{ gap: '8px' }}>
                    <span className="font-bold text-slate-900" style={{ fontSize: '16px' }}>Robert Chen</span>
                    <span className="text-slate-500" style={{ fontSize: '13px' }}>Age 58</span>
                    <span className="font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full" style={{ fontSize: '11px', padding: '2px 10px' }}>
                      New Patient Intake
                    </span>
                  </div>
                  <p className="text-slate-500" style={{ fontSize: '12px', marginTop: '2px' }}>
                    Primary Concern: Stable exertional chest tightness, hypertension review
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                <span className="text-slate-400" style={{ fontSize: '12px' }}>Amara Unified Engine:</span>
                <div className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-sm rounded-xl font-semibold text-blue-600"
                  style={{ fontSize: '12px', padding: '5px 12px' }}>
                  <Sparkles className="w-3 h-3 shrink-0" />
                  Active Context Loaded
                </div>
              </div>
            </div>

            {/* ── Two-column body ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* LEFT: stream list */}
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col" style={{ padding: '20px', maxHeight: '400px', overflowY: 'auto' }}>

                {/* Sub-header */}
                <div className="flex justify-between items-center shrink-0" style={{ marginBottom: '12px' }}>
                  <span className="font-bold uppercase tracking-widest text-slate-400" style={{ fontSize: '11px' }}>
                    Unified Stream (7 Elements Sorted)
                  </span>
                  <span className="text-slate-400 italic" style={{ fontSize: '11px' }}>
                    Click any card to inspect context
                  </span>
                </div>

                {/* Up arrow */}
                <div className="text-center text-slate-300 shrink-0" style={{ fontSize: '10px', marginBottom: '4px' }}>▲</div>

                {/* Scrollable list */}
                <div
                  className="stream-scroll flex-1"
                  style={{ overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}
                >
                  {STREAM_ITEMS.map((item) => {
                    const isSelected = item.id === selectedId;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className="relative cursor-pointer transition-all"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          background: 'white',
                          border: isSelected ? '1px solid #e2e8f0' : '1px solid #f1f5f9',
                          borderRadius: '12px',
                          marginBottom: '10px',
                          padding: isSelected ? '14px 14px 14px 16px' : '14px',
                          boxShadow: isSelected ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
                        }}
                        onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
                        onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.boxShadow = 'none'; }}
                      >
                        {/* Blue left bar */}
                        {isSelected && (
                          <div style={{
                            position: 'absolute', left: 0, top: 0, bottom: 0,
                            width: '4px', background: '#2563eb', borderRadius: '12px 0 0 12px',
                          }} />
                        )}

                        {/* Icon */}
                        <div style={{
                          width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                          background: item.iconBg, border: `1px solid ${item.iconBorder}`,
                          color: item.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <item.Icon style={{ width: '16px', height: '16px' }} />
                        </div>

                        {/* Text */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                            <span className={`font-bold uppercase ${item.catColor}`} style={{ fontSize: '11px' }}>
                              {item.category}
                            </span>
                            <span className="text-slate-400 flex items-center gap-1 shrink-0" style={{ fontSize: '11px' }}>
                              <Clock style={{ width: '11px', height: '11px' }} />
                              {item.time}
                            </span>
                          </div>
                          <p className="font-semibold text-slate-900 truncate" style={{ fontSize: '13px', marginTop: '3px' }}>
                            {item.title}
                          </p>
                          <p className="text-slate-500 truncate" style={{ fontSize: '12px', marginTop: '2px' }}>
                            {item.subtitle}
                          </p>
                        </div>

                        {/* Chevron */}
                        <ChevronRight className="text-slate-300 shrink-0 self-center" style={{ width: '16px', height: '16px' }} />
                      </div>
                    );
                  })}
                </div>

                {/* Down arrow */}
                <div className="text-center text-slate-300 shrink-0" style={{ fontSize: '10px', marginTop: '4px' }}>▼</div>
              </div>

              {/* RIGHT: detail panel */}
              <div className="lg:col-span-7 flex flex-col" style={{ padding: '24px' }}>
                {selected && (
                  <>
                    {/* Source badge */}
                    <div style={{ marginBottom: '20px' }}>
                      <span className="inline-block bg-slate-100 text-slate-600 font-medium rounded-md" style={{ fontSize: '12px', padding: '5px 12px' }}>
                        Source: {selected.detail.source}
                      </span>
                    </div>

                    {/* Title block — centered */}
                    <div style={{ textAlign: 'center', marginBottom: '4px' }}>
                      <h2 className="font-bold text-slate-900" style={{ fontSize: '24px', lineHeight: 1.2 }}>
                        {selected.detail.title}
                      </h2>
                      <p className="font-semibold text-blue-600" style={{ fontSize: '15px', marginTop: '8px' }}>
                        {selected.detail.subtitle}
                      </p>
                    </div>

                    {/* Digest label */}
                    <div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '12px' }}>
                      <span className="font-bold uppercase tracking-widest text-slate-400" style={{ fontSize: '11px' }}>
                        Unified Clinical Digest
                      </span>
                    </div>

                    {/* Digest box */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl" style={{ padding: '24px', textAlign: 'center' }}>
                      <p className="text-slate-700 leading-relaxed" style={{ fontSize: '14px', whiteSpace: 'pre-line' }}>
                        {selected.detail.digest}
                      </p>
                    </div>

                    {/* Info highlight */}
                    <div className="flex items-start bg-blue-50 border border-blue-100 rounded-xl" style={{ marginTop: '20px', padding: '18px', gap: '12px' }}>
                      <Sparkles className="text-blue-500 shrink-0" style={{ width: '16px', height: '16px', marginTop: '2px' }} />
                      <p className="text-blue-700 leading-relaxed" style={{ fontSize: '13px' }}>
                        <strong>How Amara saves time:</strong>{' '}
                        {selected.detail.tip}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-2 border-t border-slate-100 mt-auto" style={{ paddingTop: '24px', marginTop: '28px' }}>
                      <CheckCircle className="text-blue-500 shrink-0" style={{ width: '16px', height: '16px' }} />
                      <span className="text-slate-500" style={{ fontSize: '13px' }}>
                        Direct HIPAA-compliant patient sharing standard
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
