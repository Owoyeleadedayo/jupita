import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import TransactionPage from './pages/TransactionPage';
import Sidebar from './components/Sidebar';
// import SignIn from './components/SignIn'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <SignIn /> */}
        <Sidebar />
        <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transaction" element={<TransactionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
