export const content = {
  nav: [
    { label: "Work", href: "#work" },
    { label: "Experiments", href: "#experiments" },
    { label: "How I work", href: "#how-i-work" },
    { label: "About", href: "#about" },
  ],
  hero: {
    name: "Carlos Alvarez, PhD",
    title:
      "UX Researcher focused on AI-enabled research workflows for better decision-making.",
    intro:
      "I help organizations turn fragmented insights into clear product direction through research, systems thinking, and intentional experimentation.",
    logos: [
      {
        name: "Thomson Reuters",
        slug: "thomson-reuters",
        src: "./assets/tr-pri-logo-rgb-color.png",
        alt: "Thomson Reuters logo",
      },
      {
        name: "PayPal",
        slug: "paypal",
        src: "./assets/paypal.png",
        alt: "PayPal logo",
      },
      {
        name: "Walmart",
        slug: "walmart",
        src: "./assets/logo-walmart-vector-PNG.png",
        alt: "Walmart logo",
      },
      {
        name: "Microsoft",
        slug: "microsoft",
        src: "./assets/Microsoft-Logo.png",
        alt: "Microsoft logo",
      },
    ],
  },
  whatIDo: {
    intro: "I help organizations move from ambiguity to clear product direction.",
    points: [
      "Clarifying loosely defined problems and grounding them in customer needs",
      "Turning fragmented research and data into coherent, actionable insight",
      "Making research more scalable, reusable, and decision-ready",
    ],
  },
  impact: {
    intro:
      "Examples of how I’ve shaped product direction, improved research systems, and enabled faster, more confident decision-making.",
    items: [
      {
        title: "Reframed an AI initiative around customer outcomes",
        summary:
          "Shifted product direction from predefined solutions to a scalable, outcome-driven vision.",
        detailSections: [
          {
            heading: "Context",
            paragraphs: [
              "This work took place in a highly regulated environment with multiple legacy products, where a new AI layer was being introduced to help customers complete end-to-end outcomes rather than navigating fragmented tools.",
            ],
          },
          {
            heading: "Problem",
            paragraphs: [
              "Initial efforts focused on delivering predefined solutions, optimizing for a narrow set of use cases.",
              "What was missing was a long-term perspective on how the system would scale as customer needs evolve.",
            ],
          },
          {
            heading: "What I did",
            paragraphs: [
              "I reframed the problem by combining signals from customer research, internal expertise, and continuous collaboration with cross-functional partners.",
              "I brought stakeholders into the process through ongoing discussions, workshops, and iterative concept testing.",
              "This allowed us to align on a shared understanding of what matters most:",
            ],
            bullets: [
              "Customers define success in terms of outcomes (“meals”), not individual tools (“kitchen components”)",
              "The system needed to be designed to support a wide range of future outcomes—not just the initial set",
            ],
          },
          {
            heading: "Impact",
            paragraphs: [
              "This shift aligned multiple product teams around a more scalable, outcome-driven vision.",
            ],
            bullets: [
              "Changed the product roadmap to prioritize a flexible foundation over narrow use cases",
              "Reduced the risk of future rework by designing for evolving customer needs",
              "Enabled faster decision-making by establishing a clear and shared direction",
              "Supported a more cohesive product strategy",
            ],
          },
        ],
      },
      {
        title:
          "Reduced time to insight by transforming unstructured data into AI-ready workflows",
        summary:
          "Built a lightweight tool to structure interview data, enabling faster and more reliable analysis.",
        detailSections: [
          {
            heading: "Context",
            paragraphs: [
              "Interview transcripts required extensive manual cleanup due to fragmented quotes, missing speaker attribution, and noisy metadata.",
            ],
          },
          {
            heading: "Problem",
            paragraphs: [
              "Researchers were spending hours preparing data instead of analyzing it, limiting scalability and making it difficult to leverage AI tools securely",
            ],
          },
          {
            heading: "What I did",
            paragraphs: [
              "Built a locally hosted tool that cleans and structures transcripts—assigning speaker tags, consolidating quotes, and removing noise to enable reliable analysis",
            ],
          },
          {
            heading: "Impact",
            bullets: [
              "Reduced transcript preparation from hours to seconds",
              "Saved ~7 hours per researcher per week (20+ researchers)",
              "Accelerated report turnaround by ~50% (from ~2 weeks to 5 days)",
              "Enabled secure, AI-assisted analysis without exposing sensitive data",
            ],
          },
        ],
      },
    ],
  },
  experiments: {
    intro:
      "I explore how AI and lightweight tools can reduce friction in research—especially in analysis, synthesis, and knowledge reuse.",
    items: [
      {
        title: "Transcript processing tool",
        summary:
          "A lightweight tool to clean and structure interview transcripts",
      },
      {
        title: "Research workflow experiments",
        summary:
          "Experiments to connect insights across research and analytics tools",
      },
      {
        title: "Parsing online communities for qualitative insight",
        summary:
          "Early explorations into using online communities for large-scale qualitative insight",
      },
    ],
    links: [
      {
        label: "View GitHub",
        href: "https://github.com/carlos-alvarezdelavega",
      },
      {
        label: "More on my experiments (WIP secondary page)",
        href: "",
      },
    ],
  },
  howIWork: {
    intro:
      "I focus on making research useful in complex environments—where problems are unclear and decisions need to move forward quickly.",
    principles: [
      {
        title: "Decisions over deliverables",
        body: "Research should shape direction, not just produce outputs.",
        practice:
          "In practice: I start by clarifying what decision this work needs to inform before defining methods.",
      },
      {
        title: "Reframe before you optimize",
        body: "Teams often move too quickly to solutions.",
        practice:
          "In practice: I challenge initial assumptions and work with teams to redefine the problem around real customer needs.",
      },
      {
        title: "Research as a team sport",
        body: "Research works best when it’s embedded, not handed off.",
        practice:
          "In practice: I involve product, design, and engineering throughout the process—sharing insights continuously, not just at the end.",
      },
      {
        title: "Systems over one-off studies",
        body: "Insights lose value when they can’t be reused.",
        practice:
          "In practice: I look for ways to connect research across tools and projects, making it accessible beyond a single study.",
      },
      {
        title: "Speed and clarity matter",
        body: "Timely insights drive better decisions than perfect reports.",
        practice:
          "In practice: I prioritize fast synthesis and clear communication to keep teams moving.",
      },
    ],
  },
  about: [
    "I’m a UX Researcher focused on making research more useful in complex environments—where clarity, speed, and alignment matter as much as rigor. Increasingly, that means exploring how AI can scale research workflows and support better decision-making.",
    "My background in Human-Computer Interaction and industry research has shaped an approach grounded in rigor, systems thinking, and customer needs. I believe research creates the most value when it is collaborative, visible, and closely tied to decisions.",
  ],
};
