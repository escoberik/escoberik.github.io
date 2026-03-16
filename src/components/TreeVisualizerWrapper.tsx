import { TreeVisualizer } from 'rbtrees'
import 'rbtrees/style.css'

export default function TreeVisualizerWrapper() {
  return (
    <div style={{ width: '100%' }}>
      <TreeVisualizer />
    </div>
  )
}
