import { Main } from './pages/Main'
import './assets/styles/App.scss'
import { DefaultErrorBoundary } from './components/ErrorBoundary'

export function App() {
  return (
    <DefaultErrorBoundary>
      <Main />
    </DefaultErrorBoundary>

  )
}
