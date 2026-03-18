import { useState, useEffect } from 'react'
import { TreeVisualizer } from 'rbtrees'
import type { ThemeProps } from 'rbtrees'

const darkTheme: ThemeProps = {
  fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
  colors: {
    background: '#101010',
    text: '#ebebeb',
    nil: '#181818',
    nodeBlack: '#1a3566',
    nodeRed: '#d42b2b',
    nodeText: '#ebebeb',
    button: { bg: '#4f85f4', text: '#080808', disabled: '#242424' },
    input: { bg: '#080808', border: 'rgba(255,255,255,0.12)', text: '#ebebeb' },
  },
}

const lightTheme: ThemeProps = {
  fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
  colors: {
    background: '#f0ece6',
    text: '#1a1714',
    nil: '#e8e2da',
    nodeBlack: '#1a3566',
    nodeRed: '#d42b2b',
    nodeText: '#f8f6f2',
    button: { bg: '#4f85f4', text: '#f8f6f2', disabled: '#d8d2ca' },
    input: { bg: '#f8f6f2', border: 'rgba(0,0,0,0.15)', text: '#1a1714' },
  },
}

function getTheme(): ThemeProps {
  const t = document.documentElement.getAttribute('data-theme')
  return t === 'light' ? lightTheme : darkTheme
}

export default function TreeVisualizerWrapper() {
  const [theme, setTheme] = useState<ThemeProps>(darkTheme)
  const [count] = useState(() => Math.floor(Math.random() * 6) + 10)

  useEffect(() => {
    setTheme(getTheme())

    const observer = new MutationObserver(() => setTheme(getTheme()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <TreeVisualizer theme={theme} initialRandomCount={count} />
    </div>
  )
}
