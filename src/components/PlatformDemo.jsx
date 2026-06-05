import React, { useState, useMemo } from 'react';
import {
  ShieldCheck, Database, Layers, Clock, Send, Info,
  Activity, User, FileText, CheckCircle2, ArrowRight, RefreshCw,
  CalendarDays, X,
} from 'lucide-react';

/* ── ECG path — dynamic per patient segment ── */
const FULL_WIDTH = 960;

function makeECGPath(segment, offsetX = 0) {
  const beats = 8;
  const beatWidth = FULL_WIDTH / beats;
  const midY = 55;
  let d = `M${offsetX},${midY}`;
  for (let i = 0; i < beats; i++) {
    const x = offsetX + i * beatWidth;
    const sw = beatWidth;
    d += ` L${x + sw * 0.08},${midY}`;
    d += ` Q${x + sw * 0.15},${midY - segment[2] * 30} ${x + sw * 0.22},${midY}`;
    d += ` L${x + sw * 0.35},${midY}`;
    d += ` L${x + sw * 0.38},${midY + segment[3] * 20}`;
    d += ` L${x + sw * 0.42},${midY - segment[4] * 50}`;
    d += ` L${x + sw * 0.46},${midY + Math.abs(segment[5]) * 25}`;
    d += ` L${x + sw * 0.52},${midY}`;
    d += ` Q${x + sw * 0.65},${midY - segment[6] * 20} ${x + sw * 0.75},${midY}`;
    d += ` L${x + sw},${midY}`;
  }
  return d;
}

/* ECG Card — seamless CSS animation, changes per patient */
function ECGCard({ isDash, segment }) {
  const gridColor = isDash ? 'rgba(56,189,248,0.08)' : 'rgba(20,184,166,0.08)';
  const waveColor = isDash ? '#38bdf8' : '#14b8a6';
  const pathA = makeECGPath(segment, 0);
  const pathB = makeECGPath(segment, FULL_WIDTH);
  return (
    <div className="rounded-xl overflow-hidden flex flex-col shrink-0" style={{ height: '210px', background: '#0f172a' }}>
      <div className="flex items-center justify-between shrink-0" style={{ padding: '12px 12px 8px' }}>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
            {isDash ? 'Connected ECG Ingress Feed' : 'Simulated Resting Rhythm'}
          </span>
        </div>
        <span className="text-[11px] font-bold text-sky-400 font-mono">72 BPM</span>
      </div>

      {/* Chart — overflow hidden, inner div scrolls */}
      <div className="mx-3 rounded-md border border-slate-800 overflow-hidden flex-1" style={{ background: '#0f172a' }}>
        <div className="ecg-animate" style={{ width: '200%', height: '100%' }}>
          <svg
            viewBox={`0 0 ${FULL_WIDTH * 2} 110`}
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <defs>
              <pattern id="ecgGrid" width="15" height="15" patternUnits="userSpaceOnUse">
                <path d="M15 0L0 0 0 15" fill="none" stroke={gridColor} strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width={FULL_WIDTH * 2} height="110" fill="url(#ecgGrid)" />
            <path d={pathA} stroke={waveColor} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
            <path d={pathB} stroke={waveColor} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="flex justify-between shrink-0" style={{ padding: '8px 12px' }}>
        <span className="text-[8px] text-zinc-500 font-mono">LEAD II (Standard Calibration)</span>
        <span className="text-[8px] text-zinc-500 font-mono">
          Source: {isDash ? 'HMS HL7 Feed' : 'Uploaded Patient Attachment'}
        </span>
      </div>
    </div>
  );
}

/* Vital Card */
function VitalCard({ label, value, unit, status, date }) {
  const isCaution = status === 'CAUTION';
  return (
    <div className="bg-white rounded-lg border border-slate-200/70 flex flex-col justify-between shadow-sm" style={{ height: '86px', padding: '12px' }}>
      <span className="text-[10px] text-slate-400 font-medium leading-tight">{label}</span>
      <div>
        <div className="flex items-baseline gap-1">
          <span className="font-bold text-slate-900 font-mono leading-none" style={{ fontSize: '20px' }}>{value}</span>
          <span className="text-[10px] text-slate-500">{unit}</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[9px] text-slate-400 leading-none">{date}</span>
          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide ${
            isCaution ? 'bg-amber-50 text-amber-700 border border-amber-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
          }`}>{status}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Patient data ── */
const PATIENTS = [
  {
    id: 'pat-1',
    name: 'Sarah Chen', initials: 'SC', gender: 'Female', age: 56,
    appointmentTime: 'Today, 2:15 PM (15 mins)',
    reason: 'Hypertension & Chronic Fatigue',
    symptoms: [
      'Occasional morning head pressure',
      'Mild generalized fatigue in afternoon',
      'Shortness of breath on steep stairs',
      'Ankle swelling (resolved with elevation)',
    ],
    questions: [
      'Can I take my Amlodipine in the morning with Lisinopril to improve compliance?',
      'Do I need to stop the CoQ10 supplement before my blood draws?',
      'Are my ankle exercises safe if I feel lightheaded?',
    ],
    ecgSegment: [0, 0, 0.05, 0.1, 0.9, -0.3, 0.1, 0, 0, 0],
    notes: 'Patient felt dizzy on Thursday night after skipping dinner. She took her blood pressure home reading at 10 PM: it was 152/91. She wonders if she should shift her Amlodipine dose to the morning instead of evening, or if she needs a potassium check.',
    homeReadings: [
      { label: 'Blood Pressure',      value: '142/89', unit: 'mmHg', status: 'CAUTION', date: 'Yesterday average'    },
      { label: 'Systolic Trend (7d)', value: '138',    unit: 'mmHg', status: 'NORMAL',  date: 'Last 7 days avg'      },
      { label: 'Heart Rate',          value: '71',     unit: 'bpm',  status: 'NORMAL',  date: 'Today morning'        },
      { label: 'Daily Sodium Intake', value: '2,900',  unit: 'mg',   status: 'CAUTION', date: 'From home logger app' },
    ],
    medicines: [
      { name: 'Atorvastatin', dosage: '40mg',  frequency: 'Once daily',           status: 'active' },
      { name: 'Lisinopril',   dosage: '10mg',  frequency: 'Once daily',           status: 'active' },
      { name: 'Amlodipine',   dosage: '5mg',   frequency: 'Once daily (evening)', status: 'active' },
      { name: 'Metformin',    dosage: '500mg', frequency: 'Twice daily',          status: 'active' },
    ],
    reports: [
      { category: 'CARDIOLOGY', date: 'May 12, 2026', name: 'Lipid Panel',           summary: 'LDL 128 mg/dL (borderline high), HDL 52 mg/dL, Triglycerides 145 mg/dL. Continue statin therapy.' },
      { category: 'HEMATOLOGY', date: 'May 18, 2026', name: 'Complete Blood Count',  summary: 'CBC within normal limits. No anemia detected. WBC, RBC, and platelet counts all within reference range.' },
      { category: 'NEPHROLOGY', date: 'May 18, 2026', name: 'Renal Function Panel',  summary: 'Creatinine 0.9 mg/dL (normal). eGFR > 90, BUN 14 mg/dL. Kidney function adequate for current medication regimen.' },
    ],
  },
  {
    id: 'pat-2',
    name: 'Robert Miller', initials: 'RM', gender: 'Male', age: 68,
    appointmentTime: 'Today, 3:00 PM (1 hour)',
    reason: 'Post-CABG 3-Month Cardiology Follow-Up',
    symptoms: [
      'Transient mild chest tightness (non-radiating)',
      'Dry cough (improved since Lisinopril reduction)',
      'Vivid dreams',
    ],
    questions: [
      'Is my dry throat checkup clear to resume moderate weights?',
      'How long do I need to stay on Clopidogrel alongside Aspirin?',
      'Can I take a low-dose sleep aid for the active dreams?',
    ],
    ecgSegment: [0, 0, 0.05, 0.15, 0.95, -0.35, 0.15, 0.05, 0, 0],
    notes: 'Incision site fully closed, healing beautifully. Mild superficial tenderness reported at the saphenous harvest leg site, but no signs of swelling or localized erythema. Walking 2.5 miles daily. Had one episode of shortness of breath yesterday afternoon when pushing a lawn mower; resolved with 3 minutes of seated rest.',
    homeReadings: [
      { label: 'Systolic / Diastolic',  value: '118/74', unit: 'mmHg', status: 'NORMAL', date: 'Today morning'        },
      { label: 'Resting Pulse',         value: '62',     unit: 'bpm',  status: 'NORMAL', date: 'Continuous watch avg' },
      { label: 'Walking SpO2',          value: '96%',    unit: '',     status: 'NORMAL', date: 'Today pulse oximeter' },
      { label: 'Self-scaled Dyspnea',   value: '1 / 10', unit: '',    status: 'NORMAL', date: 'Post-walk rating'     },
    ],
    medicines: [
      { name: 'Clopidogrel',  dosage: '75mg', frequency: 'Once daily',  status: 'active' },
      { name: 'Aspirin',      dosage: '81mg', frequency: 'Once daily',  status: 'active' },
      { name: 'Atorvastatin', dosage: '40mg', frequency: 'Once daily',  status: 'active' },
      { name: 'Metoprolol',   dosage: '25mg', frequency: 'Twice daily', status: 'active' },
    ],
    reports: [
      { category: 'CARDIOLOGY', date: 'May 20, 2026', name: 'Post-CABG Echo Report',   summary: 'EF 58%, no wall motion abnormalities. Grafts appear patent on follow-up imaging. Good recovery trajectory.' },
      { category: 'HEMATOLOGY', date: 'May 25, 2026', name: 'INR / Coagulation Panel', summary: 'INR 2.1 (within therapeutic range). Continue current anticoagulation regimen. Recheck in 4 weeks.' },
    ],
  },
  {
    id: 'pat-3',
    name: 'Priya Nair', initials: 'PN', gender: 'Female', age: 42,
    appointmentTime: 'Today, 4:30 PM (2.5 hrs)',
    reason: 'Thyroid & Fatigue Management Review',
    symptoms: [
      'Persistent fatigue despite 8 hours sleep',
      'Cold intolerance',
      'Brain fog during afternoon hours',
      'Mild hair thinning',
    ],
    questions: [
      'Can I take my Levothyroxine with coffee?',
      'Is fatigue normal at my current TSH level?',
      'Should I check my Vitamin D levels?',
    ],
    ecgSegment: [0, 0, 0.03, 0.08, 0.75, -0.2, 0.08, 0, 0, 0],
    notes: 'TSH mildly elevated at 5.2 on last draw. Patient reports significant improvement in mood since dose increase 6 weeks ago but fatigue persists. Sleep quality reported as poor. No palpitations or tremors. Consider checking ferritin and Vitamin D.',
    homeReadings: [
      { label: 'Resting Heart Rate', value: '64',   unit: 'bpm', status: 'NORMAL',  date: 'This morning'      },
      { label: 'Blood Pressure',     value: '112/72', unit: 'mmHg', status: 'NORMAL', date: 'Yesterday evening' },
      { label: 'Body Temperature',   value: '36.2', unit: '°C',  status: 'NORMAL',  date: 'Today morning'     },
      { label: 'Sleep Duration',     value: '7.8',  unit: 'hrs', status: 'CAUTION', date: 'Avg last 7 days'   },
    ],
    medicines: [
      { name: 'Levothyroxine', dosage: '75mcg',  frequency: 'Once daily (morning)', status: 'active' },
      { name: 'Vitamin D3',    dosage: '2000IU', frequency: 'Once daily',           status: 'active' },
    ],
    reports: [
      { category: 'ENDOCRINOLOGY', date: 'May 10, 2026', name: 'Thyroid Function Panel',    summary: 'TSH 5.2 mIU/L (mildly elevated). Free T4 0.9 ng/dL (low normal). Suggests subclinical hypothyroidism. Dose adjustment recommended.' },
      { category: 'GENERAL',       date: 'May 10, 2026', name: 'Complete Metabolic Panel',  summary: 'All values within normal limits. Ferritin 18 ng/mL (low normal). Consider iron supplementation discussion.' },
    ],
  },
];

/* ── Main ── */
export default function PlatformDemo() {
  const [activeTab,       setActiveTab]       = useState('lite');
  const [activeSection,   setActiveSection]   = useState('health');
  const [selectedId,      setSelectedId]      = useState('pat-1');
  const [noteText,        setNoteText]        = useState('');
  const [isSyncing,       setIsSyncing]       = useState(false);
  const [showModal,       setShowModal]       = useState(false);
  const [selectedPathway, setSelectedPathway] = useState('lite');
  const [modalForm,       setModalForm]       = useState({ name: '', email: '', clinic: '', specialty: '', role: 'Physician / Doctor', context: '' });
  const [modalErrors,     setModalErrors]     = useState({});
  const setField = (k, v) => {
    setModalForm(p => ({ ...p, [k]: v }));
    if (modalErrors[k]) setModalErrors(p => ({ ...p, [k]: '' }));
  };
  const handleModalSubmit = () => {
    const errs = {};
    if (!modalForm.name.trim())     errs.name     = 'Please fill out this field';
    if (!modalForm.email.trim())    errs.email    = 'Please fill out this field';
    if (!modalForm.clinic.trim())   errs.clinic   = 'Please fill out this field';
    if (!modalForm.specialty.trim()) errs.specialty = 'Please fill out this field';
    setModalErrors(errs);
    if (Object.keys(errs).length === 0) setShowModal(false);
  };

  const isDash = activeTab === 'dash';
  const patient = PATIENTS.find(p => p.id === selectedId) || PATIENTS[0];

  const triggerSync = () => { setIsSyncing(true); setTimeout(() => setIsSyncing(false), 1200); };
  const switchTab   = (tab) => { setActiveTab(tab); setActiveSection('health'); triggerSync(); };

  const TABS = [
    { id: 'health',  label: 'Health Trends & Readings' },
    { id: 'meds',    label: `Medicines (${patient.medicines.length})` },
    { id: 'reports', label: 'Diagnostic Reports' },
    ...(isDash ? [{ id: 'integration', label: 'Tech & HL7 Payload' }] : []),
  ];

  return (
    <div className="w-full pb-16">

      {/* ── Header ── */}
      <div className="text-center mb-8" style={{ paddingTop: '80px' }}>
        <span className="inline-block font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full" style={{ fontSize: '10px', marginBottom: '20px' }}>
          Interactive Platform Demo
        </span>
        <h2 className="font-extrabold text-slate-900" style={{ fontSize: '42px', lineHeight: 1.1 }}>
          Experience the Pathways
        </h2>
        <p className="text-slate-500 leading-relaxed" style={{ fontSize: '16px', maxWidth: '550px', textAlign: 'center', margin: '16px auto 0' }}>
          Toggle between our setups to see how patient data is reconciled and
          visualized for clinicians before the scheduled consultation starts.
        </p>
      </div>

      {/* ── Toggle ── */}
      <div className="flex justify-center" style={{ marginTop: '24px', marginBottom: '40px' }}>
        <div className="flex bg-slate-100 rounded-xl gap-1.5" style={{ height: '48px', maxWidth: '420px', width: '100%', padding: '4px' }}>
          <button onClick={() => switchTab('lite')} className="flex-1 flex items-center justify-center gap-2 rounded-lg font-semibold transition-all"
            style={{ height: '40px', fontSize: '13px', background: !isDash ? 'white' : 'transparent', color: !isDash ? '#4338ca' : '#64748b', boxShadow: !isDash ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }}>
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />Amara Lite Portal
          </button>
          <button onClick={() => switchTab('dash')} className="flex-1 flex items-center justify-center gap-2 rounded-lg font-semibold transition-all"
            style={{ height: '40px', fontSize: '13px', background: isDash ? '#0f172a' : 'transparent', color: isDash ? '#38bdf8' : '#64748b', boxShadow: isDash ? '0 1px 3px rgba(0,0,0,0.2)' : 'none' }}>
            <Database className="w-3.5 h-3.5 shrink-0" />DocDash EMR Layer
          </button>
        </div>
      </div>

      {/* ── Main card ── */}
      <div className="border border-slate-200 shadow-xl overflow-hidden bg-slate-50 flex flex-col" style={{ borderRadius: '16px', maxHeight: '620px' }}>

        {/* Top bar */}
        <div className={`border-b flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0 transition-colors ${isDash ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`} style={{ padding: '12px 20px' }}>
          <div className="flex items-center gap-3">
            <div className={`flex items-center justify-center rounded-lg shrink-0 ${isDash ? 'bg-sky-500/10 text-sky-400' : 'bg-indigo-500/10 text-indigo-600'}`} style={{ width: '32px', height: '32px' }}>
              {isDash ? <Layers className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`font-semibold text-sm ${isDash ? 'text-white' : 'text-slate-900'}`}>
                  {isDash ? 'DocDash Integration Core' : 'Amara Lite Clinician Portal'}
                </span>
                <span className={`font-bold px-2 py-0.5 rounded ${isDash ? 'bg-sky-950 text-sky-400 border border-sky-900' : 'bg-indigo-50 text-indigo-700 border border-indigo-100'}`} style={{ fontSize: '9px' }}>
                  {isDash ? 'EMR Connected' : 'No-IT Needed'}
                </span>
              </div>
              <p className={isDash ? 'text-slate-400' : 'text-slate-500'} style={{ fontSize: '11px', marginTop: '1px' }}>
                {isDash ? 'Real-time FHIR endpoints aggregating EMR & continuous telemetric hardware feeds' : 'Instant clinician interface powered by secure digital intakes and PDF reports scanner'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className={`text-xs font-medium ${isDash ? 'text-slate-400' : 'text-slate-500'}`}>Active Demo Patient:</span>
            <select
              value={selectedId}
              onChange={e => { setSelectedId(e.target.value); setActiveSection('health'); }}
              className={`text-xs font-semibold rounded-lg px-3 outline-none cursor-pointer transition-all ${isDash ? 'bg-slate-800 text-stone-100 border border-slate-700 focus:border-sky-500' : 'bg-slate-50 text-slate-800 border border-slate-200 focus:border-indigo-400'}`}
              style={{ height: '34px' }}
            >
              {PATIENTS.map(p => (
                <option key={p.id} value={p.id}>{p.name} ({p.gender}, {p.age})</option>
              ))}
            </select>
            {isDash && (
              <button onClick={triggerSync} className="rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-700" style={{ padding: '7px' }}>
                <RefreshCw className={`h-3 w-3 ${isSyncing ? 'animate-spin text-sky-400' : ''}`} />
              </button>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0">

          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-3 border-r border-slate-200 bg-white flex flex-col justify-between h-full" style={{ padding: '16px' }}>
            <div className="flex flex-col gap-4 min-h-0 overflow-y-auto">

              {/* Patient card */}
              <div className="bg-slate-50 rounded-xl border border-slate-100" style={{ padding: '12px' }}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex gap-2.5">
                    <div className="rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold shrink-0" style={{ width: '36px', height: '36px', fontSize: '12px' }}>
                      {patient.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900" style={{ fontSize: '14px' }}>{patient.name}</h4>
                      <p className="text-slate-500" style={{ fontSize: '11px' }}>{patient.gender}, {patient.age} years</p>
                    </div>
                  </div>
                  <span className="bg-amber-50 text-amber-700 italic border border-amber-100 rounded font-medium shrink-0" style={{ fontSize: '9px', padding: '2px 6px' }}>
                    Consultation Scheduled
                  </span>
                </div>
                <div className="border-t border-slate-200/60 space-y-1.5" style={{ marginTop: '10px', paddingTop: '10px' }}>
                  <div className="flex justify-between items-center gap-2" style={{ fontSize: '11px' }}>
                    <span className="text-slate-500 shrink-0 font-medium">Scheduled Time</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1 text-right">
                      <Clock className="w-2.5 h-2.5 text-indigo-500 shrink-0" />{patient.appointmentTime}
                    </span>
                  </div>
                  <div className="flex justify-between items-start gap-2" style={{ fontSize: '11px' }}>
                    <span className="text-slate-500 shrink-0 font-medium">Chief Reason</span>
                    <span className="font-semibold text-slate-800 text-right leading-snug">{patient.reason}</span>
                  </div>
                </div>
              </div>

              {/* Symptoms */}
              <div>
                <h5 className="font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1" style={{ fontSize: '10px' }}>
                  <User className="h-3 w-3 text-indigo-500" />Intake Symptoms ({patient.symptoms.length})
                </h5>
                <ul className="space-y-1">
                  {patient.symptoms.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 bg-slate-50 rounded-lg border border-slate-100" style={{ height: '34px', padding: '8px 10px', fontSize: '11px' }}>
                      <CheckCircle2 className="h-3 w-3 text-indigo-500 shrink-0" />
                      <span className="leading-none truncate">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Questions */}
              <div>
                <h5 className="font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1" style={{ fontSize: '10px' }}>
                  <Activity className="h-3 w-3 text-sky-500" />Patient Questions
                </h5>
                <div className="space-y-1.5">
                  {patient.questions.map((q, i) => (
                    <div key={i} className="bg-amber-50/40 rounded-lg border border-amber-100/60 text-slate-700 leading-snug" style={{ fontSize: '11px', padding: '8px' }}>
                      <span className="font-bold text-amber-700 mr-1">Q{i + 1}:</span>{q}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note input */}
            <form className="border-t border-slate-100 shrink-0" style={{ paddingTop: '12px', marginTop: '12px' }} onSubmit={e => { e.preventDefault(); setNoteText(''); }}>
              <label className="block font-semibold text-slate-600 mb-1.5" style={{ fontSize: '11px' }}>Draft Clinical Pre-consult Note:</label>
              <div className="relative">
                <input type="text" value={noteText} onChange={e => setNoteText(e.target.value)}
                  placeholder="e.g. Discuss switching dosage to morning..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 pr-9 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-400 focus:outline-none transition-all"
                  style={{ height: '36px', fontSize: '11px' }} />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-600 hover:text-indigo-800 transition-colors">
                  <Send className="h-3 w-3" />
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-9 flex flex-col bg-slate-50/70 h-full" style={{ padding: '20px' }}>

            {/* Tabs */}
            <div className="border-b border-slate-200 shrink-0" style={{ marginBottom: '16px' }}>
              <div className="flex overflow-x-auto" style={{ gap: '8px' }}>
                {TABS.map(t => (
                  <button key={t.id} onClick={() => setActiveSection(t.id)}
                    className={`font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap px-6 ${
                      activeSection === t.id
                        ? t.id === 'integration' ? 'border-sky-500 text-sky-600' : 'border-indigo-600 text-indigo-700'
                        : 'border-transparent text-slate-500 hover:text-slate-700'
                    }`}
                    style={{ height: '40px', fontSize: '12px' }}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Panels */}
            <div className="flex-1 flex flex-col min-h-0" style={{ marginBottom: '16px' }}>

              {activeSection === 'health' && (
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0" style={{ gap: '16px' }}>
                  <div className="flex flex-col min-h-0" style={{ gap: '10px' }}>
                    <h6 className="font-bold uppercase tracking-widest text-slate-400 shrink-0" style={{ fontSize: '10px' }}>Home Patient Vitals Review</h6>
                    <div className="grid grid-cols-2 shrink-0" style={{ gap: '12px' }}>
                      {patient.homeReadings.map(v => <VitalCard key={v.label} {...v} />)}
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200/70 shadow-sm flex-1 overflow-y-auto" style={{ padding: '12px' }}>
                      <span className="block font-bold text-slate-400 uppercase tracking-widest mb-2" style={{ fontSize: '9px' }}>Consolidated Clinician Notes</span>
                      <p className="text-slate-700" style={{ fontSize: '11px', lineHeight: 1.5 }}>{patient.notes}</p>
                    </div>
                  </div>
                  <div className="flex flex-col min-h-0" style={{ gap: '10px' }}>
                    <ECGCard isDash={isDash} segment={patient.ecgSegment || [0,0,0.05,0.1,0.9,-0.3,0.1,0,0,0]} />
                    <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl flex items-start flex-1" style={{ padding: '12px', gap: '10px' }}>
                      <Info style={{ width: '14px', height: '14px', marginTop: '1px', color: '#4f46e5', flexShrink: 0 }} />
                      <div>
                        <p className="font-bold text-indigo-900" style={{ fontSize: '11px' }}>Pre-Consult Synthesis Active</p>
                        <p className="text-slate-600 mt-1" style={{ fontSize: '11px', lineHeight: 1.5 }}>
                          All medicines, symptoms, and PDF reports are cross-checked automatically to surface compliance bottlenecks and highlight critical focus points before speaking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'meds' && (
                <div className="flex-1 bg-white rounded-xl border border-slate-200/70 shadow-sm overflow-auto" style={{ padding: '16px' }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
                    <h6 className="font-bold uppercase tracking-widest text-slate-400" style={{ fontSize: '10px' }}>Reconciled Medicine Log</h6>
                    <span className="text-slate-400 font-medium" style={{ fontSize: '10px' }}>Cross-verified via patient log &amp; EMR record</span>
                  </div>
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50/40 text-slate-400 font-bold uppercase tracking-wider" style={{ fontSize: '10px' }}>
                        <th className="py-2 px-3">Medicine Name</th>
                        <th className="py-2 px-3">Dosage</th>
                        <th className="py-2 px-3">Frequency</th>
                        <th className="py-2 px-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {patient.medicines.map((med, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-3 px-3 font-semibold text-slate-900 text-sm">{med.name}</td>
                          <td className="py-3 px-3 text-slate-600 font-mono text-xs">{med.dosage}</td>
                          <td className="py-3 px-3 text-slate-600 text-xs">{med.frequency}</td>
                          <td className="py-3 px-3 text-right">
                            <span className="font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wide" style={{ fontSize: '9px' }}>{med.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeSection === 'reports' && (
                <div className="flex-1 flex flex-col min-h-0 overflow-auto" style={{ gap: '12px' }}>
                  <div className="flex justify-between items-center bg-white border border-slate-200/70 rounded-xl shadow-sm shrink-0" style={{ padding: '10px 14px' }}>
                    <div className="flex items-center gap-2">
                      <FileText className="text-indigo-600 h-3.5 w-3.5" />
                      <span className="font-semibold text-slate-800 text-sm">Parsed Clinical Reports</span>
                    </div>
                    <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold uppercase tracking-wide rounded-md" style={{ fontSize: '9px', padding: '3px 8px' }}>Auto-Ingested</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '12px' }}>
                    {patient.reports.map((rep, i) => (
                      <div key={i} className="bg-white rounded-xl border border-slate-200/70 shadow-sm flex flex-col" style={{ padding: '14px', gap: '8px' }}>
                        <div className="flex items-center justify-between">
                          <span className="font-bold uppercase tracking-wider text-slate-400 bg-slate-100 rounded font-mono" style={{ fontSize: '9px', padding: '3px 6px' }}>{rep.category}</span>
                          <span className="text-slate-400 font-medium" style={{ fontSize: '10px' }}>{rep.date}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">{rep.name}</h4>
                        <p className="text-slate-600 bg-slate-50 rounded-lg border border-slate-100 flex-1" style={{ fontSize: '11px', lineHeight: 1.5, padding: '8px' }}>{rep.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'integration' && isDash && (
                <div className="flex-1 bg-slate-950 text-slate-300 rounded-xl border border-slate-800 font-mono relative overflow-hidden shadow-lg flex flex-col" style={{ padding: '16px' }}>
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                    <span className="text-zinc-500 font-bold uppercase" style={{ fontSize: '8px' }}>Active API Sandbox</span>
                  </div>
                  <h6 className="font-bold text-sky-400 uppercase tracking-wider mb-3" style={{ fontSize: '10px' }}>Simulated FHIR Ingestion Output (HL7 Patient Context Frame)</h6>
                  <pre className="text-zinc-400 flex-1 overflow-y-auto bg-slate-900 border border-slate-800 rounded-lg leading-relaxed" style={{ fontSize: '10px', padding: '12px' }}>
{`{
  "resourceType": "PatientBundle",
  "id": "${patient.id}",
  "patient_demographics": {
    "name": "${patient.name}",
    "age": ${patient.age},
    "gender": "${patient.gender}"
  },
  "clinical_endpoints": [
    { "type": "LAB_FEED_HL7", "status": "CONNECTED", "latency": "14ms" },
    { "type": "CARDIO_TELEMETRY", "status": "ACTIVE_INGEST", "sampling": "500Hz" }
  ],
  "pre_consult_summary": {
    "compliancy_metric": "RECONCILED",
    "synthesized_notes_hash": "sha256-amara_dash_91a03fc"
  }
}`}
                  </pre>
                  <div className="flex items-center justify-between text-zinc-600 mt-2.5" style={{ fontSize: '9px' }}>
                    <span>Server: epic-gateway-prod.vanceclinic.internal</span>
                    <span>Secure TLS 1.3 Encryption Enabled</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0" style={{ paddingTop: '12px' }}>
              <div>
                <span className="block font-bold text-slate-400 uppercase tracking-widest mb-0.5" style={{ fontSize: '9px' }}>Selected Setup Footprint</span>
                <p className="text-slate-700 font-medium leading-snug text-xs" style={{ maxWidth: '440px' }}>
                  {isDash ? 'DocDash: Secure, API-driven middleware configured by IT to bind existing system workflows.' : 'Amara Lite: Web portal setup immediately without installing hospital servers, ideal for solo practices/clinics.'}
                </p>
              </div>
              <button
                onClick={() => !isDash && setShowModal(true)}
                className={`font-bold rounded-xl cursor-pointer transition-all flex items-center gap-1.5 shrink-0 ${isDash ? 'bg-slate-900 border border-slate-700 text-sky-400 hover:bg-slate-800' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200'}`}
                style={{ height: '36px', fontSize: '12px', padding: '0 16px' }}>
                <span>{isDash ? 'Initiate DocDash Integration' : 'Activate Amara Lite Staging'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(100,116,139,0.4)', backdropFilter: 'blur(4px)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: 'white', borderRadius: '16px', padding: '32px', width: '90%', maxWidth: '680px', position: 'relative', boxShadow: '0 25px 60px rgba(0,0,0,0.15)', margin: '16px' }}
          >
            {/* Close */}
            <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
              <X style={{ width: '20px', height: '20px' }} />
            </button>

            {/* Header */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ background: '#eef2ff', borderRadius: '12px', padding: '8px', display: 'inline-flex', marginBottom: '12px' }}>
                <CalendarDays style={{ width: '20px', height: '20px', color: '#4f46e5' }} />
              </div>
              <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>Book a Product Demo</h2>
              <p style={{ fontSize: '12px', color: '#64748b' }}>Pick a 15-min workflow tour with our clinicians</p>
            </div>

            {/* Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Full Name *</label>
                <input type="text" placeholder="Dr. Eleanor Vance" value={modalForm.name} onChange={e => setField('name', e.target.value)}
                  style={{ width: '100%', height: '36px', borderRadius: '10px', border: modalErrors.name ? '1px solid #ef4444' : '1px solid #e2e8f0', padding: '0 12px', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }}
                  onFocus={e => e.target.style.borderColor = modalErrors.name ? '#ef4444' : '#818cf8'} onBlur={e => e.target.style.borderColor = modalErrors.name ? '#ef4444' : '#e2e8f0'} />
                {modalErrors.name && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '4px' }}>⚠ {modalErrors.name}</p>}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Medical Email *</label>
                  <input type="email" placeholder="eleanor@vancecardiology.cc" value={modalForm.email} onChange={e => setField('email', e.target.value)}
                    style={{ width: '100%', height: '36px', borderRadius: '10px', border: modalErrors.email ? '1px solid #ef4444' : '1px solid #e2e8f0', padding: '0 12px', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }}
                    onFocus={e => e.target.style.borderColor = modalErrors.email ? '#ef4444' : '#818cf8'} onBlur={e => e.target.style.borderColor = modalErrors.email ? '#ef4444' : '#e2e8f0'} />
                  {modalErrors.email && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '4px' }}>⚠ {modalErrors.email}</p>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Clinic/Hospital Name *</label>
                  <input type="text" placeholder="Vance Heart & Vascular Clini" value={modalForm.clinic} onChange={e => setField('clinic', e.target.value)}
                    style={{ width: '100%', height: '36px', borderRadius: '10px', border: modalErrors.clinic ? '1px solid #ef4444' : '1px solid #e2e8f0', padding: '0 12px', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }}
                    onFocus={e => e.target.style.borderColor = modalErrors.clinic ? '#ef4444' : '#818cf8'} onBlur={e => e.target.style.borderColor = modalErrors.clinic ? '#ef4444' : '#e2e8f0'} />
                  {modalErrors.clinic && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '4px' }}>⚠ {modalErrors.clinic}</p>}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Specialty *</label>
                  <input type="text" placeholder="Cardiology" value={modalForm.specialty} onChange={e => setField('specialty', e.target.value)}
                    style={{ width: '100%', height: '36px', borderRadius: '10px', border: modalErrors.specialty ? '1px solid #ef4444' : '1px solid #e2e8f0', padding: '0 12px', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }}
                    onFocus={e => e.target.style.borderColor = modalErrors.specialty ? '#ef4444' : '#818cf8'} onBlur={e => e.target.style.borderColor = modalErrors.specialty ? '#ef4444' : '#e2e8f0'} />
                  {modalErrors.specialty && <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '4px' }}>⚠ {modalErrors.specialty}</p>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Your Role</label>
                  <select value={modalForm.role} onChange={e => setField('role', e.target.value)}
                    style={{ width: '100%', height: '36px', borderRadius: '10px', border: '1px solid #e2e8f0', padding: '0 12px', fontSize: '12px', outline: 'none', cursor: 'pointer', background: 'white', boxSizing: 'border-box' }}>
                    <option>Physician / Doctor</option>
                    <option>Nurse Practitioner</option>
                    <option>Hospital Admin</option>
                    <option>IT / Integration Lead</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#334155', marginBottom: '10px' }}>Pathway of Interest</label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {[{ id: 'lite', label: 'Amara Lite' }, { id: 'docdash', label: 'DocDash Layer' }, { id: 'unsure', label: 'Not Sure Yet' }].map(opt => (
                    <button key={opt.id} type="button" onClick={() => setSelectedPathway(opt.id)}
                      style={{ padding: '8px 20px', borderRadius: '20px', fontSize: '13px', fontWeight: selectedPathway === opt.id ? 600 : 500, background: 'white', color: selectedPathway === opt.id ? '#4f46e5' : '#64748b', border: selectedPathway === opt.id ? '2px solid #4f46e5' : '1px solid #e2e8f0', cursor: 'pointer' }}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Clinical Context / Requests (Optional)</label>
                <textarea rows={2} placeholder="e.g. Seeking EMR integration, testing tablet compatibility..." value={modalForm.context} onChange={e => setField('context', e.target.value)}
                  style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '12px 16px', fontSize: '14px', outline: 'none', resize: 'none', lineHeight: 1.6, boxSizing: 'border-box' }}
                  onFocus={e => e.target.style.borderColor = '#818cf8'} onBlur={e => e.target.style.borderColor = '#e2e8f0'} />
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock style={{ width: '16px', height: '16px', color: '#94a3b8' }} />
                <span style={{ fontSize: '14px', color: '#94a3b8' }}>Slots available this week</span>
              </div>
              <button onClick={handleModalSubmit}
                style={{ background: '#4f46e5', color: 'white', fontWeight: 700, fontSize: '14px', padding: '12px 24px', borderRadius: '12px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Send style={{ width: '16px', height: '16px' }} />
                Confirm Demo Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
