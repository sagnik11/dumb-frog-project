import { Quiz } from './components/quiz/Quiz'
import { FlowerAnimations } from './components/decorative/FlowerAnimations'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white dark:from-pink-950 dark:via-pink-900 dark:to-gray-900">
      <FlowerAnimations />
      <Quiz />
    </div>
  )
}

export default App
