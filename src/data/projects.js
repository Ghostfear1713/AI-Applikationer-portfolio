export const projects = [
  {
    id: 'rag-portfolio-assistant',
    title: {
      da: 'RAG Portfolio Assistent',
      en: 'RAG Portfolio Assistant',
    },
    description: {
      da: 'En AI-drevet assistent, der kan besvare spørgsmål om mit portfolios indhold ved hjælp af RAG. Systemet indexerer alle mine portfolio-indlæg og bruger semantisk søgning til at finde relevante svar.',
      en: 'An AI-powered assistant that can answer questions about my portfolio content using RAG. The system indexes all my portfolio posts and uses semantic search to find relevant answers.',
    },
    tags: ['RAG', 'ChromaDB', 'OpenAI', 'FastAPI', 'Python'],
    status: 'wip',
    featured: true,
    year: 2025,
    github: 'https://github.com',
    demo: null,
    highlights: {
      da: ['Semantisk søgning over 20+ portfolio-indlæg', 'Kildehenvisninger i alle svar', 'FastAPI REST endpoint til integration'],
      en: ['Semantic search over 20+ portfolio posts', 'Source references in all answers', 'FastAPI REST endpoint for integration'],
    },
  },
  {
    id: 'code-review-agent',
    title: {
      da: 'Automatisk Code Review Agent',
      en: 'Automated Code Review Agent',
    },
    description: {
      da: 'En agent-baseret løsning, der automatisk reviewer Python-kode, finder bugs, foreslår forbedringer og genererer unit tests. Bygget med Anthropics tool-use API.',
      en: 'An agent-based solution that automatically reviews Python code, finds bugs, suggests improvements, and generates unit tests. Built with Anthropic\'s tool-use API.',
    },
    tags: ['Agents', 'Anthropic', 'Tool Use', 'Python', 'AST'],
    status: 'completed',
    featured: true,
    year: 2025,
    github: 'https://github.com',
    demo: null,
    highlights: {
      da: ['Finder 85% af kendte bugs i testsuiten', 'Genererer unit tests automatisk', 'GitHub Actions integration'],
      en: ['Finds 85% of known bugs in the test suite', 'Generates unit tests automatically', 'GitHub Actions integration'],
    },
  },
  {
    id: 'personal-portfolio',
    title: {
      da: 'Developer Portfolio (dette site)',
      en: 'Developer Portfolio (this site)',
    },
    description: {
      da: 'Dette portfolio — bygget med React, Vite og Tailwind CSS. Designet med RAG-integration i tankerne: struktureret indhold, metadata og søgefunktionalitet.',
      en: 'This portfolio — built with React, Vite, and Tailwind CSS. Designed with RAG integration in mind: structured content, metadata, and search functionality.',
    },
    tags: ['React', 'Vite', 'Tailwind', 'JavaScript', 'i18n'],
    status: 'active',
    featured: true,
    year: 2025,
    github: 'https://github.com',
    demo: null,
    highlights: {
      da: ['Mørk/lys tilstand', 'Dansk/Engelsk sprogskift', 'Fuld-tekst søgning', 'RAG-klar struktur'],
      en: ['Dark/light mode', 'Danish/English language toggle', 'Full-text search', 'RAG-ready structure'],
    },
  },
  {
    id: 'llm-benchmark',
    title: {
      da: 'LLM Benchmark Komparator',
      en: 'LLM Benchmark Comparator',
    },
    description: {
      da: 'Et værktøj til at sammenligne output fra forskellige LLM-modeller på den samme prompt. Viser latency, token-forbrug og svar-kvalitet side om side.',
      en: 'A tool for comparing output from different LLM models on the same prompt. Shows latency, token usage, and response quality side by side.',
    },
    tags: ['OpenAI', 'Anthropic', 'Benchmarking', 'Streamlit', 'Python'],
    status: 'completed',
    featured: false,
    year: 2025,
    github: 'https://github.com',
    demo: null,
    highlights: {
      da: ['Understøtter 6+ modeller', 'Real-time latency måling', 'Export til CSV'],
      en: ['Supports 6+ models', 'Real-time latency measurement', 'Export to CSV'],
    },
  },
]
