import React, { useState, useRef } from 'react';
import { UserPlus, Share2, UploadCloud, ClipboardList, FileCheck2, Sparkles, Lock, ArrowRight, FileText, ShieldCheck, Upload, CheckCircle } from 'lucide-react';
import LayoutContainer from './LayoutContainer';

export default function AmaraLiteSection() {
  const [activeStep,     setActiveStep]     = useState(0);
  const [dragOver,       setDragOver]       = useState(false);
  const [isHovered,      setIsHovered]      = useState(false);
  const [uploadedFiles,  setUploadedFiles]  = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const steps = [
    { title: 'Clinician Registration', desc: 'Create a secure practitioner profile in under 2 minutes. Enter your credential info to verify clinical status.', metric: 'Takes 120 seconds', badge: 'Zero IT Setup', Icon: UserPlus },
    { title: 'Patient Linkage', desc: 'Your patient is sent a secure, one-time link via SMS or email to pair with your practice interface.', metric: '1-click secure pair', badge: 'HIPAA Guarded', Icon: Share2 },
    { title: 'Patient Data Transmission', desc: 'Patient securely links home monitors (BP, glucose) or uploads recent PDFs, ECG screenshots, or symptoms list.', metric: 'Auto-guided upload', badge: 'File & Device Sync', Icon: UploadCloud },
    { title: 'Chronological Context Synthesis', desc: 'Our context layer reads, segments, and arrays all information in a pristine timeline before you step into the room.', metric: 'Done under 5 seconds', badge: 'AI Contextualization', Icon: ClipboardList },
  ];

  const S = steps[activeStep];

  return (
    <section
      id="amara-lite-solutions"
      className="bg-white border-b border-slate-100 overflow-hidden"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <LayoutContainer>

        {/* Section heading — two-column */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '64px', alignItems: 'center', marginBottom: '64px' }}>

          {/* Left: text — left-aligned, no centering */}
          <div style={{ width: '100%' }}>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#059669', background: '#ecfdf5', padding: '5px 14px', borderRadius: '999px', marginBottom: '16px' }}>
              Amara Lite Portal
            </span>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, margin: 0 }}>
              The Easiest Way to Review Patient History Before the Consultation Starts
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.75, marginTop: '12px' }}>
              Amara Lite is our standalone, signup-and-go doctor portal designed to completely bypass administrative roadblocks. Get access to the integrated patient stream instantly.
            </p>
          </div>

          {/* Right: feature card — vertical list */}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            {[
              { Icon: FileText,    label: 'No Complex Integration Required' },
              { Icon: Sparkles,    label: 'Start in Days, Not Months' },
              { Icon: ShieldCheck, label: 'Perfect for Individual Doctors, Independent Clinics, and Rapid Pilots' },
            ].map(({ Icon, label }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: i < 2 ? '20px' : 0 }}>
                <Icon style={{ width: '18px', height: '18px', color: '#059669', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b', lineHeight: 1.5 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps + Preview — 2 col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" style={{ marginTop: '64px' }}>

          {/* Steps list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Lite Clinical Workflow</p>
            {steps.map((step, i) => {
              const active = activeStep === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left rounded-2xl border transition-all flex gap-4 ${active ? 'bg-blue-50/40 border-blue-200 shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'}`}
                  style={{ padding: '24px' }}
                >
                  <div className={`w-10 h-10 p-2 rounded-xl shrink-0 flex items-center justify-center mt-0.5 transition-colors ${active ? 'bg-blue-100/60 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                    <step.Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-bold text-slate-400">Step {i + 1}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${active ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-500'}`}>{step.badge}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">{step.title}</h4>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
                    <p className="text-xs font-semibold text-blue-600 mt-2">{step.metric}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Preview panel */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden relative w-full" style={{ minHeight: '380px', padding: '40px' }}>
              {/* Large step number watermark */}
              <div className="pointer-events-none absolute top-0 right-0 font-black text-slate-50 leading-none select-none" style={{ fontSize: '96px' }}>{activeStep + 1}</div>

              <div className="relative" style={{ zIndex: 10 }}>
                {/* Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ background: '#eff6ff', borderRadius: '12px', padding: '10px', flexShrink: 0 }}>
                    <S.Icon style={{ color: '#3b82f6', width: '20px', height: '20px' }} />
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', display: 'block' }}>
                      Interactive Live Preview
                    </span>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '2px 0 0 0' }}>
                      Visualizing {S.title}
                    </h4>
                  </div>
                </div>

                {activeStep === 0 && (
                  <div>
                    <p className="text-sm font-semibold text-slate-700" style={{ marginBottom: '20px' }}>Practice Credentials &amp; Access</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {['Dr. Jessica Ross, MD', 'NPI Number: 1982736412', 'Clinical Specialty: Cardiology'].map((v, i) => (
                        <div key={i} className="h-12 bg-slate-50 rounded-xl border border-slate-200 flex items-center px-4 text-sm text-slate-400 w-full">{v}</div>
                      ))}
                    </div>
                    <button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-xl transition-colors" style={{ marginTop: '24px' }}>Verify &amp; Access Amara Lite</button>
                  </div>
                )}

                {activeStep === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Initiate secure client linkage without complex server integrations. Amara generates a dynamic compliance tunnel.
                    </p>
                    <div style={{ background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '14px 16px', overflow: 'hidden' }}>
                      <span style={{ fontSize: '13px', fontFamily: 'monospace', color: '#2563eb', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>https://amara.care/p/92a8-1b7c</span>
                      <button style={{ fontSize: '12px', fontWeight: 700, color: 'white', background: '#0f172a', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>Copy Link</button>
                    </div>
                    <p style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic' }}>
                      This session link expires automatically after 24 hours or upon visit completion.
                    </p>
                  </div>
                )}

                {activeStep === 2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      Secure Patient Upload Interface:
                    </p>
                    {[
                      { label: '✓ Home BP Log Sync (7 days)',          size: '1.2 MB' },
                      { label: '✓ Lab Report PDF (Quest Diagnostics)',  size: '3.4 MB' },
                    ].map((item, i) => (
                      <div key={i} style={{ background: '#eff6ff', borderRadius: '12px', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 500, color: '#1d4ed8' }}>{item.label}</span>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#2563eb', fontFamily: 'monospace', flexShrink: 0 }}>{item.size}</span>
                      </div>
                    ))}
                    {/* Upload zone */}
                    <div
                      onClick={() => fileInputRef.current.click()}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      style={{ border: (isHovered || dragOver) ? '2px dashed #3b82f6' : '2px dashed #cbd5e1', borderRadius: '16px', padding: '28px 20px', textAlign: 'center', cursor: 'pointer', background: (isHovered || dragOver) ? '#eff6ff' : '#f8fafc', transition: 'all 0.2s ease' }}
                    >
                      <div style={{ width: '44px', height: '44px', background: '#dbeafe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                        <Upload style={{ color: '#3b82f6', width: '20px', height: '20px' }} />
                      </div>
                      <p style={{ fontWeight: 700, color: '#1e40af', fontSize: '13px', marginBottom: '4px' }}>Add ECG Screenshot or Prescription File</p>
                      <p style={{ color: '#64748b', fontSize: '12px', marginBottom: '6px' }}>Drag & drop or click to browse</p>
                      <p style={{ color: '#94a3b8', fontSize: '11px' }}>Supports: PDF, DOCX, JPG, PNG — Max 20MB</p>
                      <input ref={fileInputRef} type="file" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={handleFileChange} style={{ display: 'none' }} />
                    </div>

                    {/* Uploaded files list */}
                    {uploadedFiles.length > 0 && (
                      <div style={{ marginTop: '8px' }}>
                        <p style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                          Uploaded Files ({uploadedFiles.length})
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {uploadedFiles.map((file, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '8px 12px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <CheckCircle style={{ color: '#22c55e', width: '15px', height: '15px' }} />
                                <span style={{ fontSize: '12px', fontWeight: 600, color: '#166534' }}>{file.name}</span>
                              </div>
                              <span style={{ fontSize: '11px', color: '#64748b' }}>{(file.size / 1024).toFixed(0)} KB</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeStep === 3 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>
                      The clinical intelligence engine parsed the disjointed inputs and constructed your dashboard timeline view.
                    </p>
                    <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <Sparkles style={{ width: '18px', height: '18px', color: '#2563eb', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#1e40af', display: 'block' }}>Context Summarized Successfully</span>
                        <span style={{ fontSize: '12px', color: '#2563eb', marginTop: '3px', display: 'block' }}>Ready to review in under 10 seconds.</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                        style={{ fontSize: '14px', padding: '10px 20px' }}
                      >
                        Go to Consultation <ArrowRight style={{ width: '16px', height: '16px' }} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </LayoutContainer>
    </section>
  );
}
