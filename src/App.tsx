import { BrowserRouter,  Routes } from 'react-router-dom'
import SignIn from './components/SignIn'

function App() {

  return (
   <>
      <BrowserRouter>
          <SignIn />
        <Routes>
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
