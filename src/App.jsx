import React from 'react';
import PlatformDemo from './components/PlatformDemo';
import ConsultationWorkspace from './components/ConsultationWorkspace';
import ProblemsSection from './components/ProblemsSection';
import AmaraLiteSection from './components/AmaraLiteSection';
import ShareGrid from './components/ShareGrid';
import SavingsCalculator from './components/SavingsCalculator';
import DocDashSection from './components/DocDashSection';
import ComparisonSection from './components/ComparisonSection';
import DemoBookingForm from './components/DemoBookingForm';
import FAQSection from './components/FAQSection';
import LayoutContainer from './components/LayoutContainer';
import { Sparkles, ArrowRight, ShieldCheck, Stethoscope, CheckCircle, Lock } from 'lucide-react';

export default function App() {
  const [activeDeployment, setActiveDeployment] = React.useState('lite');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">

      {/* ── Navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-slate-100" style={{ height: '88px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <LayoutContainer className="h-full flex items-center justify-between">
          <div className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="Amara Health" className="h-10 w-auto" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-[17px] leading-none">Amara</span>
                <span className="font-extrabold text-blue-600 text-[17px] leading-none">HEALTH</span>
              </div>
              <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-widest mt-1">Clinical Solutions</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#amara-lite-solutions" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">Amara Lite</a>
            <a href="#docdash-solutions" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">DocDash (Enterprise)</a>
            <a href="#clinical-faq" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">Integrations &amp; FAQ</a>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <a href="#demo-section" className="hidden sm:block text-sm font-bold text-slate-900 hover:text-blue-900 transition-colors">
              Book Walkthrough
            </a>
            <a href="#demo-section" className="inline-flex items-center gap-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors" style={{ padding: '12px 24px', fontSize: '15px', borderRadius: '12px' }}>
              Start a Practice Pilot <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </LayoutContainer>
      </header>

      {/* ── Hero ── */}
      <section
        className="relative bg-white border-b border-slate-100 overflow-hidden"
        style={{ paddingTop: '128px', paddingBottom: '100px' }}
      >
        {/* Decorative glow — pointer-events-none so it never blocks interaction */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-blue-50/60 to-transparent"
          style={{ height: '460px' }}
        />

        <LayoutContainer className="relative z-10">
          {/* All hero content — centered column */}
          <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-blue-800 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" style={{ fill: 'rgba(37,99,235,0.1)' }} />
              Unified Patient Context Layer
            </span>

            {/* H1 */}
            <h1
              className="font-black text-slate-900 tracking-tight leading-[1.05]"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', width: '100%', maxWidth: '1000px', textAlign: 'center' }}
            >
              See the Full Patient Story<br />
              <span className="text-blue-600">Before the Consultation Starts.</span>
            </h1>

            {/* Description */}
            <p
              className="text-slate-500 font-medium leading-[1.8]"
              style={{ fontSize: '18px', width: '100%', maxWidth: '800px', textAlign: 'center' }}
            >
              Patients arrive with symptoms, home readings, wearable ECG charts, and questions. Amara organizes everything into one structured clinical context screen so you spend less time searching PDFs and more time diagnosing.
            </p>

            {/* Solution switcher */}
            <div
              className="w-full bg-white border border-slate-200 rounded-2xl text-left overflow-hidden"
              style={{ padding: '44px' }}
            >
              {/* Top section */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '32px', marginBottom: '32px' }}>
                <div style={{ maxWidth: '520px' }}>
                  <div className="inline-flex items-center gap-1.5 text-blue-600 text-[11px] uppercase tracking-widest mb-3" style={{ background: '#eff6ff', padding: '5px 12px', borderRadius: '999px', fontWeight: 800 }}>
                    <Stethoscope className="w-3.5 h-3.5 shrink-0" />
                    Interactive Solution Alignment
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">The Pre-Consultation Context Layer</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Amara is <strong className="text-slate-800">strictly a clinical synthesis layer, not an EMR replacement</strong>. We sit adjacently on top of existing tools to organize messy patient-submitted logs (home diaries, wearable reports, ECG waveforms) onto a single 10-second timeline scan.
                  </p>
                </div>
                {/* Tab switcher */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '4px', display: 'flex', gap: '4px', flexShrink: 0 }}>
                  <button type="button" onClick={() => setActiveDeployment('lite')} style={{ background: activeDeployment === 'lite' ? 'white' : 'transparent', border: activeDeployment === 'lite' ? '1px solid #e2e8f0' : 'none', borderRadius: '10px', padding: '10px 20px', fontSize: '13px', fontWeight: 700, color: activeDeployment === 'lite' ? '#3b82f6' : '#94a3b8', boxShadow: activeDeployment === 'lite' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Amara Lite (Standalone)
                  </button>
                  <button type="button" onClick={() => setActiveDeployment('enterprise')} style={{ background: activeDeployment === 'enterprise' ? 'white' : 'transparent', border: activeDeployment === 'enterprise' ? '1px solid #e2e8f0' : 'none', borderRadius: '10px', padding: '10px 20px', fontSize: '13px', fontWeight: 700, color: activeDeployment === 'enterprise' ? '#3b82f6' : '#94a3b8', boxShadow: activeDeployment === 'enterprise' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    DocDash (Enterprise)
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid #f1f5f9', marginBottom: '36px' }} />

              {/* Bottom section */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px', alignItems: 'start' }}>
                {activeDeployment === 'lite' ? (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div>
                        <span style={{ display: 'inline-block', border: '1px solid #cbd5e1', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Direct Account Sign-Up</span>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Standalone Workspace for Doctors, Clinics &amp; Chains</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">Requires <strong className="text-blue-600">zero EMR integration</strong>, IT setup, or hospital procurement cycles. Ideal for independent healthcare providers, growing multi-specialty private clinics, or expanding clinic networks looking to instantly collect device logs.</p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>Send secure upload links via text or email in <strong className="text-slate-800">120 seconds</strong>.</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>HIPAA-guarded portal handles home monitor datasets, glucose trends &amp; medical PDFs.</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8' }}>Workspace Profile</span>
                        <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981' }}>Instant Launch</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span className="text-sm text-slate-500">Practice Support:</span>
                          <span className="text-sm font-bold text-slate-900 text-right">Licensed Clinicians &amp; chains</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span className="text-sm text-slate-500">Integration Load:</span>
                          <span className="text-sm font-bold text-slate-900 text-right">None (Standalone Interface)</span>
                        </div>
                      </div>
                      <a href="#amara-lite-solutions" style={{ display: 'block', width: '100%', textAlign: 'center', background: '#2563eb', color: 'white', fontWeight: 700, fontSize: '14px', height: '48px', lineHeight: '48px', borderRadius: '12px', textDecoration: 'none', transition: 'background 0.15s', marginTop: '32px' }}>
                        Explore Amara Lite Features
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div>
                        <span style={{ display: 'inline-block', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#60a5fa', background: '#1e3a8a', border: '1px solid #1e40af', padding: '4px 12px', borderRadius: '999px', marginBottom: '14px' }}>Hospital Tech Stack Integration</span>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Embedded EMR Solution for Hospital Systems</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">Designed to embed directly within active Electronic Medical Records. Connects securely through read-only system endpoints to overlay chronological timeline layers inside system views.</p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                          <span>Embeds directly inside active <strong className="text-slate-800">Epic, Cerner, or Meditech</strong> instances.</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                          <span>Synchronizes clinical files via secure <strong className="text-slate-800">HL7 &amp; FHIR API pipelines</strong>.</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ background: '#0f172a', color: 'white', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b' }}>Hospital Systems Profile</span>
                        <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#60a5fa' }}>Secure Read-Only</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '14px', color: '#94a3b8' }}>Environment:</span>
                          <span style={{ fontSize: '14px', fontWeight: 700, color: '#e2e8f0' }}>Epic / Cerner / Custom EHR</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '14px', color: '#94a3b8' }}>Implementation:</span>
                          <span style={{ fontSize: '14px', fontWeight: 700, color: '#e2e8f0' }}>HL7, FHIR, API Stream</span>
                        </div>
                      </div>
                      <a href="#docdash-solutions" style={{ display: 'block', width: '100%', textAlign: 'center', background: 'white', color: '#0f172a', fontWeight: 700, fontSize: '14px', padding: '12px', borderRadius: '12px', textDecoration: 'none' }}>
                        Explore DocDash Middleware
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#demo-section" className="w-full sm:w-auto inline-flex items-center justify-center font-extrabold text-white bg-slate-900 hover:bg-slate-950 rounded-xl shadow-md transition-all" style={{ fontSize: '15px', paddingInline: '36px', paddingBlock: '16px' }}>
                Book a Demo
              </a>
              <a href="#demo-section" className="w-full sm:w-auto inline-flex items-center justify-center font-extrabold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-xl transition-all" style={{ fontSize: '15px', paddingInline: '36px', paddingBlock: '16px' }}>
                Start a Ward Pilot
              </a>
            </div>

            {/* Value prop */}
            <p className="text-sm text-slate-500 font-medium leading-relaxed bg-slate-100/50 border border-slate-200/40 rounded-xl" style={{ maxWidth: '740px', paddingInline: '24px', paddingBlock: '16px' }}>
              Amara transforms scattered pre-visit inputs into direct, structured diagnostic context—allowing doctors to absorb home-monitored vitals, wearable ECG tracks, and subjective symptom logs in one chronological workspace.
            </p>

          </div>
        </LayoutContainer>

        {/* Consultation Workspace — before Platform Demo */}
        <ConsultationWorkspace />

        {/* Platform Demo — full LayoutContainer width, outside the 1100px column */}
        <LayoutContainer className="relative z-10 mt-16">
          <PlatformDemo />
        </LayoutContainer>
      </section>

      {/* ── All feature sections ── */}
      <ProblemsSection />
      <AmaraLiteSection />
      <ShareGrid />
      <SavingsCalculator />
      <DocDashSection />
      <ComparisonSection />
      <DemoBookingForm />
      <FAQSection />

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-white border-t border-slate-800">
        <LayoutContainer>

          {/* Top content row — 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10" style={{ paddingTop: '56px', paddingBottom: '48px' }}>
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <img src="/logo.png" alt="Amara Health" className="h-9 w-auto" />
                <span className="font-black text-white text-lg">Amara <span className="text-blue-400">HEALTH</span></span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Amara empowers clinical teams to eliminate pre-consultation diagnostic latency, automatically organizing chaotic patient-submitted vitals, documents, and logs into standard chronological timeline views.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-200 uppercase tracking-widest">Clinical Platform Core</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#amara-lite-solutions" className="hover:text-white transition-colors">AI Patient History Platform</a></li>
                <li><a href="#amara-lite-solutions" className="hover:text-white transition-colors">Clinical Workflow Software</a></li>
                <li><a href="#docdash-solutions" className="hover:text-white transition-colors">Hospital Patient Context Platform</a></li>
                <li><a href="#docdash-solutions" className="hover:text-white transition-colors">Patient History Management</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-200 uppercase tracking-widest">Medical Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#amara-lite-solutions" className="hover:text-white transition-colors">Doctor Patient Summary Software</a></li>
                <li><a href="#amara-lite-solutions" className="hover:text-white transition-colors">Doctor Consultation Preparation</a></li>
                <li><a href="#amara-lite-solutions" className="hover:text-white transition-colors">Medical Report Organization</a></li>
                <li><a href="#docdash-solutions" className="hover:text-white transition-colors">Hospital Integration Software</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-200 uppercase tracking-widest">Compliance &amp; Trust</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" /> HIPAA Secure Protocol</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" /> AES-256 Encrypted</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" /> BAA Agreement Compliant</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar — separate row with top border */}
          <div
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{ borderTop: '1px solid rgba(71,85,105,0.5)', paddingTop: '20px', paddingBottom: '24px' }}
          >
            <span className="text-xs text-slate-500">© 2026 Amara Health Technology. All rights reserved.</span>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span>GDPR compliant</span>
              <span className="text-slate-600">•</span>
              <span>SOC2 compliant</span>
              <span className="text-slate-600">•</span>
              <span>Medical-Grade Architecture</span>
            </div>
          </div>

        </LayoutContainer>
      </footer>
    </div>
  );
}
