import React, { useState } from 'react';
import { Clock, Heart, HeartHandshake, Sparkles } from 'lucide-react';
import LayoutContainer from './LayoutContainer';

const sliderCSS = `
  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    background: #e2e8f0;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: #2563eb;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  }
  input[type='range']::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #2563eb;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid white;
  }
`;

export default function SavingsCalculator() {
  const [patientLoad, setPatientLoad] = useState(20);
  const [searchTime, setSearchTime]   = useState(6);

  const timeSavedPerPatient = searchTime * 0.85;
  const weeklyHrs  = ((patientLoad * timeSavedPerPatient * 5) / 60).toFixed(1);
  const monthlyHrs = (weeklyHrs * 4.33).toFixed(1);
  const annualDays = Math.round((monthlyHrs * 12) / 8);

  return (
    <section className="bg-white border-b border-slate-100" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <style>{sliderCSS}</style>
      <LayoutContainer>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">

          {/* LEFT COLUMN */}
          <div>
            {/* Label */}
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full" style={{ marginBottom: '20px' }}>
              Why Doctors Love Amara
            </span>

            {/* Heading */}
            <h2 className="font-extrabold text-slate-900 leading-tight" style={{ fontSize: '36px', maxWidth: '420px', lineHeight: 1.2 }}>
              Reclaim Hours of Clinical Time Every Week
            </h2>

            {/* Description */}
            <p className="text-slate-500 leading-relaxed" style={{ fontSize: '16px', maxWidth: '440px', marginTop: '16px' }}>
              When doctors spend less time sifting through scattered PDFs and typing repeat questions, clinical quality rises. Our platform optimizes pre-consultation alignment, allowing you to step into the room fully contextualized.
            </p>

            {/* Bullets */}
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { Icon: Clock,          title: 'Reduced Screen-Time Burnout',  desc: 'Read consolidated patient context timelines in under 10 seconds of scanning.' },
                { Icon: Heart,          title: 'Empathetic Consultations',     desc: 'Focus purely on the patient rather than taking notes or hunting for recent blood glucose charts.' },
                { Icon: HeartHandshake, title: 'Seamless Follow-Ups',          desc: 'Easily track historical trends across prior and current diagnostic file reports.' },
              ].map(({ Icon, title, desc }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Icon style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>{title}</p>
                    <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6, marginTop: '2px' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Calculator card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full" style={{ padding: '32px' }}>

            {/* Card title */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3 className="font-bold text-slate-900" style={{ fontSize: '18px' }}>Consultation Efficiency Calculator</h3>
              <p className="text-slate-500" style={{ fontSize: '13px', marginTop: '4px' }}>
                Quantify the clinical hours recovered by automating pre-visit history synthesis.
              </p>
            </div>

            {/* Slider 1 */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b' }}>
                  Average Daily Patient Load
                </label>
                <span className="font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-lg" style={{ fontSize: '13px', padding: '4px 12px' }}>
                  {patientLoad} patients/day
                </span>
              </div>
              <input type="range" min="5" max="50" step="1" value={patientLoad}
                onChange={e => setPatientLoad(+e.target.value)} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>5 Patients</span>
                <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>50 Patients</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b' }}>
                  Average Pre-Consultation Chart Sifting Time
                </label>
                <span className="font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-lg" style={{ fontSize: '13px', padding: '4px 12px', flexShrink: 0, marginLeft: '12px' }}>
                  {searchTime} minutes/patient
                </span>
              </div>
              <input type="range" min="2" max="15" step="1" value={searchTime}
                onChange={e => setSearchTime(+e.target.value)} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>2 Minutes</span>
                <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>15 Minutes</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-50 border border-slate-200 rounded-xl" style={{ padding: '16px', textAlign: 'center' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block' }}>Weekly Time Saved</span>
                <span style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', display: 'block', marginTop: '4px' }}>{weeklyHrs} hrs</span>
                <span style={{ fontSize: '11px', color: '#3b82f6', display: 'block', marginTop: '4px' }}>Back to direct medicine</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl" style={{ padding: '16px', textAlign: 'center' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block' }}>Monthly Reclaimed</span>
                <span style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', display: 'block', marginTop: '4px' }}>{monthlyHrs} hrs</span>
                <span style={{ fontSize: '11px', color: '#3b82f6', display: 'block', marginTop: '4px' }}>Reduction in screentime</span>
              </div>
              <div className="rounded-xl" style={{ padding: '16px', textAlign: 'center', background: '#0f172a' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block' }}>Annual Equivalent</span>
                <span style={{ fontSize: '28px', fontWeight: 800, color: '#60a5fa', display: 'block', marginTop: '4px' }}>{annualDays} days</span>
                <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginTop: '4px' }}>Gained per clinic year</span>
              </div>
            </div>

            {/* Footer */}
            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Sparkles style={{ width: '14px', height: '14px', color: '#3b82f6', flexShrink: 0 }} />
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Calculated based on standard clinical scheduling protocols</span>
            </div>
          </div>

        </div>
      </LayoutContainer>
    </section>
  );
}
