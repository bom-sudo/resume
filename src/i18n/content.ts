export type Lang = "en" | "th";

interface JourneyEntryText {
  title: string;
  description: string;
  highlights: [string, string, string];
}

interface FocusCategoryText {
  label: string;
  eyebrow: string;
}

interface ServiceText {
  name: string;
  desc: string;
}

interface ProjectText {
  label: string;
  desc: string;
  images: [string, string, string];
  buttonLabel?: string;
}

export interface Content {
  ui: {
    contactMe: string;
    liveProject: string;
    comingSoon: string;
    livePath: string;
  };
  meta: {
    profileRole: string;
    profileLocation: string;
    profileCompany: string;
    profileBackground: string;
  };
  nav: {
    about: string;
    journey: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    heading: string;
    subtitle: string;
  };
  about: {
    heading: string;
    paragraph: string;
  };
  journey: {
    heading: string;
    intro: string;
    tickerItems: [string, string, string];
    entries: [JourneyEntryText, JourneyEntryText, JourneyEntryText];
  };
  focus: {
    heading: string;
    intro: string;
    categories: [FocusCategoryText, FocusCategoryText, FocusCategoryText];
    goals: {
      infrastructure: [string, string, string];
      development: [string, string, string];
      automation: [string, string, string];
    };
  };
  services: {
    heading: string;
    items: [ServiceText, ServiceText, ServiceText, ServiceText];
  };
  projects: {
    heading: string;
    items: [ProjectText, ProjectText, ProjectText, ProjectText];
  };
  footer: {
    eyebrow: string;
    heading: string;
    askMeAboutLabel: string;
    askMeAbout: [string, string, string, string, string];
    tagline: string;
    builtWith: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    ui: {
      contactMe: "Contact Me",
      liveProject: "Live Project",
      comingSoon: "Coming Soon",
      livePath: "Live path",
    },
    meta: {
      profileRole: "Infrastructure Engineer",
      profileLocation: "Bangkok, Thailand",
      profileCompany: "Provincial Waterworks Authority",
      profileBackground: "Software QA → Infrastructure",
    },
    nav: {
      about: "About",
      journey: "Journey",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      heading: "Hi, I'm Bom",
      subtitle: "Infrastructure engineer bridging robust systems & modern development",
    },
    about: {
      heading: "About me",
      paragraph:
        "I'm Natiphong — everyone just calls me Bom. My path into tech didn't start in a data center; it started testing games and troubleshooting hardware, learning to stay calm when something breaks and dig until I find out why. That instinct carried me into enterprise QA at Thailand's biggest telecom, and eventually into my current role as an Infrastructure Engineer at the Provincial Waterworks Authority, where I keep SAP Basis, Kubernetes clusters, and data center operations running for a national utility. What actually excites me is the overlap between infrastructure and software — most nights you'll find me exploring React, Next.js, or building small AI-driven automation tools just to see how far an idea can go. If it involves systems, curiosity, or a good problem worth untangling, I'm in.",
    },
    journey: {
      heading: "Journey",
      intro:
        "From testing game systems to safeguarding enterprise software, now building and maintaining the critical infrastructure behind a national utility.",
      tickerItems: ["Data Center Optimization", "SAP Basis", "Kubernetes"],
      entries: [
        {
          title: "Tester and Game Specialist",
          description:
            "Where it all began. Testing games and supporting hardware taught me to read a system by its symptoms — a crash log, a lag spike, a support ticket — long before I knew the word 'infrastructure.' That hands-on, break-it-then-fix-it mindset still shapes how I approach every outage today.",
          highlights: ["Technical Support", "System Diagnostics", "Customer-Facing Ops"],
        },
        {
          title: "Software Tester",
          description:
            "Stepped up to enterprise scale at Thailand's largest telecom, testing systems that millions of people rely on every day. This is where automation stopped being a nice-to-have and became the only way to keep pace — and where I started thinking like the engineers on the other side of every bug report.",
          highlights: ["Test Automation", "Enterprise QA", "Release Validation"],
        },
        {
          title: "Infrastructure Engineer",
          description:
            "Now I keep the backbone running — SAP Basis, Kubernetes clusters, and data center operations for a national utility serving millions of households. Most days are a mix of optimizing what's already there and quietly automating away the parts that used to eat a whole afternoon.",
          highlights: ["SAP Basis", "Kubernetes", "Data Center Ops"],
        },
      ],
    },
    focus: {
      heading: "2026 Focus",
      intro:
        "Currently digging into React.js, Next.js, and advanced Kubernetes patterns — pushing toward full-stack capability while deepening infrastructure expertise.",
      categories: [
        { label: "Infrastructure", eyebrow: "Cloud / K8s / Security" },
        { label: "Development", eyebrow: "React / Next.js / OSS" },
        { label: "Automation", eyebrow: "CI/CD / GitOps / Python" },
      ],
      goals: {
        infrastructure: [
          "Advanced Kubernetes patterns & service mesh",
          "Multi-cloud architecture (AWS, GCP, Azure)",
          "Infrastructure security hardening",
        ],
        development: [
          "Master React.js & Next.js ecosystem",
          "Build full-stack applications",
          "Contribute to open-source projects",
        ],
        automation: [
          "CI/CD pipeline optimization",
          "GitOps workflows with ArgoCD",
          "Python automation scripts",
        ],
      },
    },
    services: {
      heading: "SKILLS",
      items: [
        {
          name: "Enterprise Architecture",
          desc: "Designing and scaling high-availability systems with SAP Basis, Kubernetes, and cloud-native patterns for enterprise resilience.",
        },
        {
          name: "AI Automation Pipelines",
          desc: "Designing Claude Code-driven workflows that chain transcript extraction, FFmpeg processing, and TTS/dubbing into fast, repeatable production pipelines.",
        },
        {
          name: "Infrastructure Security",
          desc: "Mapping ISO/IEC 27001 controls to real infrastructure, closing forensic and compliance gaps across cloud and on-prem systems.",
        },
        {
          name: "AI-Powered Content Tools",
          desc: "Building products like CutDock — AI video editing tooling that combines Whisper, Claude, and FFmpeg to turn raw footage into finished content.",
        },
      ],
    },
    projects: {
      heading: "Project",
      items: [
        {
          label: "Personal",
          desc: "AI video editing SaaS",
          images: ["Timeline", "Editor UI", "AI Post-production"],
        },
        {
          label: "Client",
          desc: "Premium Cookware Store",
          images: ["Product Display", "Kitchen Detail", "Store Visual"],
        },
        {
          label: "Personal",
          desc: "Claude Code + FFmpeg + ElevenLabs pipeline",
          images: ["Automation Code", "Quality Metrics", "Pipeline Dashboard"],
          buttonLabel: "View on GitHub",
        },
        {
          label: "Client",
          desc: "Premium Shirt Store",
          images: ["Product Focus", "Collection", "Store Experience"],
        },
      ],
    },
    footer: {
      eyebrow: "Get in touch",
      heading: "Let's Connect",
      askMeAboutLabel: "Ask me about",
      askMeAbout: ["Infrastructure", "SAP Basis", "Kubernetes", "Testing Automation", "DevOps Best Practices"],
      tagline:
        "Bridging the gap between robust infrastructure and modern software development. Open to collaboration, learning, and building something amazing together.",
      builtWith: "Designed & Built with Passion",
    },
  },
  th: {
    ui: {
      contactMe: "ติดต่อผม",
      liveProject: "ดูโปรเจกต์",
      comingSoon: "เร็ว ๆ นี้",
      livePath: "เส้นทางล่าสุด",
    },
    meta: {
      profileRole: "วิศวกรโครงสร้างพื้นฐาน",
      profileLocation: "กรุงเทพมหานคร ประเทศไทย",
      profileCompany: "การประปาส่วนภูมิภาค",
      profileBackground: "จาก Software QA สู่งาน Infrastructure",
    },
    nav: {
      about: "เกี่ยวกับ",
      journey: "เส้นทาง",
      skills: "ทักษะ",
      projects: "โปรเจกต์",
      contact: "ติดต่อ",
    },
    hero: {
      heading: "สวัสดี ผม บอม",
      subtitle: "วิศวกรโครงสร้างพื้นฐาน ผู้เชื่อมโยงระบบที่แข็งแกร่งเข้ากับการพัฒนาซอฟต์แวร์ยุคใหม่",
    },
    about: {
      heading: "เกี่ยวกับฉัน",
      paragraph:
        "ผมชื่อเนติพงษ์ แต่ทุกคนเรียกผมว่า \"บอม\" เส้นทางสายเทคโนโลยีของผมไม่ได้เริ่มต้นในศูนย์ข้อมูล แต่เริ่มจากการทดสอบเกมและแก้ปัญหาฮาร์ดแวร์ ที่สอนให้ผมใจเย็นเมื่อระบบมีปัญหา และไม่ยอมหยุดจนกว่าจะเจอสาเหตุที่แท้จริง สัญชาตญาณนั้นพาผมเข้าสู่งาน QA ระดับองค์กรที่บริษัทโทรคมนาคมที่ใหญ่ที่สุดของไทย และในที่สุดก็มาถึงบทบาทปัจจุบันในตำแหน่งวิศวกรโครงสร้างพื้นฐานที่การประปาส่วนภูมิภาค ซึ่งผมดูแล SAP Basis, Kubernetes clusters และงานศูนย์ข้อมูลให้กับองค์กรรัฐวิสาหกิจระดับประเทศ สิ่งที่ทำให้ผมสนุกจริง ๆ คือจุดที่ Infrastructure กับ Software มาบรรจบกัน หลายคืนคุณจะเจอผมกำลังศึกษา React, Next.js หรือลงมือสร้างเครื่องมือ Automation เล็ก ๆ ด้วย AI เพียงเพื่ออยากรู้ว่าไอเดียนั้นจะไปได้ไกลแค่ไหน ถ้าเรื่องนั้นเกี่ยวกับระบบ ความอยากรู้อยากเห็น หรือปัญหาที่น่าคลี่คลาย ผมพร้อมลงมือเสมอ",
    },
    journey: {
      heading: "เส้นทาง",
      intro:
        "จากการทดสอบระบบเกม สู่การดูแลซอฟต์แวร์ระดับองค์กร และตอนนี้คือการสร้างและดูแลโครงสร้างพื้นฐานที่สำคัญให้กับองค์กรรัฐวิสาหกิจระดับประเทศ",
      tickerItems: ["การปรับปรุงศูนย์ข้อมูล", "SAP Basis", "Kubernetes"],
      entries: [
        {
          title: "ผู้ทดสอบเกมและระบบ",
          description:
            "จุดเริ่มต้นของทุกอย่าง การทดสอบเกมและซัพพอร์ตฮาร์ดแวร์สอนให้ผมอ่านปัญหาของระบบผ่านอาการที่มันแสดงออก ไม่ว่าจะเป็น crash log อาการหน่วง หรือตั๋วซัพพอร์ตจากผู้ใช้ ตั้งแต่ก่อนที่ผมจะรู้จักคำว่า \"Infrastructure\" เสียอีก แนวคิดแบบลงมือทำ พังแล้วซ่อมนี้ยังเป็นวิธีที่ผมใช้รับมือกับทุกเหตุการณ์ขัดข้องจนถึงทุกวันนี้",
          highlights: ["งานซัพพอร์ตด้านเทคนิค", "การวิเคราะห์ระบบ", "งานบริการลูกค้า"],
        },
        {
          title: "ผู้ทดสอบซอฟต์แวร์",
          description:
            "ก้าวสู่การทดสอบซอฟต์แวร์ระดับองค์กรที่บริษัทโทรคมนาคมอันดับหนึ่งของไทย ทดสอบระบบที่คนนับล้านใช้งานทุกวัน ช่วงนี้เองที่ผมเริ่มมองว่า Automation ไม่ใช่แค่ตัวช่วย แต่เป็นวิธีเดียวที่จะตามงานทัน และเป็นจุดที่ผมเริ่มคิดแบบวิศวกรฝั่ง Production มากกว่าฝั่ง QA",
          highlights: ["ทดสอบอัตโนมัติ", "QA ระดับองค์กร", "ตรวจสอบก่อนปล่อยระบบ"],
        },
        {
          title: "วิศวกรโครงสร้างพื้นฐาน",
          description:
            "ปัจจุบันดูแล SAP Basis, Kubernetes clusters และโครงสร้างพื้นฐานศูนย์ข้อมูลให้กับองค์กรรัฐวิสาหกิจที่ให้บริการครัวเรือนนับล้านทั่วประเทศ งานส่วนใหญ่คือการปรับปรุงระบบที่มีอยู่ให้ดีขึ้น พร้อมกับหาทาง Automate งานที่เคยกินเวลาไปครึ่งวันให้เหลือไม่กี่นาที",
          highlights: ["SAP Basis", "Kubernetes", "งานศูนย์ข้อมูล"],
        },
      ],
    },
    focus: {
      heading: "โฟกัสปี 2026",
      intro:
        "ตอนนี้กำลังศึกษา React.js, Next.js และเทคนิค Kubernetes ระดับสูง เพื่อผลักตัวเองไปสู่การเป็น Full-stack Developer ควบคู่กับการต่อยอดความเชี่ยวชาญด้าน Infrastructure ให้ลึกยิ่งขึ้น",
      categories: [
        { label: "โครงสร้างพื้นฐาน", eyebrow: "Cloud / K8s / Security" },
        { label: "การพัฒนาซอฟต์แวร์", eyebrow: "React / Next.js / OSS" },
        { label: "ระบบอัตโนมัติ", eyebrow: "CI/CD / GitOps / Python" },
      ],
      goals: {
        infrastructure: [
          "เทคนิค Kubernetes ระดับสูง & Service Mesh",
          "สถาปัตยกรรม Multi-cloud (AWS, GCP, Azure)",
          "เสริมความปลอดภัยของ Infrastructure",
        ],
        development: [
          "เชี่ยวชาญ React.js & Next.js อย่างเต็มรูปแบบ",
          "สร้างแอปพลิเคชันแบบ Full-stack",
          "ร่วมพัฒนาโปรเจกต์ Open-source",
        ],
        automation: [
          "ปรับปรุง CI/CD pipeline ให้มีประสิทธิภาพ",
          "ระบบ GitOps ด้วย ArgoCD",
          "สคริปต์ Automation ด้วย Python",
        ],
      },
    },
    services: {
      heading: "ทักษะ",
      items: [
        {
          name: "Enterprise Architecture",
          desc: "ออกแบบและขยายระบบ High-availability ด้วย SAP Basis, Kubernetes และแนวทาง Cloud-native เพื่อความมั่นคงขององค์กร",
        },
        {
          name: "AI Automation Pipelines",
          desc: "ออกแบบเวิร์กโฟลว์ที่ขับเคลื่อนด้วย Claude Code เชื่อมต่อการดึง Transcript, การประมวลผลด้วย FFmpeg และ TTS/Dubbing เข้าเป็น Pipeline การผลิตที่รวดเร็วและทำซ้ำได้",
        },
        {
          name: "Infrastructure Security",
          desc: "แม็ปมาตรฐาน ISO/IEC 27001 เข้ากับ Infrastructure จริง ปิดช่องว่างด้าน Forensic และ Compliance ทั้งบน Cloud และ On-prem",
        },
        {
          name: "AI-Powered Content Tools",
          desc: "พัฒนาผลิตภัณฑ์อย่าง CutDock เครื่องมือตัดต่อวิดีโอด้วย AI ที่รวม Whisper, Claude และ FFmpeg เพื่อเปลี่ยนฟุตเทจดิบให้เป็นคอนเทนต์ที่พร้อมเผยแพร่",
        },
      ],
    },
    projects: {
      heading: "โปรเจกต์",
      items: [
        {
          label: "ส่วนตัว",
          desc: "SaaS ตัดต่อวิดีโอด้วย AI",
          images: ["ไทม์ไลน์", "หน้าจอตัดต่อ", "งานหลังการผลิตด้วย AI"],
        },
        {
          label: "ลูกค้า",
          desc: "ร้านเครื่องครัวพรีเมียม",
          images: ["จัดแสดงสินค้า", "มุมครัว", "ภาพหน้าร้าน"],
        },
        {
          label: "ส่วนตัว",
          desc: "Pipeline จาก Claude Code + FFmpeg + ElevenLabs",
          images: ["โค้ด Automation", "ตัวชี้วัดคุณภาพ", "แดชบอร์ด Pipeline"],
          buttonLabel: "ดูบน GitHub",
        },
        {
          label: "ลูกค้า",
          desc: "ร้านเสื้อเชิ้ตพรีเมียม",
          images: ["โฟกัสสินค้า", "คอลเลกชัน", "ภาพประสบการณ์หน้าร้าน"],
        },
      ],
    },
    footer: {
      eyebrow: "ติดต่อผม",
      heading: "มาคุยกัน",
      askMeAboutLabel: "ถามผมได้เรื่อง",
      askMeAbout: ["Infrastructure", "SAP Basis", "Kubernetes", "ทดสอบอัตโนมัติ", "แนวทาง DevOps ที่ดี"],
      tagline:
        "เชื่อมโยงช่องว่างระหว่างโครงสร้างพื้นฐานที่แข็งแกร่งกับการพัฒนาซอฟต์แวร์ยุคใหม่ เปิดรับโอกาสร่วมงาน เรียนรู้ และสร้างสิ่งดี ๆ ไปด้วยกัน",
      builtWith: "ออกแบบและสร้างด้วยความตั้งใจ",
    },
  },
};
