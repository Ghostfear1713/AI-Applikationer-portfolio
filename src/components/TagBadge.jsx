const TAG_COLORS = {
  rag:          'tag-ai',
  ai:           'tag-ai',
  llm:          'tag-ai',
  embeddings:   'tag-ai',
  agents:       'tag-ai',
  python:       'tag-python',
  langchain:    'tag-python',
  openai:       'tag-python',
  anthropic:    'tag-python',
  react:        'tag-web',
  vite:         'tag-web',
  tailwind:     'tag-web',
  javascript:   'tag-web',
  setup:        'tag-tools',
  chromadb:     'tag-tools',
  docker:       'tag-tools',
  github:       'tag-tools',
}

function getTagColor(tag) {
  const lower = tag.toLowerCase().replace(/[^a-z0-9]/g, '')
  return TAG_COLORS[lower] || 'tag-default'
}

export default function TagBadge({ tag, size = 'sm', onClick }) {
  const color = getTagColor(tag)
  const sizeClass = size === 'xs'
    ? 'text-[10px] px-1.5 py-0.5'
    : 'text-xs px-2 py-0.5'

  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${sizeClass} ${color} ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
      onClick={onClick}
    >
      {tag}
    </span>
  )
}
