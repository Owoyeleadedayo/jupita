import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
// import SignIn from './components/SignIn'
import DashboardPage from './pages/DashboardPage';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <SignIn /> */}
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
