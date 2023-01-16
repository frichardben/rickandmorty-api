import { Main } from '@module/character-list/pages/Main'
import './assets/styles/App.scss'
import { DefaultErrorBoundary } from '@shared/components/ErrorBoundary'

export function App() {
  return (
    <DefaultErrorBoundary>
      <Main />
    </DefaultErrorBoundary>

  )
}
