import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
// import SignIn from './components/SignIn'

function App() {

  return (
   <>
      <BrowserRouter>
          {/* <SignIn /> */}
        <Routes>
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
