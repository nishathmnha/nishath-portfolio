// Default content source for your portfolio.

const portfolio = {
  nav: [
    { label: "Demo", href: "#demo" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" }
  ],
  heroMetrics: [
    { value: "6+", label: "featured builds" },
    { value: "5", label: "AI credentials" },
    { value: "3", label: "working languages" }
  ],
  strengths: [
    "Java + Spring",
    "Python + FastAPI",
    "Kafka + PostgreSQL",
    "RAG + LangGraph",
    "Docker + Kubernetes"
  ],
  experience: [
    {
      period: "May 2025 - Present",
      role: "Associate Software Engineer",
      company: "Axiata Digital Labs, Sri Lanka",
      summary:
        "Working across lending and savings systems while contributing to backend reliability and enterprise AI initiatives.",
      points: [
        "Built and maintained services for loan creation, settlement, cancellation, and auto-collection flows.",
        "Improved maintainability through integration work, refactors, and service decomposition.",
        "Implemented event-driven workflows with Kafka and webhook integrations.",
        "Co-designed ingestion and retrieval pipelines for enterprise AI workflows."
      ]
    },
    {
      period: "Jan 2024 - Sep 2024",
      role: "Software Engineering Intern",
      company: "Axiata Digital Labs, Sri Lanka",
      summary:
        "Supported backend delivery for fintech lending modules and deployment-oriented engineering work.",
      points: [
        "Handled backend development and integration work for loan processing and eKYC flows.",
        "Improved API response times through query optimization and targeted refactors.",
        "Supported containerization and deployments with Docker and Kubernetes."
      ]
    }
  ],
  projects: [
    {
      category: "Enterprise AI",
      title: "Data Synthesizer",
      status: "Internal Product Work",
      summary:
        "A retrieval pipeline for structured and unstructured content with semantic chunking, embeddings, vector search, and orchestration designed for real downstream use.",
      impact: [
        "Shows backend judgment around ingestion quality, retrieval accuracy, and maintainable orchestration.",
        "Designed with production constraints in mind, not just experimentation."
      ],
      stack: ["Python", "LangChain", "Chroma", "RAG"],
      links: []
    },
    {
      category: "Personal Build",
      title: "Multi-agent HR AI Assistant",
      status: "Flagship Showcase",
      summary:
        "A multi-agent assistant with safe SQL access, routing logic, clarification handling, and database-grounded answers served through a backend API.",
      impact: [
        "Strong proof of AI orchestration, safety, and enterprise-style data access patterns.",
        "Built to show how language models can interact with real business data responsibly."
      ],
      stack: ["OpenAI API", "LangChain", "FastAPI", "PostgreSQL"],
      links: [
        {
          label: "Demo Video",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7443332031150747648/"
        }
      ]
    },
    {
      category: "AI Agent Workflows",
      title: "Blog Generator ReAct Agent",
      status: "Personal R&D",
      summary:
        "A LangGraph-based workflow using explicit state transitions, tool execution, bounded recursion, and tracing for repeatable agent behavior.",
      impact: [
        "Demonstrates depth in agent execution design rather than prompt chaining.",
        "Useful for showing observability and control around AI workflows."
      ],
      stack: ["LangGraph", "Groq", "LangSmith", "Python"],
      links: []
    },
    {
      category: "Fintech Delivery",
      title: "Decap Hire Purchase",
      status: "Enterprise System",
      summary:
        "Backend API and workflow support for automated collections, early settlement, and cancellation across event-driven service flows.",
      impact: [
        "Shows ownership in a business-critical domain with integrations and messaging complexity.",
        "Highlights reliability, automation, and product engineering discipline."
      ],
      stack: ["Spring WebFlux", "Kafka", "PostgreSQL", "Mambu"],
      links: []
    },
    {
      category: "Fintech Delivery",
      title: "Boost SME",
      status: "Enterprise Product Work",
      summary:
        "Onboarding and revolving-credit APIs with eKYC integration and backend fixes for statement and service stability issues.",
      impact: [
        "Strong proof of day-to-day backend value inside a real fintech environment.",
        "Useful for teams that care about reliability and system ownership."
      ],
      stack: ["Spring WebFlux", "Kafka", "PostgreSQL", "Mambu"],
      links: []
    },
    {
      category: "Machine Learning",
      title: "AI-Powered Reddit Moderation",
      status: "University Project",
      summary:
        "A BERT-based classifier for off-topic and inappropriate content detection, blending language modeling with moderation-focused prediction features.",
      impact: [
        "Adds ML depth beyond framework usage alone.",
        "Balances research-oriented foundations with practical application."
      ],
      stack: ["Python", "BERT", "scikit-learn", "NLP"],
      links: []
    }
  ],
  certifications: [
    {
      title: "Quickstart: LangSmith Essentials",
      issuer: "LangChain",
      description: "Tracing, evaluation, and debugging for LLM applications.",
      completedAt: "2026/04/27, 17:19",
      link: "https://academy.langchain.com/certificates/vd55h4nxdp"
    },
    {
      title: "Project: Ambient Agents with LangGraph",
      issuer: "LangChain",
      description: "Applied workflow design with explicit control over agent execution.",
      completedAt: "2026/04/26, 09:05",
      link: "https://academy.langchain.com/certificates/lbrbpxlqdp"
    },
    {
      title: "Foundation: Introduction to LangChain-Python",
      issuer: "LangChain",
      description: "Core foundations for Python-based GenAI development.",
      completedAt: "2026/03/20, 16:18",
      link: "https://academy.langchain.com/certificates/jtlromy7bq"
    },
    {
      title: "Project: Deep Agents",
      issuer: "LangChain",
      description: "Practical project work around deeper multi-agent execution patterns.",
      completedAt: "2026/03/16, 20:10",
      link: "https://academy.langchain.com/certificates/mao7fnqc8e"
    },
    {
      title: "Quickstart: LangSmith Agent Builder",
      issuer: "LangChain",
      description: "Hands-on work around agent orchestration and observability patterns.",
      completedAt: "2026/03/14, 19:12",
      link: "https://academy.langchain.com/certificates/as5soeqwvp"
    }
  ],
  demoVideos: [
    {
      title: "Multi-agent HR AI Assistant Demo",
      platform: "LinkedIn",
      summary:
        "Built with OpenAI, LangChain, FastAPI, and PostgreSQL. The assistant answers dynamically from the database using tool calling, safe read-only SQL, and a supervisor agent that coordinates schema lookup, query generation, and clarification flow when the request is ambiguous.",
      thumbnail: "/demo-thumb-hr-assistant.png",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7443332031150747648/"
    }
  ],
  profiles: [
    {
      title: "GitHub",
      meta: "Source code, experiments, and public project history",
      url: "https://github.com/nishathmnha"
    },
    {
      title: "LinkedIn",
      meta: "Professional summary and hiring-friendly profile",
      url: "https://linkedin.com/in/ahamed-nishath"
    },
    {
      title: "Curriculum Vitae",
      meta: "Printable resume with experience and education",
      url: "/Nishath_Ahamed_CV.pdf"
    }
  ],
  media: [
    {
      title: "Medium",
      meta: "Writing on backend engineering, AI systems, and practical delivery",
      url: "https://medium.com/@nishath.ahamed"
    }
  ]
};

export default portfolio;
