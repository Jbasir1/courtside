import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-4 p-6">
    <h1 className="text-5xl font-bold tracking-tight">Courtside</h1>
    <p className="text-slate-400 text-lg">NBA stats, comparisons, and live scores. Coming soon.</p>
    <span className="rounded-full bg-orange-500/15 text-orange-400 px-4 py-1 text-sm">In development</span>
  </main>
  )
}

export default App
