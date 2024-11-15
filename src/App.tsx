import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Sidebar from "./components/Sidebar";
import ClientsProfilePage from "./pages/Client/ClientsProfilePage";
import AnalyzePage from "./pages/Analyze/AnalyzePage";
import ApiStatusPage from "./pages/Dashboard/ApiStatusPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import DecisionModulePage from "./pages/DecisionModule/DecisionModulePage";
import AnalysisPage from "./pages/Analyze/AnalysisPage";
import CreateModulePage from "./pages/DecisionModule/CreateModulePage";
import ClientsPage from "./pages/Client/ClientsPage";
import CreditSearchPage from "./pages/CreditSearch/CreditSearchtPage";
import CreditSearchResultPage from "./pages/CreditSearch/CreditSearchResultPage";
import TransactionPage from "./pages/Transaction/TransactionPage";
import DetailsPage from "./pages/Transaction/DetailsPage";
// import SignIn from './components/SignIn'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <SignIn /> */}
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/api-status" element={<ApiStatusPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/transaction/:id" element={<DetailsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/clients/:id" element={<ClientsProfilePage />} />
          <Route path="/credit-search" element={<CreditSearchPage />} />
          <Route
            path="/creditSearchResult"
            element={<CreditSearchResultPage />}
          />
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="/analyze/:id" element={<AnalysisPage />} />
          <Route path="/setting" element={<SettingsPage />} />
          <Route path="/decision-module" element={<DecisionModulePage />} />
          <Route path="/create-module" element={<CreateModulePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
