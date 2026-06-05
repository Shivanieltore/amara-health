import React from 'react';
import { Settings } from 'lucide-react';

const ROWS = [
  { feature: 'CORE TARGET AUDIENCE',     lite: 'Individual doctors, private clinics, and pilot practices',           dash: 'Hospitals, multi-branch medical organizations, and hospital networks' },
  { feature: 'DEPLOYMENT ARCHITECTURE', lite: 'Standalone workspace (secure Amara-hosted platform)',                 dash: 'Custom layer integrated into target EMR, HMS, or server view' },
  { feature: 'INTEGRATION SPEED',       lite: 'Minutes (Standard web-signup and verification)',                      dash: 'Custom timelines aligning with hospital EMR permissions' },
  { feature: 'SERVER HOOKS & APIS',     lite: 'None (Direct client-link uploads, bypasses IT projects)',             dash: 'HL7, FHIR endpoints, read-only DB connections, or secure APIs' },
  { feature: 'ADMINISTRATIVE OVERHEAD', lite: 'None (Self-managed doctor setup)',                                    dash: 'Minimal (Managed enterprise setups and dedicated IT guidance)' },
  { feature: 'BEST SUITED FOR',         lite: 'Quick clinical trials, pilot projects, or independent clinicians',    dash: 'Integrated hospital frameworks and complex institutional scales' },
];

const COL = '260px 1fr 1fr';

export default function ComparisonSection() {
  return (
    <section className="bg-white border-b border-slate-100" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', paddingInline: '32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '999px', padding: '6px 16px', marginBottom: '16px' }}>
            Product Evaluation Grid
          </p>
          <h2 style={{ fontSize: '44px', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, marginBottom: '16px' }}>
            Amara Lite vs. DocDash
          </h2>
          <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '860px', margin: '0 auto', lineHeight: 1.7, textAlign: 'center' }}>
            Understand the fundamental differences in seconds to choose the appropriate path for your<br />clinical workflows.
          </p>
        </div>

        {/* Table card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden" style={{ marginBottom: '32px' }}>

          {/* Header row */}
          <div className="bg-white border-b border-slate-200" style={{ display: 'grid', gridTemplateColumns: COL, padding: '24px 32px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8' }}>
              Feature Matrix
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3b82f6', flexShrink: 0, marginTop: '5px' }} />
              <div>
                <p style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a' }}>Amara Lite</p>
                <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginTop: '3px' }}>Signup-and-Go Portal</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1e293b', flexShrink: 0, marginTop: '5px' }} />
              <div>
                <p style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a' }}>DocDash</p>
                <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginTop: '3px' }}>Hospital Context Layer</p>
              </div>
            </div>
          </div>

          {/* Data rows */}
          {ROWS.map((row, i) => (
            <div
              key={i}
              style={{
                display: 'grid', gridTemplateColumns: COL,
                padding: '24px 32px',
                borderBottom: i < ROWS.length - 1 ? '1px solid #f1f5f9' : 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', paddingRight: '24px', paddingTop: '2px' }}>
                {row.feature}
              </div>
              <div style={{ fontSize: '15px', color: '#334155', lineHeight: 1.6, paddingRight: '24px' }}>
                {row.lite}
              </div>
              <div style={{ fontSize: '15px', color: '#334155', lineHeight: 1.6 }}>
                {row.dash}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="bg-white rounded-2xl shadow-sm" style={{ padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', border: '1.5px solid #1e293b' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: '#eff6ff', borderRadius: '12px', padding: '12px', flexShrink: 0 }}>
              <Settings style={{ width: '20px', height: '20px', color: '#2563eb' }} />
            </div>
            <div>
              <p style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>
                Need to validate doctor workflow before committing to hospital EMR integration?
              </p>
              <p style={{ fontSize: '13px', color: '#64748b', marginTop: '3px' }}>
                Start and run a pilot using Amara Lite within days. Integrate DocDash once doctor validation completes.
              </p>
            </div>
          </div>
          <a
            href="#demo-section"
            style={{ background: '#0f172a', color: '#ffffff', fontSize: '14px', fontWeight: 700, padding: '12px 24px', borderRadius: '12px', whiteSpace: 'nowrap', flexShrink: 0, textDecoration: 'none', transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#1e293b'}
            onMouseLeave={e => e.currentTarget.style.background = '#0f172a'}
          >
            Review Pilot Options
          </a>
        </div>

      </div>
    </section>
  );
}
