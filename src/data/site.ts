import type { CSSProperties } from "react";

export const CONTACT_EMAIL = "moviescriptwriter2@gmail.com";

/** Plain mailto — works more reliably than long query strings in some clients. */
export const mailtoHref = `mailto:${CONTACT_EMAIL}`;

export const services = [
  {
    icon: "🎬",
    title: "YouTube Scriptwriting",
    description:
      "Hook viewers in the first 5 seconds and keep them watching until the end. Scripts optimized for retention, engagement, and algorithmic success.",
    features: [
      "Attention-grabbing hooks",
      "Retention-optimized structure",
      "SEO-friendly content",
      "Call-to-action integration",
    ],
    cta: "Get Started →",
  },
  {
    icon: "🎭",
    title: "Screenwriting",
    description:
      "Feature films, TV pilots, short films—stories that resonate with depth, authenticity, and cinematic flair. From logline to final draft.",
    features: [
      "Feature-length screenplays",
      "TV series bible development",
      "Short film scripts",
      "Industry-standard formatting",
    ],
    cta: "Discuss Your Project →",
  },
  {
    icon: "✏️",
    title: "Script Rewriting & Editing",
    description:
      "Transform good scripts into great ones. Structural fixes, dialogue polishing, pacing adjustments, and character development.",
    features: [
      "Structural analysis & fixes",
      "Dialogue enhancement",
      "Pacing & tension optimization",
      "Character arc development",
    ],
    cta: "Revamp Your Script →",
  },
  {
    icon: "💡",
    title: "Story Development Consultation",
    description:
      "Stuck on your story? I'll help you break through creative blocks, develop compelling arcs, and create narratives that stick.",
    features: [
      "Story structure consulting",
      "Character development sessions",
      "Plot hole identification",
      "Creative brainstorming",
    ],
    cta: "Book a Session →",
  },
  {
    icon: "🤖",
    title: "YouTube Automation Scripts",
    description:
      "Faceless channel scripts that run on autopilot. Compelling narration, engaging visuals suggestions, and scalable content strategies.",
    features: [
      "Faceless channel scripts",
      "Documentary-style narration",
      "Listicle & explainer formats",
      "Bulk content packages",
    ],
    cta: "Scale Your Channel →",
  },
  {
    icon: "🎯",
    title: "Dialogue Polishing",
    description:
      "Make every line count. Subtext, subtext, subtext. Dialogue that reveals character, advances plot, and resonates emotionally.",
    features: [
      "Natural speech patterns",
      "Subtext & nuance enhancement",
      "Character voice differentiation",
      "Memorable one-liners",
    ],
    cta: "Polish Your Dialogue →",
  },
] as const;

const cardBg = (gradient: string): CSSProperties => ({
  background: gradient,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const portfolioItems = [
  {
    tag: "Feature Film · Crime Thriller",
    title: '"Unlawful Union"',
    description:
      "A gritty Philadelphia crime saga following Calvin Blalock — a street-smart hustler thrust into a drug empire after his father's murder. As he navigates corrupt DEA agents, mob rivalries, and a revolutionary narcotics project, Calvin must decide what legacy truly means. A story of loyalty, power, and survival.",
    emoji: "🔫",
    imageStyle: cardBg("linear-gradient(135deg, #0d1b2a 0%, #1b2838 60%, #2a3a4a 100%)"),
  },
  {
    tag: "Feature Film · Romantic Drama",
    title: '"Falling Into You"',
    description:
      "A charming barista and a fiercely guarded law student collide in an accidental romance. When emotional walls come crashing down, they must choose between the safety of who they were — and the terrifying possibility of who they could become together. Rated R. Est. runtime: 105–115 min.",
    emoji: "💛",
    imageStyle: cardBg("linear-gradient(135deg, #1a0a1e 0%, #2d1b3d 60%, #3d2a50 100%)"),
  },
  {
    tag: "YouTube · True Crime Series",
    title: '"The Vanishing" True Crime Series',
    description:
      "10-part YouTube series averaging 2M+ views per episode. Crafted suspenseful narratives that kept audiences binge-watching from start to finish.",
    emoji: "▶",
    imageStyle: cardBg("linear-gradient(135deg, #0a1a0a 0%, #1a2a1a 60%, #2a3a2a 100%)"),
  },
  {
    tag: "Short Film · Sci-Fi",
    title: '"The Last Light"',
    description:
      "Award-winning sci-fi short exploring humanity's final chapter. Praised for its emotional depth, tight pacing, and a twist ending that haunts viewers long after the credits roll.",
    emoji: "🎭",
    imageStyle: cardBg("linear-gradient(135deg, #1a1a0a 0%, #2a2a1a 60%, #3a3a2a 100%)"),
  },
  {
    tag: "TV Pilot · Drama Series",
    title: '"Crossroads" Drama Series',
    description:
      "Hour-long drama pilot currently in development. Five strangers connected by a single life-altering event — their intertwining stories form a mosaic of consequence, redemption, and choice.",
    emoji: "📺",
    imageStyle: cardBg("linear-gradient(135deg, #0a0a1a 0%, #1a1a2a 60%, #2a2a3a 100%)"),
  },
  {
    tag: "Brand Story · Corporate",
    title: "TechStart Launch Campaign",
    description:
      "Complete narrative strategy for a SaaS startup launch. Video scripts and brand story that helped the company secure $2M in seed funding by connecting with investors on a human level.",
    emoji: "📱",
    imageStyle: cardBg("linear-gradient(135deg, #1a0a0a 0%, #2a1a1a 60%, #3a2a2a 100%)"),
  },
  {
    tag: "Feature Film · Horror Thriller",
    title: '"The Hollow"',
    description:
      "A grieving deputy relocates his three sons to a remote Victorian estate inherited from a deceased aunt — only to find the mansion harbors something ancient and deeply wrong. As a blizzard locks them in, family fractures and supernatural dread collide in this atmospheric horror with a WGA-registered screenplay (109 pages).",
    emoji: "👁️",
    imageStyle: cardBg("linear-gradient(135deg, #050a0f 0%, #0a1520 60%, #0f1f2e 100%)"),
  },
];

export const testimonials = [
  {
    quote:
      "Joseph didn't just write a script—he understood my voice better than I understood it myself. My average view duration jumped 40% after implementing his retention strategies. Absolute game-changer.",
    name: "Marcus Chen",
    role: "History Channel YouTuber, 1.2M Subscribers",
    initials: "MK",
  },
  {
    quote:
      "Working with Joseph on my feature film was transformative. He has this rare ability to dig deep into character psychology while keeping the plot tight and engaging. Our film got into Sundance—couldn't have done it without him.",
    name: "Sofia Rodriguez",
    role: "Independent Filmmaker",
    initials: "SR",
  },
  {
    quote:
      "We hired Joseph to rewrite our corporate video scripts, expecting standard marketing copy. What we got was storytelling that actually moved our B2B audience to action. Conversion rates up 150%. Worth every penny.",
    name: "James Thompson",
    role: "CMO, Nexus Technologies",
    initials: "JT",
  },
  {
    quote:
      "I was skeptical about outsourcing scripts for my faceless channel, but Joseph's automation scripts are incredible. He nailed the tone, the pacing, the hooks—everything. My channel grew 300% in 6 months.",
    name: "Alex Petrov",
    role: "YouTube Automation Entrepreneur",
    initials: "AP",
  },
  {
    quote:
      "Joseph's dialogue polish saved my screenplay. What was good became unforgettable. He added layers of subtext that elevated every scene. Producers specifically mentioned the sharp writing in our pitch meetings.",
    name: "David Williams",
    role: "Screenwriter, WGA Member",
    initials: "DW",
  },
  {
    quote:
      "As a first-time creator, I was lost in story development. Joseph's consultation sessions gave me clarity, confidence, and a roadmap. My pilot is now being shopped to networks. Best investment in my creative career.",
    name: "Lisa Nakamura",
    role: "Emerging TV Writer",
    initials: "LN",
  },
] as const;
