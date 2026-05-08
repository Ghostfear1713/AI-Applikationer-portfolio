export const skillCategories = [
  {
    id: 'languages',
    icon: 'Code2',
    color: 'tag-python',
    skills: [
      { name: 'Python', level: 70, badge: 'intermediate' },
      { name: 'Java', level: 65, badge: 'intermediate' },
      { name: 'JavaScript / TypeScript', level: 70, badge: 'intermediate' },
      { name: 'C#', level: 55, badge: 'intermediate' },
      { name: 'SQL', level: 65, badge: 'intermediate' },
      { name: 'HTML & CSS', level: 75, badge: 'advanced' },
      { name: 'Bash / Shell', level: 45, badge: 'beginner' },
    ],
  },
  {
    id: 'frameworks',
    icon: 'Layers',
    color: 'tag-web',
    skills: [
      { name: 'React', level: 70, badge: 'intermediate' },
      { name: 'FastAPI', level: 65, badge: 'intermediate' },
      { name: 'LangChain', level: 60, badge: 'intermediate' },
      { name: 'Unity (C#)', level: 60, badge: 'intermediate' },
      { name: 'Node.js / Express', level: 55, badge: 'intermediate' },
      { name: 'Tailwind CSS', level: 75, badge: 'advanced' },
      { name: '.NET / ASP.NET', level: 50, badge: 'intermediate' },
    ],
  },
  {
    id: 'ai',
    icon: 'Brain',
    color: 'tag-ai',
    skills: [
      { name: 'Prompt Engineering', level: 75, badge: 'advanced' },
      { name: 'RAG Systems', level: 65, badge: 'intermediate' },
      { name: 'LLM APIs (OpenAI / Anthropic)', level: 75, badge: 'advanced' },
      { name: 'AI Agents & Tool Use', level: 60, badge: 'intermediate' },
      { name: 'Vector Databases', level: 55, badge: 'intermediate' },
      { name: 'Embeddings & Semantic Search', level: 60, badge: 'intermediate' },
    ],
  },
  {
    id: 'databases',
    icon: 'Database',
    color: 'tag-tools',
    skills: [
      { name: 'PostgreSQL', level: 60, badge: 'intermediate' },
      { name: 'ChromaDB', level: 60, badge: 'intermediate' },
      { name: 'SQLite', level: 65, badge: 'intermediate' },
      { name: 'MongoDB', level: 40, badge: 'beginner' },
      { name: 'Redis', level: 35, badge: 'beginner' },
    ],
  },
  {
    id: 'tools',
    icon: 'Wrench',
    color: 'tag-default',
    skills: [
      { name: 'Git & GitHub', level: 75, badge: 'advanced' },
      { name: 'Docker', level: 55, badge: 'intermediate' },
      { name: 'VS Code', level: 85, badge: 'advanced' },
      { name: 'Linux / WSL', level: 60, badge: 'intermediate' },
      { name: 'Postman / REST APIs', level: 70, badge: 'advanced' },
      { name: 'GitHub Actions / CI-CD', level: 50, badge: 'intermediate' },
    ],
  },
  {
    id: 'soft',
    icon: 'Users',
    color: 'tag-web',
    skills: [
      { name: 'Problem Solving', level: 85, badge: 'advanced' },
      { name: 'Documentation', level: 80, badge: 'advanced' },
      { name: 'Self-directed Learning', level: 90, badge: 'expert' },
      { name: 'Collaboration', level: 75, badge: 'advanced' },
      { name: 'Danish (native)', level: 100, badge: 'expert' },
      { name: 'English (professional)', level: 85, badge: 'advanced' },
    ],
  },
]

export const badgeColors = {
  expert:       'bg-violet-500/10 text-violet-400 border border-violet-500/20',
  advanced:     'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
  intermediate: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  beginner:     'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  learning:     'bg-rose-500/10 text-rose-400 border border-rose-500/20',
}
