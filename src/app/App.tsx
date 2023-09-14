import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { useSelector } from 'react-redux'
import { AppRootState } from './store'
import { RequestStatusType } from './app-reducer'
import { LinearLoader } from '../common/components/Loader/LinearLoader'

export const App = () => {
  let appStatus = useSelector<AppRootState, RequestStatusType>(s => s.app.status)
  return (
    <div>
      {appStatus === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
    </div>
  )
}
