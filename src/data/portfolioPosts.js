export const portfolioPosts = [
  {
    id: 'session-01',
    slug: 'session-01-kursusintroduktion',
    date: '2025-09-03',
    sessionNumber: 1,
    module: 'AI Applikationer',
    readTime: 6,
    title: {
      da: 'Session 1: Kursusintroduktion & Opsætning',
      en: 'Session 1: Course Introduction & Setup',
    },
    summary: {
      da: 'Første dag på AI Applikationer. Vi fik et overblik over kursets indhold, opsatte vores udviklingsmiljø og fik en introduktion til de kerneteknologier vi skal arbejde med dette semester.',
      en: 'First day of AI Applications. We got an overview of the course content, set up our development environment, and got an introduction to the core technologies we will work with this semester.',
    },
    tags: ['kursusintro', 'python', 'setup', 'ai-basics'],
    sections: [
      {
        id: 'learned',
        content: {
          da: 'Kurset AI Applikationer dækker en bred palette af emner inden for moderne AI-udvikling. Vi gennemgik den overordnede kursusstruktur, som inkluderer LLM APIs, RAG-systemer, Code Agents, Spec-Driven Development og projektdemoer.\n\nTeknisk lærte jeg at opsætte et rent Python-udviklingsmiljø med virtuelle environments (venv), og vi fik en introduktion til de centrale Python-pakker vi skal bruge: `openai`, `anthropic`, `langchain`, `chromadb` og `fastapi`.\n\nDerudover gennemgik vi grundbegreberne i AI: hvad er en sprogmodel, hvad betyder "tokens", og hvad er forskellen på supervised og unsupervised learning.',
          en: 'The AI Applications course covers a broad range of topics in modern AI development. We went through the overall course structure, which includes LLM APIs, RAG systems, Code Agents, Spec-Driven Development, and project demos.\n\nTechnically, I learned to set up a clean Python development environment with virtual environments (venv), and we got an introduction to the core Python packages we will use: `openai`, `anthropic`, `langchain`, `chromadb`, and `fastapi`.\n\nWe also covered the fundamental concepts of AI: what a language model is, what "tokens" mean, and the difference between supervised and unsupervised learning.',
        },
      },
      {
        id: 'reflections',
        content: {
          da: 'Det slog mig, hvor bredt og hurtigt feltet bevæger sig. Selvom jeg kendte til AI fra medierne, var det første gang jeg stod over for den tekniske side af det — og der er en stor forskel på at høre om LLMs og faktisk forstå, hvad der sker under motorhjelmen.\n\nJeg synes det er spændende, at kurset ikke bare handler om at bruge AI-værktøjer, men om at forstå og bygge dem. Det giver meget mere mening for en udvikler.',
          en: "It struck me how broad and fast-moving the field is. Even though I knew about AI from the media, this was the first time I faced the technical side of it — and there is a big difference between hearing about LLMs and actually understanding what happens under the hood.\n\nI find it exciting that the course is not just about using AI tools, but about understanding and building them. That makes much more sense for a developer.",
        },
      },
      {
        id: 'challenges',
        content: {
          da: 'Opsætningen af udviklingsmiljøet tog længere tid end forventet. Jeg stødte ind i en konflikt mellem Python-versioner (3.10 vs 3.12) og nogle pakker var ikke kompatible med den nyeste version af Python. Det løste jeg ved at bruge `pyenv` til at holde styr på versioner.\n\nDerudover er terminologien meget ny — begreber som "embeddings", "context window" og "inference" lyder tekniske, og jeg er ikke 100% sikker på, at jeg forstår alle nuancerne endnu.',
          en: 'Setting up the development environment took longer than expected. I ran into a conflict between Python versions (3.10 vs 3.12) and some packages were not compatible with the latest Python version. I solved this by using `pyenv` to manage versions.\n\nAdditionally, the terminology is very new — concepts like "embeddings", "context window", and "inference" sound technical, and I am not 100% sure I understand all the nuances yet.',
        },
      },
      {
        id: 'curiosity',
        content: {
          da: 'Hvad er egentlig den præcise forskel på et "foundation model" og et "fine-tuned model"? Hvornår giver det mening at fine-tune frem for at bruge RAG? Dette vil jeg undersøge nærmere i de kommende sessioner.\n\nJeg er også nysgerrig på, hvordan tokens præcist beregnes på tværs af forskellige sprog — tager dansk mere tokens end engelsk for den samme mening?',
          en: 'What exactly is the difference between a "foundation model" and a "fine-tuned model"? When does it make sense to fine-tune rather than use RAG? I want to explore this in upcoming sessions.\n\nI am also curious about how tokens are precisely calculated across different languages — does Danish use more tokens than English for the same meaning?',
        },
      },
      {
        id: 'approach',
        content: {
          da: 'Jeg fulgte undervisers vejledning til Python-setup step-by-step og dokumenterede hvert trin i mine noter. Da jeg stødte på version-konflikten, søgte jeg systematisk: først officiel dokumentation, derefter GitHub Issues for den pågældende pakke.\n\nJeg oprettede et nyt GitHub-repository til kurset med en klar mappestruktur fra starten, så det er nemt at navigere fremover.',
          en: 'I followed the instructor\'s guide for Python setup step-by-step and documented each step in my notes. When I encountered the version conflict, I searched systematically: first the official documentation, then GitHub Issues for the relevant package.\n\nI created a new GitHub repository for the course with a clear folder structure from the start, making it easy to navigate going forward.',
        },
      },
      {
        id: 'outcome',
        content: {
          da: 'Endte dagen med et fuldt fungerende Python-udviklingsmiljø med korrekte pakker installeret. Oprettede et GitHub-repo med den anbefalede mappestruktur. Har et godt overblik over, hvad de næste uger vil byde på.',
          en: 'Ended the day with a fully working Python development environment with the correct packages installed. Created a GitHub repo with the recommended folder structure. I have a good overview of what the coming weeks will bring.',
        },
      },
    ],
    codeSnippets: [
      {
        id: 'venv-setup',
        title: 'Virtual Environment Setup',
        language: 'bash',
        code: `# Opret og aktiver virtual environment
python -m venv .venv
source .venv/bin/activate      # macOS/Linux
.venv\\Scripts\\activate         # Windows

# Installer kerne-pakker
pip install openai anthropic langchain chromadb fastapi uvicorn python-dotenv

# Gem requirements
pip freeze > requirements.txt`,
      },
      {
        id: 'first-api-call',
        title: 'Første API-kald (test)',
        language: 'python',
        code: `import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Du er en hjælpsom assistent."},
        {"role": "user", "content": "Hej! Hvad kan du fortælle mig om RAG?"}
    ],
    temperature=0.7,
)

print(response.choices[0].message.content)`,
      },
    ],
    resources: [
      { title: 'OpenAI Platform Docs', url: 'https://platform.openai.com/docs' },
      { title: 'Anthropic Documentation', url: 'https://docs.anthropic.com' },
      { title: 'Python venv — Official Docs', url: 'https://docs.python.org/3/library/venv.html' },
    ],
  },

  {
    id: 'session-02',
    slug: 'session-02-llm-apis-prompt-engineering',
    date: '2025-09-10',
    sessionNumber: 2,
    module: 'AI Applikationer',
    readTime: 9,
    title: {
      da: 'Session 2: LLM APIs & Prompt Engineering',
      en: 'Session 2: LLM APIs & Prompt Engineering',
    },
    summary: {
      da: 'Vi dykker ned i LLM APIs fra OpenAI og Anthropic, og lærte principperne bag prompt engineering. Vi eksperimenterede med temperature, tokens, system-prompts og chain-of-thought prompting.',
      en: 'We dive into LLM APIs from OpenAI and Anthropic, and learned the principles behind prompt engineering. We experimented with temperature, tokens, system prompts, and chain-of-thought prompting.',
    },
    tags: ['llm', 'api', 'prompt-engineering', 'openai', 'anthropic', 'python'],
    sections: [
      {
        id: 'learned',
        content: {
          da: 'I dag gik vi i dybden med LLM APIs. De vigtigste ting jeg lærte:\n\n**API-arkitektur:** Begge store udbydere (OpenAI og Anthropic) bruger en chat-completion model med `system`, `user` og `assistant` roller i en beskedliste. Modellen genererer svar baseret på hele samtalehistorikken.\n\n**Tokens:** Tokens er den enhed, modeller tænker i. Et token er ca. 0.75 ord på engelsk og typisk lidt mere for andre sprog. Context window er det maksimale antal tokens en model kan "huske" på én gang.\n\n**Temperatur og sampling:** Temperature (0-2) styrer kreativiteten. Lav temperatur = deterministisk og præcis. Høj temperatur = kreativ og varieret. `top_p` er et alternativt sampling-parameter.\n\n**Prompt Engineering principper:**\n- Vær specifik og tydelig\n- Brug eksempler (few-shot prompting)\n- Chain-of-thought: bed modellen tænke trin-for-trin\n- Role-play: "Du er en senior Python-udvikler"\n- Constraints: "Svar på maks. 3 bullet points"',
          en: 'Today we went deep into LLM APIs. The most important things I learned:\n\n**API Architecture:** Both major providers (OpenAI and Anthropic) use a chat-completion model with `system`, `user`, and `assistant` roles in a message list. The model generates responses based on the entire conversation history.\n\n**Tokens:** Tokens are the unit models think in. A token is approximately 0.75 words in English and typically a bit more for other languages. The context window is the maximum number of tokens a model can "remember" at once.\n\n**Temperature and Sampling:** Temperature (0-2) controls creativity. Low temperature = deterministic and precise. High temperature = creative and varied. `top_p` is an alternative sampling parameter.\n\n**Prompt Engineering Principles:**\n- Be specific and clear\n- Use examples (few-shot prompting)\n- Chain-of-thought: ask the model to think step-by-step\n- Role-play: "You are a senior Python developer"\n- Constraints: "Answer in max 3 bullet points"',
        },
      },
      {
        id: 'reflections',
        content: {
          da: 'Det er fascinerende, hvor stor forskel en velskrevet system-prompt gør. I vores eksperimenter fik vi radikalt forskellige svar ved at justere blot nogle få ord i prompten — det minder mig om, at LLMs er fundamentalt anderledes end klassiske programmer. Der er ikke en deterministisk logik at debugge; det er mere som at guide en samtale.\n\nJeg bemærkede også, at Claude (Anthropic) og GPT-4 reagerer lidt forskelligt på den samme prompt. Claude virker mere påpasselig og nuanceret i sine svar, mens GPT er mere direkte.',
          en: 'It is fascinating how much difference a well-written system prompt makes. In our experiments, we got radically different responses by adjusting just a few words in the prompt — it reminds me that LLMs are fundamentally different from classical programs. There is no deterministic logic to debug; it is more like guiding a conversation.\n\nI also noticed that Claude (Anthropic) and GPT-4 respond slightly differently to the same prompt. Claude seems more careful and nuanced in its responses, while GPT is more direct.',
        },
      },
      {
        id: 'challenges',
        content: {
          da: '"Prompt injection" er et reelt sikkerhedsproblem jeg ikke havde tænkt over: en bruger kan potentielt overskrive system-prompten ved at skrive instruktioner i sin besked. Vi diskuterede dette men gik ikke i dybden med løsninger endnu.\n\nDerudover er det svært at forudsige, hvornår en model "hallucinerer" — opfinder fakta, der ikke eksisterer. Det er et fundamentalt problem, som RAG kan hjælpe med at løse.',
          en: '"Prompt injection" is a real security problem I had not thought about: a user can potentially override the system prompt by writing instructions in their message. We discussed this but did not go into solutions in depth yet.\n\nAdditionally, it is hard to predict when a model "hallucinates" — invents facts that do not exist. This is a fundamental problem that RAG can help solve.',
        },
      },
      {
        id: 'curiosity',
        content: {
          da: 'Jeg vil gerne eksperimentere med structured outputs — kan man tvinge modellen til at returnere valid JSON? OpenAI har en `response_format: {type: "json_object"}` feature, og Anthropic har noget lignende. Jeg kan se dette er ekstremt nyttigt til at bygge applikationer, der skal parse AI-output.\n\nDerudover: hvad er "function calling" / "tool use"? Det virker som en nøgleteknik til at give AI adgang til eksterne systemer.',
          en: 'I want to experiment with structured outputs — can you force the model to return valid JSON? OpenAI has a `response_format: {type: "json_object"}` feature, and Anthropic has something similar. I can see this is extremely useful for building applications that need to parse AI output.\n\nAlso: what is "function calling" / "tool use"? It seems like a key technique for giving AI access to external systems.',
        },
      },
      {
        id: 'approach',
        content: {
          da: 'Jeg buildede et lille eksperiment-script, som tester den samme prompt med 5 forskellige temperatures (0, 0.3, 0.7, 1.0, 1.5) og printer alle svar side om side, så man tydeligt kan se forskellen. Dette gav mig meget bedre intuition for, hvornår man skal bruge hvilken temperature.',
          en: 'I built a small experiment script that tests the same prompt with 5 different temperatures (0, 0.3, 0.7, 1.0, 1.5) and prints all responses side by side, so you can clearly see the difference. This gave me much better intuition for when to use which temperature.',
        },
      },
      {
        id: 'outcome',
        content: {
          da: 'Byggede en simpel chatbot med system-prompt, der kan stilles ind til at fungere som en specifik persona. Testede og dokumenterede effekten af forskellige prompt-teknikker. Har nu en god fornemmelse for, hvornår og hvordan man bruger prompt engineering i praksis.',
          en: 'Built a simple chatbot with a system prompt that can be tuned to work as a specific persona. Tested and documented the effect of different prompt techniques. Now have a good sense of when and how to use prompt engineering in practice.',
        },
      },
    ],
    codeSnippets: [
      {
        id: 'prompt-comparison',
        title: 'Structured Output med Pydantic',
        language: 'python',
        code: `from anthropic import Anthropic
import json

client = Anthropic()

def analyze_code(code: str) -> dict:
    """Analysér kode og returnér struktureret feedback."""
    response = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=1024,
        system="""Du er en senior code reviewer. Analysér kode og svar KUN med
        valid JSON i dette format:
        {
          "quality": "god|okay|dårlig",
          "issues": ["issue1", "issue2"],
          "suggestions": ["suggestion1"],
          "score": 1-10
        }""",
        messages=[
            {"role": "user", "content": f"Analysér denne kode:\\n\\n{code}"}
        ]
    )

    return json.loads(response.content[0].text)

result = analyze_code("def add(a,b): return a+b")
print(f"Score: {result['score']}/10")`,
      },
      {
        id: 'cot-prompt',
        title: 'Chain-of-Thought Prompting',
        language: 'python',
        code: `system_prompt = """
Du er en hjælpsom AI-assistent.
Når du løser et problem, skal du ALTID:
1. Tænke trin-for-trin
2. Vise din ræsonnering eksplicit
3. Konkludere med et klart svar

Format: Brug <thinking>...</thinking> til ræsonnering,
        derefter <answer>...</answer> til det endelige svar.
"""

user_message = "Hvad er den bedste datastruktur til at gemme chat-historik i RAG?"`,
      },
    ],
    resources: [
      { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
      { title: 'Anthropic Prompt Library', url: 'https://docs.anthropic.com/en/prompt-library' },
      { title: 'Learn Prompting — Open Source Guide', url: 'https://learnprompting.org' },
    ],
  },

  {
    id: 'session-03',
    slug: 'session-03-rag-retrieval-augmented-generation',
    date: '2025-09-17',
    sessionNumber: 3,
    module: 'AI Applikationer',
    readTime: 12,
    title: {
      da: 'Session 3: RAG — Retrieval-Augmented Generation',
      en: 'Session 3: RAG — Retrieval-Augmented Generation',
    },
    summary: {
      da: 'Den vigtigste session hidtil. Vi lærte hvad RAG er, hvorfor det løser LLMs kerneproblem med forældet viden, og vi byggede vores første RAG-pipeline med ChromaDB og LangChain.',
      en: 'The most important session so far. We learned what RAG is, why it solves the LLMs core problem with outdated knowledge, and we built our first RAG pipeline with ChromaDB and LangChain.',
    },
    tags: ['rag', 'vector-database', 'embeddings', 'chromadb', 'langchain', 'ai'],
    sections: [
      {
        id: 'learned',
        content: {
          da: '**Hvad er RAG?**\nRAG (Retrieval-Augmented Generation) er en arkitektur, der kombinerer informationssøgning med tekstgenerering. I stedet for at stole på modellens trænede viden (som er forældet og begrænset), søger vi relevant information frem fra en ekstern kilde og giver det til modellen som kontekst.\n\n**Core-koncepter jeg lærte:**\n\n- **Embeddings:** Numeriske vektorer (typisk 1536 dimensioner) der repræsenterer semantisk mening. Tekster med lignende mening er tæt på hinanden i vektorrum.\n- **Vector Database:** En database optimeret til at gemme og søge i embeddings (ChromaDB, Pinecone, Weaviate, FAISS).\n- **Similarity Search:** Vi finder relevante dokumenter ved at beregne afstand (cosine similarity) mellem en forespørgsels-embedding og alle dokument-embeddings.\n- **Chunking:** Dokumenter skal opdeles i passende stykker (chunks) inden de embeddes — for store chunks mister detaljer, for små chunks mangler kontekst.\n\n**RAG Pipeline:**\n1. Indlæs og chunk dokumenter\n2. Generer embeddings for hvert chunk\n3. Gem i vector database\n4. Ved forespørgsel: embed forespørgslen\n5. Find top-k lignende chunks (retrieval)\n6. Byg prompt med chunks som kontekst\n7. Send til LLM → svar',
          en: '**What is RAG?**\nRAG (Retrieval-Augmented Generation) is an architecture that combines information retrieval with text generation. Instead of relying on the model\'s trained knowledge (which is outdated and limited), we retrieve relevant information from an external source and give it to the model as context.\n\n**Core concepts I learned:**\n\n- **Embeddings:** Numerical vectors (typically 1536 dimensions) representing semantic meaning. Texts with similar meaning are close to each other in vector space.\n- **Vector Database:** A database optimized for storing and searching embeddings (ChromaDB, Pinecone, Weaviate, FAISS).\n- **Similarity Search:** We find relevant documents by computing distance (cosine similarity) between a query embedding and all document embeddings.\n- **Chunking:** Documents must be split into appropriate pieces (chunks) before embedding — chunks too large lose detail, chunks too small lack context.\n\n**RAG Pipeline:**\n1. Load and chunk documents\n2. Generate embeddings for each chunk\n3. Store in vector database\n4. On query: embed the query\n5. Find top-k similar chunks (retrieval)\n6. Build prompt with chunks as context\n7. Send to LLM → answer',
        },
      },
      {
        id: 'reflections',
        content: {
          da: 'RAG løser et problem, jeg ikke vidste var så stort. LLMs er kraftfulde, men de ved ingenting om hvad der skete efter deres træningsdato, og de "ved" heller ikke noget specifikt om din virksomhed eller dit projekt. RAG giver AI adgang til specifik, opdateret viden — det er det der gør det praktisk anvendeligt.\n\nDet slog mig, at embeddings er conceptuelt meget elegante. Man konverterer ord til geometri, og lighed i mening bliver til nærhed i rum. Det er en smuk matematisk abstraktion.\n\nJeg ser nu, hvorfor dette portfolio er designet med RAG i tankerne — struktureret, konsistent indhold er lettere at chunk og retrieve.',
          en: 'RAG solves a problem I did not know was so significant. LLMs are powerful, but they know nothing about what happened after their training date, and they also do not "know" anything specific about your company or project. RAG gives AI access to specific, up-to-date knowledge — that is what makes it practically applicable.\n\nIt struck me that embeddings are conceptually very elegant. You convert words into geometry, and similarity in meaning becomes proximity in space. It is a beautiful mathematical abstraction.\n\nI now see why this portfolio is designed with RAG in mind — structured, consistent content is easier to chunk and retrieve.',
        },
      },
      {
        id: 'challenges',
        content: {
          da: 'Chunking-strategien er sværere end den lyder. Vi diskuterede i klassen:\n- Hvad er den ideelle chunk-størrelse? (typisk 256-512 tokens)\n- Skal chunks have overlap? (ja, typisk 10-20%)\n- Skal man chunk på sætnings- eller afsnit-niveau?\n\nJeg fik også problemer med ChromaDB på Windows — der var en DLL-fil som manglede. Løsningen var at installere Visual C++ Redistributable.\n\nEn anden udfordring: embedding-latency. Hver embedding-kald til OpenAI tager tid og koster penge. Caching af embeddings er vigtigt i produktion.',
          en: 'The chunking strategy is harder than it sounds. We discussed in class:\n- What is the ideal chunk size? (typically 256-512 tokens)\n- Should chunks have overlap? (yes, typically 10-20%)\n- Should you chunk at sentence or paragraph level?\n\nI also had problems with ChromaDB on Windows — there was a missing DLL file. The solution was to install Visual C++ Redistributable.\n\nAnother challenge: embedding latency. Each embedding call to OpenAI takes time and costs money. Caching embeddings is important in production.',
        },
      },
      {
        id: 'curiosity',
        content: {
          da: 'Hvad er den bedste chunk-strategi for kode vs. naturlig tekst? Kode har en anden struktur — funktioner, klasser, kommentarer. Måske skal man bruge AST-baseret chunking for kode?\n\nJeg er også nysgerrig på "hybrid search": at kombinere semantic search (embeddings) med keyword search (BM25/TF-IDF). Det virker som det bedste fra to verdener.\n\nHvad med re-ranking? Kan man bruge en lille model til at re-ranke de retrievede chunks inden de sendes til LLM?',
          en: 'What is the best chunking strategy for code vs. natural text? Code has a different structure — functions, classes, comments. Maybe AST-based chunking should be used for code?\n\nI am also curious about "hybrid search": combining semantic search (embeddings) with keyword search (BM25/TF-IDF). It seems like the best of two worlds.\n\nWhat about re-ranking? Can a small model be used to re-rank the retrieved chunks before sending them to the LLM?',
        },
      },
      {
        id: 'approach',
        content: {
          da: 'Jeg fulgte en bottom-up tilgang: startede med at forstå embeddings isoleret, derefter vector search, og byggede til sidst hele pipelinen. Jeg testede systemet med mit eget portfolio-indhold som datakilde, hvilket gav en ekstra dimension til forståelsen.',
          en: 'I followed a bottom-up approach: started by understanding embeddings in isolation, then vector search, and finally built the complete pipeline. I tested the system with my own portfolio content as the data source, which gave an extra dimension to the understanding.',
        },
      },
      {
        id: 'outcome',
        content: {
          da: 'Byggede en fungerende RAG-pipeline der kan besvare spørgsmål baseret på et sæt PDF-dokumenter. Systemet bruger ChromaDB til at gemme embeddings og LangChain til at orchestrere retrieval og generation. Testede med spørgsmål om kursusmateriale og fik præcise svar med source-referencer.',
          en: 'Built a working RAG pipeline that can answer questions based on a set of PDF documents. The system uses ChromaDB to store embeddings and LangChain to orchestrate retrieval and generation. Tested with questions about course material and got precise answers with source references.',
        },
      },
    ],
    codeSnippets: [
      {
        id: 'rag-pipeline',
        title: 'Simpel RAG Pipeline med ChromaDB',
        language: 'python',
        code: `import chromadb
from openai import OpenAI
from typing import List

client = OpenAI()
chroma = chromadb.Client()
collection = chroma.create_collection("portfolio")

def embed(text: str) -> List[float]:
    res = client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return res.data[0].embedding

def index_documents(docs: List[dict]):
    """Indeksér dokumenter i vector database."""
    for i, doc in enumerate(docs):
        collection.add(
            ids=[f"doc_{i}"],
            embeddings=[embed(doc["content"])],
            documents=[doc["content"]],
            metadatas=[{"source": doc["source"], "date": doc["date"]}]
        )
    print(f"Indekserede {len(docs)} dokumenter")

def retrieve(query: str, n_results: int = 3) -> List[str]:
    """Find de mest relevante dokumenter for en forespørgsel."""
    results = collection.query(
        query_embeddings=[embed(query)],
        n_results=n_results
    )
    return results["documents"][0]

def rag_query(question: str) -> str:
    """Besvare spørgsmål ved hjælp af RAG."""
    context_docs = retrieve(question)
    context = "\\n\\n---\\n\\n".join(context_docs)

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": f"""Du er en hjælpsom assistent.
Brug KUN følgende kontekst til at besvare spørgsmålet.
Hvis svaret ikke findes i konteksten, sig det.

Kontekst:
{context}"""
            },
            {"role": "user", "content": question}
        ]
    )
    return response.choices[0].message.content`,
      },
    ],
    resources: [
      { title: 'ChromaDB Documentation', url: 'https://docs.trychroma.com' },
      { title: 'LangChain RAG Tutorial', url: 'https://python.langchain.com/docs/tutorials/rag/' },
      { title: 'OpenAI Embeddings Guide', url: 'https://platform.openai.com/docs/guides/embeddings' },
    ],
  },

  {
    id: 'session-04',
    slug: 'session-04-code-agents',
    date: '2025-09-24',
    sessionNumber: 4,
    module: 'AI Applikationer',
    readTime: 10,
    title: {
      da: 'Session 4: Code Agents & Autonome AI-systemer',
      en: 'Session 4: Code Agents & Autonomous AI Systems',
    },
    summary: {
      da: 'Vi lærte, hvad AI Agents er, og hvordan de adskiller sig fra simple LLM-kald. Vi byggede vores første agent med tool use, og eksperimenterede med ReAct-mønstret og multi-step ræsonnering.',
      en: 'We learned what AI Agents are and how they differ from simple LLM calls. We built our first agent with tool use, and experimented with the ReAct pattern and multi-step reasoning.',
    },
    tags: ['agents', 'tool-use', 'react-pattern', 'langchain', 'automation', 'ai'],
    sections: [
      {
        id: 'learned',
        content: {
          da: '**Hvad er en AI Agent?**\nEn agent er et system, der kan modtage en opgave, planlægge trin, bruge værktøjer og iterere, indtil opgaven er løst — i modsætning til et enkelt LLM-kald, der blot genererer et svar.\n\n**ReAct-mønstret (Reasoning + Acting):**\nAgenten veksler mellem:\n1. **Thought:** LLM ræsonnerer over situationen\n2. **Action:** Vælger og kalder et tool\n3. **Observation:** Modtager toolets output\n4. Gentager til opgaven er løst\n\n**Tool Use / Function Calling:**\nLLMs kan kalde definerede "tools" (funktioner) ved at returnere struktureret JSON. Tools kan være:\n- Websøgning\n- Kode-execution\n- Filsystem-adgang\n- API-kald\n- Databaseforespørgsler\n\n**Agenttyper vi gennemgik:**\n- **ReAct Agent:** Bruger reason-act loop\n- **Plan-and-Execute:** Planlægger alle trin på forhånd\n- **Multi-Agent:** Koordinerer flere specialiserede agenter',
          en: '**What is an AI Agent?**\nAn agent is a system that can receive a task, plan steps, use tools, and iterate until the task is solved — as opposed to a single LLM call that merely generates a response.\n\n**The ReAct Pattern (Reasoning + Acting):**\nThe agent alternates between:\n1. **Thought:** LLM reasons about the situation\n2. **Action:** Chooses and calls a tool\n3. **Observation:** Receives the tool\'s output\n4. Repeats until the task is solved\n\n**Tool Use / Function Calling:**\nLLMs can call defined "tools" (functions) by returning structured JSON. Tools can be:\n- Web search\n- Code execution\n- File system access\n- API calls\n- Database queries\n\n**Agent types we covered:**\n- **ReAct Agent:** Uses reason-act loop\n- **Plan-and-Execute:** Plans all steps upfront\n- **Multi-Agent:** Coordinates multiple specialized agents',
        },
      },
      {
        id: 'reflections',
        content: {
          da: 'Agents ændrer fundamentalt måden, vi tænker på AI-applikationer. Det er ikke længere "send en besked, få et svar" — det er "giv AI en opgave, og lad den løse den selvstændigt". Det åbner for helt nye use-cases: kodegenerering med automatisk test og fejlrettelse, research-assistenter der kan søge på nettet, automatisk dataanalyse.\n\nMen det skaber også nye risici. En agent, der kan køre kode og ændre filer, kan gøre virkelig skade. Sandboxing og permissions er kritisk.\n\nJeg kan ikke undgå at tænke på, hvor dette er på vej hen om 5 år.',
          en: 'Agents fundamentally change the way we think about AI applications. It is no longer "send a message, get a response" — it is "give AI a task, and let it solve it autonomously." This opens up entirely new use cases: code generation with automatic testing and bug fixing, research assistants that can search the web, automatic data analysis.\n\nBut it also creates new risks. An agent that can run code and modify files can do real damage. Sandboxing and permissions are critical.\n\nI cannot help but think about where this is heading in 5 years.',
        },
      },
      {
        id: 'challenges',
        content: {
          da: 'Agenter kan "loope" — kalde det samme tool igen og igen uden at nå en løsning. Jeg byggede en agent, der loopede 12 gange og brugte mange API-tokens, inden jeg tilføjede et max-steps stop.\n\nDet er svært at debugge en agent, fordi der er mange lag: LLM-kald, tool-kald, parsing af resultater. Jeg brugte meget tid på at tracke, præcis hvornår noget gik galt.\n\nContext window management er også kritisk — lange agent-kørsel akkumulerer meget tekst i context, og til sidst overskrider man grænsen.',
          en: 'Agents can "loop" — calling the same tool over and over without reaching a solution. I built an agent that looped 12 times and used many API tokens, before I added a max-steps stop.\n\nDebugging an agent is difficult because there are many layers: LLM calls, tool calls, parsing of results. I spent a lot of time tracking exactly when something went wrong.\n\nContext window management is also critical — long agent runs accumulate a lot of text in context, and eventually you exceed the limit.',
        },
      },
      {
        id: 'curiosity',
        content: {
          da: 'Hvad er de bedste frameworks til at bygge production-ready agents? LangGraph, AutoGen, CrewAI — der er mange muligheder. Hvad er trade-offs?\n\nHvordan håndterer man "human-in-the-loop" i en agent? Hvornår skal agenten pause og spørge brugeren?\n\nJeg er meget nysgerrig på multi-agent systemer. Kan man have en "manager-agent" der koordinerer specialist-agenter — en til kode, en til research, en til skriving?',
          en: 'What are the best frameworks for building production-ready agents? LangGraph, AutoGen, CrewAI — there are many options. What are the trade-offs?\n\nHow do you handle "human-in-the-loop" in an agent? When should the agent pause and ask the user?\n\nI am very curious about multi-agent systems. Can you have a "manager-agent" that coordinates specialist agents — one for code, one for research, one for writing?',
        },
      },
      {
        id: 'approach',
        content: {
          da: 'Jeg startede meget simpelt: en agent med kun ét tool (calculator), for at forstå mekanismen. Derefter tilføjede jeg gradvist flere tools og observerede, hvordan agenten valgte imellem dem. Denne inkrementelle tilgang hjalp mig med at forstå, hvornår LLM\'en vælger et bestemt tool.',
          en: 'I started very simply: an agent with only one tool (calculator), to understand the mechanism. Then I gradually added more tools and observed how the agent chose between them. This incremental approach helped me understand when the LLM chooses a particular tool.',
        },
      },
      {
        id: 'outcome',
        content: {
          da: 'Byggede en research-agent med 3 tools: web_search, read_page og save_note. Agenten kan tage et emne, søge information, læse relevante sider og gemme en struktureret opsummering. Testede med emnet "RAG best practices 2025" og fik en brugbar rapport.',
          en: 'Built a research agent with 3 tools: web_search, read_page, and save_note. The agent can take a topic, search for information, read relevant pages, and save a structured summary. Tested with the topic "RAG best practices 2025" and got a useful report.',
        },
      },
    ],
    codeSnippets: [
      {
        id: 'tool-definition',
        title: 'Tool Definition med Anthropic',
        language: 'python',
        code: `from anthropic import Anthropic
import json, subprocess

client = Anthropic()

tools = [
    {
        "name": "execute_python",
        "description": "Udfør Python-kode og returnér output. Brug til beregninger og databehandling.",
        "input_schema": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "string",
                    "description": "Python-kode der skal køres"
                }
            },
            "required": ["code"]
        }
    },
    {
        "name": "read_file",
        "description": "Læs indholdet af en fil.",
        "input_schema": {
            "type": "object",
            "properties": {
                "path": {"type": "string", "description": "Filstien"}
            },
            "required": ["path"]
        }
    }
]

def run_agent(task: str):
    messages = [{"role": "user", "content": task}]

    while True:
        response = client.messages.create(
            model="claude-opus-4-7",
            max_tokens=4096,
            tools=tools,
            messages=messages
        )

        # Tilføj assistant-svar til historik
        messages.append({"role": "assistant", "content": response.content})

        # Stop hvis ingen tool calls
        if response.stop_reason != "tool_use":
            final = next(b for b in response.content if b.type == "text")
            return final.text

        # Udfør tool calls og tilføj resultater
        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                result = dispatch_tool(block.name, block.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": str(result)
                })

        messages.append({"role": "user", "content": tool_results})`,
      },
    ],
    resources: [
      { title: 'Anthropic Tool Use Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use' },
      { title: 'LangGraph — Agent Framework', url: 'https://langchain-ai.github.io/langgraph/' },
      { title: 'ReAct: Synergizing Reasoning and Acting (paper)', url: 'https://arxiv.org/abs/2210.03629' },
    ],
  },

  {
    id: 'engestofte-case-project',
    slug: 'engestofte-gods-ai-case-project',
    type: 'project',
    date: '2026-05-18',
    module: 'Engestofte Gods — AI Case Project',
    readTime: 18,
    title: {
      da: 'Engestofte Gods — Forespørgselsystem med AI',
      en: 'Engestofte Gods — AI-Powered Inquiry System',
    },
    summary: {
      da: 'Et fuldt forespørgselsystem til et historisk gods: en guidet kunde-wizard, et admin-dashboard og tre AI-features (chatbot, dagsbrief og dato-forslag) bygget på Groq/Llama 3.3 — uden RAG, med JWT-baseret admin-login.',
      en: 'A full inquiry system for a historic Danish estate: a guided customer wizard, an admin dashboard, and three AI features (chatbot, daily brief, and date suggestions) built on Groq/Llama 3.3 — no RAG, with JWT-based admin login.',
    },
    tags: ['Case Project', 'Flask', 'React', 'Groq', 'Llama-3.3', 'JWT', 'SQLite', 'SSE'],
    sections: [
      {
        id: 'overview',
        content: {
          da: '**Hvad er det?**\nEt fuldt forespørgselsystem til Engestofte Gods — et historisk gods fra 1457 ved Maribo Søndersø, der udlejer lokaler til bryllupper, fester, konferencer, jagt og fem feriehuse.\n\n**Problemet:**\nDeres tidligere "system" var en 3-felts kontaktformular på Squarespace. Personalet (Johan, Lise, Mette) skulle manuelt læse hver besked, kopiere data over i et andet system, beregne pris i hånden og skrive et svar fra bunden — for dusinvis af forespørgsler om ugen, fordelt på fem meget forskellige servicetyper.\n\n**Løsningen:**\n- En guidet 5-trins wizard til kunder med live prisestimat, dato-tilgængelighedscheck og en AI-chatbot\n- Et admin-dashboard til personalet med status-flow (Ny → Kontaktet → Bekræftet → Annulleret), interne noter og et snippet-baseret svarsystem\n- Tre AI-features der binder det sammen — uden at gå på kompromis med den personlige, "menneskelige" tone Engestofte er kendt for\n\n**Værdi for kunden:**\n- Automatisk, struktureret lagring af alle forespørgsler i en database i stedet for e-mails\n- Automatisk prisberegning og routing til rette medarbejder\n- 24/7 svar på almindelige spørgsmål via chatbotten — uden personale-involvering\n- Et samlet overblik via dashboardet i stedet for en uoverskuelig indbakke',
          en: '**What is it?**\nA full inquiry system for Engestofte Gods — a historic Danish estate from 1457 by Lake Maribo Søndersø, which rents out venues for weddings, parties, conferences, hunting, and five holiday cottages.\n\n**The problem:**\nTheir previous "system" was a 3-field contact form on Squarespace. Staff (Johan, Lise, Mette) had to manually read every message, copy the details into another system, calculate a price by hand, and write a reply from scratch — for dozens of inquiries per week across five very different service types.\n\n**The solution:**\n- A guided 5-step wizard for customers with a live price estimate, date availability check, and an AI chatbot\n- An admin dashboard for staff with a status flow (New → Contacted → Confirmed → Cancelled), internal notes, and a snippet-based reply system\n- Three AI features that tie it all together — without compromising the personal, "human" tone Engestofte is known for\n\n**Value for the client:**\n- Automatic, structured storage of every inquiry in a database instead of emails\n- Automatic price calculation and routing to the right staff member\n- 24/7 answers to common questions via the chatbot — no staff involvement needed\n- A unified overview via the dashboard instead of an unmanageable inbox',
        },
      },
      {
        id: 'architecture',
        content: {
          da: '**Tech stack:**\n- Frontend: React 19 + Vite + Framer Motion (kunde-wizard + admin-dashboard)\n- Backend: Flask (Python) som REST API + Server-Sent Events\n- Database: SQLite via SQLAlchemy — én tabel (`Inquiry`) med JSON-felter for fleksible detaljer pr. servicetype\n- AI: Groq Cloud (`llama-3.3-70b-versatile`)\n- E-mail: Flask-Mail (SMTP)\n- PDF: ReportLab\n\n**Hvorfor denne stack?**\n- React + Vite giver en hurtig, moderne frontend der kan deployes gratis (Vercel)\n- Flask er let at forstå og sætte op for et studieprojekt, men robust nok til en lille virksomhed\n- SQLite kræver ingen separat databaseserver — passer til Engestoftes volumen og gør lokal udvikling og overdragelse enkel\n- Groq blev valgt frem for Anthropic/OpenAI fordi det er gratis uden kreditkort — vigtigt når projektet skal overdrages til en kunde\n\n**Datagang ved en forespørgsel:**\n1. Kunden udfylder wizarden (servicevalg → detaljer → prisestimat → kontakt → bekræftelse)\n2. `POST /api/submit` validerer, beregner pris (`pricing.py`), router til rette medarbejder og opretter en `Inquiry`-række\n3. To e-mails sendes automatisk — én til personalet, én til kunden\n4. Personalet ser forespørgslen i dashboardet (auto-opdateres hvert 15. sekund), ændrer status, skriver noter og svarer med snippets\n\n**Deployment (planlagt):**\n- Frontend → Vercel (gratis tier, auto-deploy fra GitHub)\n- Backend → Railway (gratis tier, env-variabler sat i UI)',
          en: '**Tech stack:**\n- Frontend: React 19 + Vite + Framer Motion (customer wizard + admin dashboard)\n- Backend: Flask (Python) as a REST API + Server-Sent Events\n- Database: SQLite via SQLAlchemy — a single table (`Inquiry`) with JSON fields for flexible per-service details\n- AI: Groq Cloud (`llama-3.3-70b-versatile`)\n- Email: Flask-Mail (SMTP)\n- PDF: ReportLab\n\n**Why this stack?**\n- React + Vite gives a fast, modern frontend that can be deployed for free (Vercel)\n- Flask is easy to understand and set up for a student project, yet robust enough for a small business\n- SQLite requires no separate database server — fits Engestofte\'s volume and keeps local development and handover simple\n- Groq was chosen over Anthropic/OpenAI because it\'s free with no credit card required — important when the project is handed over to a client\n\n**Data flow for an inquiry:**\n1. The customer fills in the wizard (service selection → details → price estimate → contact → confirmation)\n2. `POST /api/submit` validates input, calculates the price (`pricing.py`), routes to the right staff member, and creates an `Inquiry` row\n3. Two emails are sent automatically — one to staff, one to the customer\n4. Staff see the inquiry in the dashboard (auto-refreshes every 15 seconds), change status, write notes, and reply using snippets\n\n**Deployment (planned):**\n- Frontend → Vercel (free tier, auto-deploy from GitHub)\n- Backend → Railway (free tier, env vars set in the UI)',
        },
      },
      {
        id: 'ai',
        content: {
          da: 'AI er integreret tre steder — alle bygget på Groqs `llama-3.3-70b-versatile`, og alle med graceful fallback hvis nøglen mangler eller kaldet fejler:\n\n**1. Kunde-chatbot** (`/api/chat`)\nEt flydende chatvindue på wizard-siden. Input er samtalehistorikken, output er et strømmet (SSE) dansk svar. Se næste afsnit for detaljer.\n\n**2. Admin-dagsbrief** (`/api/admin/brief`)\nNår personalet logger ind, bygger backend en kontekst-streng med dagens statistik (nye/kontaktede/bekræftede forespørgsler, modtaget seneste 24t, næste bekræftede dato) og sender den til Groq med en system-prompt der beder om en kort, varm, personlig velkomst på dansk — uden emojis og uden "God morgen". `max_tokens=120`, `temperature=0.7`.\n\n**3. Dato-konflikt forslag** (`/api/availability`)\nNår en kunde vælger en allerede booket dato, finder backend op til 3 alternative fri datoer (±21 dage) og lader AI\'en formulere én kort, venlig sætning der nævner alternativerne. `max_tokens=60`, `temperature=0.8`.\n\n**Fælles for alle tre:**\n- Simple chat-completion-kald — ikke agent-baseret. Modellen vælger ikke selv værktøjer eller tager flere trin; det er ét prompt → ét svar\n- Alle Groq-kald er wrappet i `try/except` med en statisk dansk fallback-tekst\n- Hvis `GROQ_API_KEY` ikke er sat (eller stadig er placeholder), springes AI-kaldet helt over',
          en: 'AI is integrated in three places — all built on Groq\'s `llama-3.3-70b-versatile`, each with a graceful fallback if the key is missing or the call fails:\n\n**1. Customer chatbot** (`/api/chat`)\nA floating chat window on the wizard page. Input is the conversation history, output is a streamed (SSE) Danish reply. See the next section for details.\n\n**2. Admin daily brief** (`/api/admin/brief`)\nWhen staff log in, the backend builds a context string with the day\'s stats (new/contacted/confirmed inquiries, received in the last 24h, next confirmed date) and sends it to Groq with a system prompt asking for a short, warm, personal Danish greeting — no emojis, no "Good morning". `max_tokens=120`, `temperature=0.7`.\n\n**3. Date conflict suggestions** (`/api/availability`)\nWhen a customer picks an already-booked date, the backend finds up to 3 alternative free dates (±21 days) and lets the AI phrase one short, friendly sentence mentioning the alternatives. `max_tokens=60`, `temperature=0.8`.\n\n**Common to all three:**\n- Simple chat-completion calls — not agent-based. The model doesn\'t choose tools or take multiple steps itself; it\'s one prompt → one response\n- Every Groq call is wrapped in `try/except` with a static Danish fallback text\n- If `GROQ_API_KEY` is missing (or still a placeholder), the AI call is skipped entirely',
        },
      },
      {
        id: 'rag',
        content: {
          da: '**Er chatbotten en RAG-chatbot? Nej.**\n\nRAG (Retrieval-Augmented Generation) er en arkitektur hvor man:\n- Opdeler dokumenter i mindre stykker (chunking)\n- Omdanner hvert stykke til en vektor (embedding)\n- Gemmer vektorerne i en vector database\n- Finder de mest relevante stykker ved en forespørgsel (retrieval) og sender kun dem med til LLM\'en\n\nDet er kraftfuldt til store vidensbaser (tusinder af dokumenter) — men det er ikke det vi har brug for.\n\n**Hvorfor vi ikke valgte RAG:**\nEngestoftes komplette vidensbase — alle services, priser, husbeskrivelser og kontaktpersoner — fylder ca. 2.000 tokens og passer komfortabelt i én system-prompt. Modellen kender derfor alt allerede ved den første besked. At bygge en embedding-pipeline og vector database til en vidensbase af denne størrelse ville tilføje kompleksitet (ekstra database, embedding-kald, retrieval-logik) uden reel gevinst — og en ny fejlkilde (forkert/manglende retrieval).\n\n**Hvordan chatbotten faktisk er bygget:**\n- `backend/chat_service.py` indeholder en stor `SYSTEM_PROMPT` med: rolledefinition (varm, personlig, dansk), adfærdsregler (korte svar, opfordr til formular) og en komplet vidensbase opdelt i sektioner (bryllup, fest, konference, jagt, sommerhuse, restaurant, julemarked)\n- `/api/chat` modtager samtalehistorikken og streamer svaret tilbage via Server-Sent Events (SSE)\n- SSE blev valgt over WebSockets fordi kommunikationen kun går server → klient — simplere, ingen ekstra libraries\n- Frontend (`ChatBot.jsx`) viser svaret token-for-token med en typing-indikator, så det opleves som live skrivning\n\n**Hvorfor en chatbot — og ikke fx AI-genererede e-mails?**\nVi overvejede AI-genererede svar til personalet, men fravalgte det — ren AI-tekst virker robotagtig for et luksusbrand, og personalet ville redigere det alligevel. I stedet bruger admin et snippet-system (færdigskrevne tekstblokke med `{navn}`, `{dato}`, `{pris}`), som personalet selv vælger og redigerer. Chatbotten derimod løser et reelt problem: kunder har spørgsmål *før* de udfylder formularen, og uden svar ringer/mailer de — eller forsvinder.',
          en: '**Is the chatbot a RAG chatbot? No.**\n\nRAG (Retrieval-Augmented Generation) is an architecture where you:\n- Split documents into smaller pieces (chunking)\n- Turn each piece into a vector (embedding)\n- Store the vectors in a vector database\n- At query time, find the most relevant pieces (retrieval) and send only those to the LLM\n\nThat\'s powerful for large knowledge bases (thousands of documents) — but it\'s not what we need.\n\n**Why we didn\'t choose RAG:**\nEngestofte\'s complete knowledge base — all services, prices, house descriptions, and contacts — fits in about 2,000 tokens, comfortably within a single system prompt. The model already knows everything before the first message arrives. Building an embedding pipeline and vector database for a knowledge base this size would add complexity (an extra database, embedding calls, retrieval logic) with no real benefit — and a new failure mode (incorrect or missing retrieval).\n\n**How the chatbot is actually built:**\n- `backend/chat_service.py` contains a large `SYSTEM_PROMPT` with: a role definition (warm, personal, Danish), behavioral rules (short answers, encourage the form) and a complete knowledge base split into sections (weddings, parties, conferences, hunting, cottages, restaurant, Christmas market)\n- `/api/chat` receives the conversation history and streams the reply back via Server-Sent Events (SSE)\n- SSE was chosen over WebSockets because communication only goes server → client — simpler, no extra libraries\n- The frontend (`ChatBot.jsx`) renders the reply token by token with a typing indicator, creating a live-typing effect\n\n**Why a chatbot — and not, say, AI-generated emails?**\nWe considered AI-generated replies for staff but rejected it — pure AI text reads as robotic for a luxury brand, and staff would edit it anyway. Instead, admins use a snippet system (pre-written text blocks with `{name}`, `{date}`, `{price}` placeholders) that staff choose and edit themselves. The chatbot, on the other hand, solves a real problem: customers have questions *before* filling in the form, and without answers they call, email — or leave.',
        },
      },
      {
        id: 'security',
        content: {
          da: '**JWT (JSON Web Token) — admin-login**\n\nAdmin-dashboardet er beskyttet med `flask-jwt-extended`:\n- `POST /api/admin/login` sammenligner brugernavn/password mod værdier fra `.env` (`ADMIN_USERNAME`/`ADMIN_PASSWORD`). Ved match returneres et signeret JWT via `create_access_token()`\n- Tokenet udløber efter 8 timer (`JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=8)`)\n- Frontend gemmer tokenet i `localStorage` og sender det som `Authorization: Bearer <token>` på alle admin-kald\n- Alle `/api/admin/*` endpoints har dekoratoren `@jwt_required()`, som validerer signatur og udløb før requesten når selve funktionen\n- `ProtectedRoute` i React redirecter til login, hvis der ikke findes et token\n\n**Kendte svagheder (bevidst dokumenteret):**\n- Admin-password sammenlignes som ren tekst — ingen hashing endnu\n- `JWT_SECRET_KEY` har en hardcodet dev-default, hvis `.env` ikke sætter den\n- Credentials ligger i `.env` som klartekst\n\nDisse er identificerede forbedringer til en evt. produktionsversion (password-hashing med `werkzeug.security`, tilfældig produktions-secret).\n\n**Secrets management generelt:**\n- Alle hemmeligheder (Groq-nøgle, SMTP-login, admin-credentials, JWT-secret) ligger i `backend/.env`, som ikke er committet til git\n- `.env.example` fungerer som skabelon ved overdragelse\n- Indlæses med `python-dotenv` (`load_dotenv(override=True)`)\n- Ved deploy til Railway sættes de samme variabler i Railways environment-UI\n\n**Andre sikkerhedsovervejelser:**\n- Prompt injection: system-prompten etablerer en streng rolle; risikoen er begrænset af at chatbotten ikke har adgang til værktøjer eller data den kan misbruge (ingen agent-arkitektur)\n- Hallucination: mitigeret ved at hele vidensbasen ligger i prompten, plus et forbehold om at bekræfte priser direkte\n- CORS er begrænset til kendte origins (`localhost:5173` lokalt, produktionsdomæne ved deploy)',
          en: '**JWT (JSON Web Token) — admin login**\n\nThe admin dashboard is protected with `flask-jwt-extended`:\n- `POST /api/admin/login` compares username/password against values from `.env` (`ADMIN_USERNAME`/`ADMIN_PASSWORD`). On a match, a signed JWT is returned via `create_access_token()`\n- The token expires after 8 hours (`JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=8)`)\n- The frontend stores the token in `localStorage` and sends it as `Authorization: Bearer <token>` on every admin call\n- Every `/api/admin/*` endpoint has the `@jwt_required()` decorator, which validates the signature and expiry before the request reaches the function\n- A `ProtectedRoute` in React redirects to login if no token is present\n\n**Known weaknesses (deliberately documented):**\n- The admin password is compared as plain text — no hashing yet\n- `JWT_SECRET_KEY` has a hardcoded dev default if `.env` doesn\'t set it\n- Credentials live in `.env` as plain text\n\nThese are identified improvements for a potential production version (password hashing with `werkzeug.security`, a random production secret).\n\n**Secrets management in general:**\n- All secrets (Groq key, SMTP login, admin credentials, JWT secret) live in `backend/.env`, which is not committed to git\n- `.env.example` acts as a template for handover\n- Loaded via `python-dotenv` (`load_dotenv(override=True)`)\n- On Railway, the same variables are set in Railway\'s environment UI\n\n**Other security considerations:**\n- Prompt injection: the system prompt establishes a strict role; the risk is limited by the chatbot having no access to tools or data it could misuse (no agent architecture)\n- Hallucination: mitigated by the entire knowledge base living in the prompt, plus a disclaimer to confirm prices directly\n- CORS is restricted to known origins (`localhost:5173` locally, production domain on deploy)',
        },
      },
      {
        id: 'outcome',
        content: {
          da: '**Hvad kan systemet i dag:**\n- Komplet 5-trins kunde-wizard med live prisestimat for fem forskellige servicetyper\n- Dato-tilgængelighedscheck med AI-formulerede alternative forslag\n- AI-chatbot der besvarer spørgsmål om priser, huse og pakker på dansk\n- Admin-dashboard med JWT-login, status-flow, interne noter, snippet-baseret svarsystem og PDF-bekræftelser\n- AI-dagsbrief der opsummerer dagens pipeline for personalet\n\n**Spec-driven development:**\nProjektet er udviklet med en løbende beslutningslog (`docs/PROCESS.md`), hvor hver større funktion er dokumenteret med "hvad overvejede vi / hvad valgte vi / hvorfor". Det gjorde det muligt at spore *hvorfor* f.eks. Groq, snippets og SSE blev valgt — ikke kun *at* de blev valgt. Commits er desuden skrevet med detaljerede beskrivelser af adfærd, ikke kun "fixed bug".\n\n**Hvad jeg ville gøre anderledes / næste skridt:**\n- Hash admin-password og brug en tilfældig produktions-JWT-secret\n- Visuel kalender med automatisk konfliktblokering\n- Fuld kobling mellem statusskift og automatisk PDF-afsendelse\n- Automatiserede tests (der findes ingen endnu)\n\n**Den vigtigste læring:**\nAI giver mest værdi når den er *afgrænset* til et konkret problem (besvar spørgsmål, opsummer data, formulér en sætning) frem for at få frie hænder til at handle. Hver gang vi overvejede at give AI\'en mere ansvar (skrive kundesvar, ændre data), valgte vi i stedet en løsning hvor mennesket bevarer kontrollen — og det gjorde systemet mere troværdigt, ikke mindre AI-drevet.',
          en: '**What the system can do today:**\n- A complete 5-step customer wizard with live price estimates for five different service types\n- Date availability check with AI-phrased alternative suggestions\n- AI chatbot that answers questions about prices, houses, and packages in Danish\n- Admin dashboard with JWT login, status flow, internal notes, snippet-based reply system, and PDF confirmations\n- AI daily brief summarizing the day\'s pipeline for staff\n\n**Spec-driven development:**\nThe project was built with a running decision log (`docs/PROCESS.md`), where every major feature is documented with "what we considered / what we chose / why". This made it possible to trace *why* Groq, snippets, and SSE were chosen — not just *that* they were. Commits are also written with detailed descriptions of behavior, not just "fixed bug".\n\n**What I\'d do differently / next steps:**\n- Hash the admin password and use a random production JWT secret\n- A visual calendar with automatic conflict blocking\n- Fully wire status changes to automatic PDF delivery\n- Automated tests (none exist yet)\n\n**The most important lesson:**\nAI delivers the most value when it\'s *scoped* to a concrete problem (answer a question, summarize data, phrase a sentence) rather than given free rein to act. Every time we considered giving the AI more responsibility (writing customer replies, changing data), we instead chose a solution where the human keeps control — and that made the system more trustworthy, not less AI-driven.',
        },
      },
    ],
    codeSnippets: [
      {
        id: 'jwt-login',
        title: 'JWT admin-login (backend/app.py)',
        language: 'python',
        code: `@app.route('/api/admin/login', methods=['POST'])
def admin_login():
    data = request.get_json() or {}
    if data.get('username') == ADMIN_USERNAME and data.get('password') == ADMIN_PASSWORD:
        token = create_access_token(identity=ADMIN_USERNAME)
        return jsonify({'token': token, 'username': ADMIN_USERNAME})
    return jsonify({'error': 'Forkert brugernavn eller adgangskode'}), 401


@app.route('/api/admin/inquiries', methods=['GET'])
@jwt_required()
def list_inquiries():
    identity = get_jwt_identity()
    ...`,
      },
      {
        id: 'chat-streaming',
        title: 'Chatbot streaming (backend/chat_service.py)',
        language: 'python',
        code: `def _client():
    return Groq(api_key=os.getenv('GROQ_API_KEY'))

def stream_chat(messages: list):
    stream = _client().chat.completions.create(
        model='llama-3.3-70b-versatile',
        messages=[{'role': 'system', 'content': SYSTEM_PROMPT}] + messages,
        stream=True,
        max_tokens=400,
        temperature=0.7,
    )
    for chunk in stream:
        text = chunk.choices[0].delta.content or ''
        if text:
            yield text`,
      },
    ],
    resources: [
      { title: 'Engestofte Gods — GitHub repo', url: 'https://github.com/Ghostfear1713/Engestofte-Gods' },
      { title: 'Groq Console (free LLM API)', url: 'https://console.groq.com' },
      { title: 'Flask-JWT-Extended Documentation', url: 'https://flask-jwt-extended.readthedocs.io' },
    ],
  },
]
