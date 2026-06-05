export const streamItems = [
  {
    type: "SYMPTOM",
    typeColor: "#ef4444",
    iconBg: "#fee2e2",
    title: "New Symptom Chest Tightness",
    desc: "Patient reported mild chest tightness at rest",
    time: "2 hours ago",
    detail: {
      source: "Patient Mobile App",
      heading: "Chest Tightness Reported",
      sub: "Mild discomfort, non-radiating",
      digest: "Patient self-reported chest tightness this morning. States it started at rest and has been intermittent. Denies associated shortness of breath or diaphoresis. Pain level 3/10.",
      tip: "Consider cardiac differential. Request 12-lead ECG and troponin levels given history."
    }
  },
  {
    type: "VITALS",
    typeColor: "#2563eb",
    iconBg: "#dbeafe",
    title: "7-Day Blood Pressure Log",
    desc: "Patient-logged BP readings from home monitor",
    time: "Today",
    detail: {
      source: "Patient Wearable Device",
      heading: "Blood Pressure Trend",
      sub: "Average 138/86 mmHg (elevated)",
      digest: "7-day average shows consistent elevation with readings ranging 135-142 systolic. Diastolic consistently 82-88. No orthostatic variations noted. Patient reports taking medications as prescribed.",
      tip: "Consider medication adjustment or referral to cardiology if BP remains uncontrolled."
    }
  },
  {
    type: "ECG",
    typeColor: "#d97706",
    iconBg: "#fef3c7",
    title: "Apple Watch ECG Screenshot",
    desc: "Single-lead ECG captured from wearable",
    time: "4 hours ago",
    detail: {
      source: "Apple Health",
      heading: "ECG Recording",
      sub: "Normal sinus rhythm, HR 72 bpm",
      digest: "Single-lead ECG shows normal sinus rhythm with regular rate and rhythm. No acute ST changes or arrhythmias detected. Rate 72 bpm, intervals within normal limits. Quality acceptable for screening.",
      tip: "Results are reassuring. Consider correlation with clinical presentation."
    }
  },
  {
    type: "LAB",
    typeColor: "#16a34a",
    iconBg: "#dcfce7",
    title: "HbA1c Lab Report LabCorp",
    desc: "Recent glycemic control from LabCorp",
    time: "Yesterday",
    detail: {
      source: "LabCorp",
      heading: "HbA1c Level",
      sub: "7.2% (below 7% goal)",
      digest: "HbA1c 7.2%, indicating fair glycemic control over past 3 months. Fasting glucose 118 mg/dL, lipid panel within acceptable ranges. No significant changes from prior testing 3 months ago.",
      tip: "Continue current diabetes management. Consider lifestyle modifications to reach <7% goal."
    }
  }
];

export const capabilityCards = [
  {
    icon: "FileText",
    title: "Lab Reports",
    desc: "Automatic extraction and structuring of laboratory results",
    cat: "CLINICAL",
    catColor: "#d97706"
  },
  {
    icon: "Pill",
    title: "Prescription Files",
    desc: "Digital prescription records and medication history",
    cat: "CLINICAL",
    catColor: "#d97706"
  },
  {
    icon: "FileCheck",
    title: "Discharge Summaries",
    desc: "Hospital and clinic discharge documentation",
    cat: "CLINICAL",
    catColor: "#d97706"
  },
  {
    icon: "Activity",
    title: "Diagnostic Reports",
    desc: "Imaging and diagnostic test interpretations",
    cat: "CLINICAL",
    catColor: "#d97706"
  },
  {
    icon: "Heart",
    title: "Home BP Readings",
    desc: "Patient-measured blood pressure from home devices",
    cat: "VITALS",
    catColor: "#2563eb"
  },
  {
    icon: "Zap",
    title: "ECG Screenshots",
    desc: "Wearable ECG recordings and interpretations",
    cat: "VITALS",
    catColor: "#2563eb"
  },
  {
    icon: "TrendingUp",
    title: "Glucose Trend Logs",
    desc: "Continuous glucose monitoring data and trends",
    cat: "VITALS",
    catColor: "#2563eb"
  },
  {
    icon: "BookOpen",
    title: "Symptom Diaries",
    desc: "Patient-recorded symptom logs and patterns",
    cat: "SUBJECTIVE",
    catColor: "#16a34a"
  },
  {
    icon: "Moon",
    title: "Sleep Journals",
    desc: "Sleep quality, duration, and rest patterns",
    cat: "SUBJECTIVE",
    catColor: "#16a34a"
  }
];

export const workflowSteps = [
  {
    num: "01",
    tag: "30 mins",
    tagColor: "#16a34a",
    tagBg: "#dcfce7",
    icon: "UserCheck",
    title: "Clinician Registration",
    desc: "Quick registration with license verification and EHR system connection setup",
    cta: "Start Registration",
    preview: {
      heading: "Clinician Portal Login",
      sub: "Secure authentication with your medical license credentials",
      fields: [
        { label: "License Number", value: "MD-123456789" },
        { label: "NPI", value: "1234567890" },
        { label: "EHR System", value: "Epic" }
      ],
      btn: "Verify & Connect"
    }
  },
  {
    num: "02",
    tag: "5 mins",
    tagColor: "#2563eb",
    tagBg: "#dbeafe",
    icon: "Link",
    title: "Patient Linkage",
    desc: "Seamless patient matching using MRN, SSN, or QR code verification",
    cta: "Create Link",
    preview: {
      heading: "Link Patient Records",
      sub: "Match patient across EHR and Amara systems",
      fields: [
        { label: "Patient Name", value: "Robert Chen" },
        { label: "DOB", value: "1965-03-15" },
        { label: "Status", value: "Linked ✓" }
      ],
      btn: "Confirm Link"
    }
  },
  {
    num: "03",
    tag: "Automated",
    tagColor: "#d97706",
    tagBg: "#fef3c7",
    icon: "SendHorizontal",
    title: "Patient Data Transmission",
    desc: "Secure HIPAA-compliant data synchronization from patient devices and sources",
    cta: "Enable Sync",
    preview: {
      heading: "Data Stream Settings",
      sub: "Configure which patient data sources to sync",
      fields: [
        { label: "Mobile App", value: "Active" },
        { label: "Wearables", value: "Apple Watch" },
        { label: "Sync Frequency", value: "Real-time" }
      ],
      btn: "Save Settings"
    }
  }
];
