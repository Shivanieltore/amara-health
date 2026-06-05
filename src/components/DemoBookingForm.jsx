import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, PencilLine } from 'lucide-react';

export default function DemoBookingForm() {
  const [mode, setMode] = useState('demo');
  const [formData, setFormData] = useState({
    name: '', email: '', orgType: 'Clinic / Private Practice',
    interest: 'Amara Lite (Standalone)', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setFormData(p => ({ ...p, [k]: v }));

  const inputStyle = {
    height: '48px', width: '100%', borderRadius: '12px',
    border: '1px solid #e2e8f0', padding: '0 16px',
    fontSize: '14px', color: '#0f172a', fontWeight: 600, outline: 'none',
    background: 'white', transition: 'border-color 0.15s', boxSizing: 'border-box',
  };

  const labelStyle = {
    fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '6px',
  };

  return (
    <section
      id="demo-section"
      style={{ background: '#f8fafc', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto', paddingInline: '32px' }}>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-20 items-start">

          {/* LEFT COLUMN */}
          <div>
            <p style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '999px', padding: '6px 16px', marginBottom: '12px' }}>
              Get Started
            </p>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, margin: '0 0 16px' }}>
              Evaluate Amara for Your Clinical Practice
            </h2>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.75, marginBottom: '32px' }}>
              Connect with our clinical integration team to schedule an interactive walkthrough or initiate a HIPAA-compliant trial pilot in under a week.
            </p>

            {/* Compliance checklist card */}
            <div style={{ background: 'white', border: '1.5px solid #1e293b', borderRadius: '16px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '16px' }}>
                Enterprise Compliance Checklist
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '12px', columnGap: '8px' }}>
                {['HIPAA Compliant', 'BAA Ready', 'SOC2 Type II Standard', '256-Bit SSL Encryption'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
                    <ShieldCheck style={{ width: '15px', height: '15px', color: '#3b82f6', flexShrink: 0 }} />
                    <span style={{ fontSize: '12px', color: '#334155', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer note */}
            <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.7, marginTop: '72px' }}>
              Need immediate technical EMR documentation or developer sandbox APIs? Over 80 healthcare administrators trust Amara. Contact{' '}
              <a href="mailto:integrations@amarahealth.tech" style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: 500 }}>
                integrations@amarahealth.tech
              </a>
            </p>
          </div>

          {/* RIGHT COLUMN — form card */}
          <div style={{ background: 'white', border: '1.5px solid #1e293b', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', overflow: 'hidden', width: '100%' }}>

            {!submitted ? (
              <>
                {/* Tab switcher */}
                <div style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', gap: '4px', background: '#f1f5f9', borderRadius: '12px', padding: '4px', border: '1.5px solid #1e293b' }}>
                    {[
                      { id: 'demo',  label: 'Book Clinical Demo' },
                      { id: 'pilot', label: 'Start a Practice Pilot' },
                    ].map(tab => {
                      const isActive = mode === tab.id;
                      const isPilot = tab.id === 'pilot';
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setMode(tab.id)}
                          style={{
                            flex: 1, padding: '10px 16px', fontSize: '14px', cursor: 'pointer',
                            fontWeight: 600,
                            color: isActive ? (isPilot ? 'white' : '#0f172a') : '#94a3b8',
                            background: isActive ? (isPilot ? '#2563eb' : 'white') : 'transparent',
                            border: isActive ? (isPilot ? 'none' : '1px solid #e2e8f0') : '1px solid transparent',
                            borderRadius: '8px',
                            boxShadow: isActive ? (isPilot ? '0 2px 8px rgba(37,99,235,0.3)' : '0 1px 3px rgba(0,0,0,0.08)') : 'none',
                            transition: 'all 0.15s',
                          }}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form body */}
                <form
                  onSubmit={e => { e.preventDefault(); if (formData.name && formData.email) setSubmitted(true); }}
                  style={{ padding: '32px' }}
                >
                  {/* Sub-label */}
                  <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: mode === 'pilot' ? '#2563eb' : '#94a3b8', textAlign: 'center', marginBottom: '24px' }}>
                    {mode === 'pilot' ? 'Get Setup Details and Compliance Docs to Begin Trial Days' : 'Schedule a 15-Minute Live Screen Share Walkthrough'}
                  </p>

                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '16px' }}>
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input
                        type="text" required placeholder="Dr. Robert Chen, MD"
                        value={formData.name} onChange={e => set('name', e.target.value)}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#60a5fa'}
                        onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Work Email</label>
                      <input
                        type="email" required placeholder="jessica@healthclinic.org"
                        value={formData.email} onChange={e => set('email', e.target.value)}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#60a5fa'}
                        onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
                  </div>

                  {/* Row 2: Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '16px' }}>
                    <div>
                      <label style={labelStyle}>Entity / Practice Type</label>
                      <select
                        value={formData.orgType} onChange={e => set('orgType', e.target.value)}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={e => e.target.style.borderColor = '#60a5fa'}
                        onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                      >
                        <option>Clinic / Private Practice</option>
                        <option>Hospital</option>
                        <option>Multi-Branch Network</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Product Interest</label>
                      <select
                        value={formData.interest} onChange={e => set('interest', e.target.value)}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={e => e.target.style.borderColor = '#60a5fa'}
                        onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                      >
                        <option>Amara Lite (Standalone)</option>
                        <option>DocDash (Enterprise)</option>
                        <option>Both / Undecided</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Textarea */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <label style={{ ...labelStyle, margin: 0 }}>Integrations or Clinical Requirements / Timelines</label>
                      <span style={{ fontSize: '10px', color: '#94a3b8', fontStyle: 'italic' }}>Optional</span>
                    </div>
                    <textarea
                      rows={4}
                      placeholder="E.g., We use Epic Systems in our cardiology ward and want to review ECG screenshots..."
                      value={formData.notes} onChange={e => set('notes', e.target.value)}
                      style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '12px 16px', fontSize: '14px', color: '#334155', outline: 'none', resize: 'none', background: 'white', lineHeight: 1.6, boxSizing: 'border-box' }}
                      onFocus={e => e.target.style.borderColor = '#60a5fa'}
                      onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    style={{ width: '100%', height: '48px', background: mode === 'pilot' ? '#2563eb' : '#0f172a', color: 'white', fontWeight: 700, fontSize: '14px', borderRadius: '12px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = mode === 'pilot' ? '#1d4ed8' : '#1e293b'}
                    onMouseLeave={e => e.currentTarget.style.background = mode === 'pilot' ? '#2563eb' : '#0f172a'}
                  >
                    {mode === 'pilot' ? 'Submit Pilot Request' : 'Confirm Demo Reservation'} <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </button>

                  {/* Disclaimer */}
                  <p style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic', textAlign: 'center' }}>
                    By clicking submit, you confirm safe storage of your practice data in compliance with standard BAA data clauses.
                  </p>
                </form>
              </>
            ) : (
              <div style={{ padding: '48px', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <CheckCircle2 style={{ width: '32px', height: '32px', color: '#2563eb' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Thank You, {formData.name || 'Doctor'}!</h3>
                <p style={{ fontSize: '14px', color: '#64748b', maxWidth: '320px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  Your {mode === 'demo' ? 'demo request' : 'pilot application'} has been successfully registered.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', orgType: 'Clinic / Private Practice', interest: 'Amara Lite (Standalone)', notes: '' }); }}
                  style={{ fontSize: '13px', fontWeight: 600, color: '#64748b', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', margin: '0 auto' }}
                >
                  <PencilLine style={{ width: '16px', height: '16px' }} /> Reset and Make New Submission
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
