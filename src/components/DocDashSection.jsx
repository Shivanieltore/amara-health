import React from 'react';
import { Layers, CheckCircle2, Sparkles, Database, Laptop } from 'lucide-react';
import LayoutContainer from './LayoutContainer';

export default function DocDashSection() {
  return (
    <section
      id="docdash-solutions"
      style={{ background: '#0a0f1e', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <LayoutContainer>

        {/* ── TOP: Two-column header ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '80px', alignItems: 'flex-start', marginBottom: '72px' }}>

          {/* Left: label + heading + description */}
          <div>
            <span style={{
              display: 'inline-block', fontSize: '11px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.1em',
              color: '#60a5fa', background: 'rgba(37,99,235,0.2)',
              border: '1px solid rgba(59,130,246,0.35)',
              padding: '5px 14px', borderRadius: '8px', marginBottom: '24px',
            }}>
              Hospital Enterprise Solution
            </span>
            <h2 style={{ fontSize: '46px', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: 0 }}>
              DocDash: The Unified Patient Context Layer for Hospitals
            </h2>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.8, marginTop: '24px' }}>
              Hospitals run on robust EMRs and clinical databases built for administration. DocDash sits on top of these servers—synthesizing raw, unstructured details into doctor-ready experiences instantly.
            </p>
          </div>

          {/* Right: integration info card */}
          <div style={{ background: '#0d1829', border: '1px solid rgba(71,85,105,0.5)', borderRadius: '14px', padding: '28px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#60a5fa', marginBottom: '10px' }}>
              Integration Architecture Strategy
            </p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '14px' }}>
              DocDash does not replace your EMR/HMS.
            </p>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.75 }}>
              We do not ask you to migrate databases, cancel existing software contracts, or run manual parallel tracking. DocDash connects securely to your current tech stack through read-only system endpoints or secure HL7/FHIR streams to optimize physician layouts.
            </p>
          </div>
        </div>

        {/* ── Architecture diagram block ── */}
        <div style={{ background: '#0d1829', border: '1px solid rgba(71,85,105,0.4)', borderRadius: '20px', padding: '48px', marginBottom: '48px' }}>

          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>
              System Architecture &amp; Seamless Connection Flow
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '6px' }}>
              Read-only orchestration of clinic records into pristine physician dashboards
            </p>
          </div>

          {/* Processing Layer badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#2563eb', color: '#ffffff',
              fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              padding: '6px 16px', borderRadius: '999px',
            }}>
              <Sparkles style={{ width: '12px', height: '12px' }} />
              Processing Layer
            </span>
          </div>

          {/* Three columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>

            {/* Col 1: Data Sources */}
            <div style={{ background: '#111827', borderRadius: '12px', border: '1px solid rgba(71,85,105,0.4)', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Database style={{ width: '18px', height: '18px', color: '#34d399' }} />
                </div>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b' }}>Data Sources</p>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>1. Hospital Systems</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'HMS & EMR Databases (Epic, Cerner)', badge: 'Read-Only',     badgeBg: '#1e293b', badgeColor: '#94a3b8' },
                  { label: 'Laboratory Information Systems (LIS)', badge: 'HL7 / FHIR',  badgeBg: '#1e3a8a', badgeColor: '#93c5fd' },
                  { label: 'Imaging Repositories (PACS)',          badge: 'DICOM Metadata', badgeBg: '#1e293b', badgeColor: '#94a3b8' },
                ].map((r, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0f1e', borderRadius: '8px', border: '1px solid #1e293b', padding: '10px 12px', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#cbd5e1' }}>{r.label}</span>
                    <span style={{ fontSize: '9px', fontWeight: 700, background: r.badgeBg, color: r.badgeColor, padding: '2px 8px', borderRadius: '4px', whiteSpace: 'nowrap', flexShrink: 0, fontFamily: 'monospace' }}>{r.badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2: DocDash Middleware */}
            <div style={{ background: 'linear-gradient(135deg,#1e3a8a,#312e81)', borderRadius: '12px', border: '1px solid rgba(99,102,241,0.5)', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Layers style={{ width: '18px', height: '18px', color: '#ffffff' }} />
                </div>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93c5fd' }}>Security Standard</p>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>2. DocDash Middleware</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { title: 'Structural Normalization', desc: 'Combines lab sheets, PDFs, and vitals into structured variables.' },
                  { title: 'Compliance Verification',  desc: 'In-transit SSL encryption, custom audit-logs, token permissions.' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(30,58,138,0.4)', borderRadius: '8px', border: '1px solid rgba(99,102,241,0.3)', padding: '12px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: '#93c5fd' }}>{item.title}</p>
                    <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3: Provider Screen */}
            <div style={{ background: '#111827', borderRadius: '12px', border: '1px solid rgba(71,85,105,0.4)', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Laptop style={{ width: '18px', height: '18px', color: '#94a3b8' }} />
                </div>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b' }}>Client UI</p>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>3. Provider Screen</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Reports & Trends Unified', 'Vitals & ECG Live Plots', 'Subjective History Timeline'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1a2744', borderRadius: '8px', border: '1px solid rgba(71,85,105,0.5)', padding: '10px 12px' }}>
                    <CheckCircle2 style={{ width: '16px', height: '16px', color: '#60a5fa', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#e2e8f0' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p style={{ textAlign: 'center', fontSize: '13px', color: '#64748b', marginTop: '32px' }}>
            * Our technology establishes read-only linkages so there is{' '}
            <span style={{ color: '#60a5fa', fontWeight: 600 }}>zero threat of write corruption</span>
            {' '}inside your primary host database records.
          </p>
        </div>

        {/* ── Bottom three feature cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
          {[
            { title: 'Engineered for IT Alignment',  desc: 'Designed to integrate seamlessly without disrupting active hospital administration pipelines, DocDash is deployed through containerized modules requiring minimal administrative friction.' },
            { title: 'Read-Only Safety Guarantee',   desc: 'DocDash does not request database write credentials or database mutation queries. Every transmission is structured as a safe, read-only transaction on approved replication views.' },
            { title: 'HIPAA & SOC2 Level Security',  desc: 'Data is fully encrypted in transit with TLS 1.3 and at rest with AES-256 protocols. Complete security audits and detailed access logging come as enterprise defaults.' },
          ].map((card, i) => (
            <div key={i} style={{ background: '#0d1829', border: '1px solid rgba(71,85,105,0.4)', borderRadius: '16px', padding: '32px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#60a5fa', marginBottom: '12px' }}>{card.title}</h4>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.7 }}>{card.desc}</p>
            </div>
          ))}
        </div>

      </LayoutContainer>
    </section>
  );
}
