import React, { useState } from 'react';
import { Info, ChevronRight, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Is the Amara platform a licensed Electronic Medical Record (EMR) or EHR system?',
    a: 'No. Amara does not replace or act as your primary Electronic Medical Record (EMR) system or legal chart of record. Instead, we serve as a specialized, pre-consultation patient context synthesis layer. We securely ingest, standardize, and organize scattered pre-visit inputs (such as home log spreadsheets, wearable ECG screenshots, intake questionnaires, and pharmacy slips) and distill them onto a single clinical timeline. This enables physicians to absorb a patient\'s complete interim clinical narrative inside of a 10-second pre-visit scan.',
  },
  {
    q: 'Does integrating Amara require replacing our hospital management software (HMS) or active EMR?',
    a: 'No. Amara is designed as a read-only overlay layer. We connect to your existing HMS or EMR through secure API endpoints or HL7/FHIR streams without modifying, replacing, or disrupting your primary database infrastructure.',
  },
  {
    q: 'How does Amara process patient ECG screenshots and home blood pressure log files?',
    a: 'Amara uses medical-grade OCR and structured parsing algorithms to extract numerical values, timestamps, and trend data from uploaded image files or PDFs. Results are normalized into standardized clinical variables and displayed on the physician\'s pre-consultation timeline.',
  },
  {
    q: 'Can individual physicians register for Amara independently without institutional IT projects?',
    a: 'Yes. Amara Lite is specifically designed for independent registration. A physician can sign up, verify credentials, and begin receiving structured patient context within minutes — no IT department involvement required.',
  },
  {
    q: 'What is the recommended approach for hospital networks looking to pilot Amara?',
    a: 'We recommend starting with a focused department pilot (typically cardiology or internal medicine) using Amara Lite for 2-4 weeks. This validates workflow fit before committing to full DocDash EMR integration with your IT team.',
  },
  {
    q: 'What are your specific data security protocols and is Amara HIPAA-compliant?',
    a: 'Yes, Amara is fully HIPAA-compliant. All data is encrypted in transit using TLS 1.3 and at rest using AES-256. We maintain BAA agreements, SOC2 Type II certification, and complete audit logging for all data access events.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="clinical-faq"
      style={{ background: 'white', paddingTop: '80px', paddingBottom: '80px' }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingInline: '32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2563eb', background: '#eff6ff', padding: '6px 16px', borderRadius: '999px', marginBottom: '16px' }}>
            Technical &amp; Usability FAQ
          </span>
          <h2 style={{ fontSize: '48px', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, marginBottom: '16px' }}>
            Common Clinical Queries
          </h2>
          <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7, textAlign: 'center' }}>
            Get straightforward, jargon-free answers explaining integrations, safety metrics, and operational guidelines.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  background: 'white', border: '1px solid #1e293b',
                  borderRadius: '16px', overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left', display: 'flex',
                    alignItems: 'center', justifyContent: 'space-between',
                    gap: '12px', padding: '16px 20px', background: 'none',
                    border: 'none', cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                    <Info style={{ width: '16px', height: '16px', color: '#94a3b8', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b', lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                  </div>
                  {isOpen
                    ? <ChevronDown style={{ width: '16px', height: '16px', color: '#94a3b8', flexShrink: 0 }} />
                    : <ChevronRight style={{ width: '16px', height: '16px', color: '#94a3b8', flexShrink: 0 }} />
                  }
                </button>

                {isOpen && (
                  <div style={{ borderTop: '1px solid #f1f5f9', padding: '4px 20px 20px 48px' }}>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.75 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom card */}
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', fontWeight: 600, color: '#1e293b', marginBottom: '8px' }}>
            Have a specific EMR stack or custom cloud database request?
          </p>
          <p style={{ fontSize: '13px', color: '#64748b', maxWidth: '360px', margin: '0 auto 24px', lineHeight: 1.7 }}>
            Our systems architects can consult with your IT team on custom HL7 message structures or security audit pipelines.
          </p>
          <a
            href="#demo-section"
            style={{
              display: 'inline-block', background: '#0f172a', color: 'white',
              fontSize: '13px', fontWeight: 700, padding: '12px 24px',
              borderRadius: '12px', textDecoration: 'none', transition: 'background 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#1e293b'}
            onMouseLeave={e => e.currentTarget.style.background = '#0f172a'}
          >
            Consult Clinical Specialists
          </a>
        </div>

      </div>
    </section>
  );
}
