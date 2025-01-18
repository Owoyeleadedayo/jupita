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
import LogsPage from "./pages/Logs/LogsPage";
import LoginPage from "./pages/Login/LoginPage";
import { Box } from "@chakra-ui/react";
import EmailVerificationPage from "./pages/EmailVerification/EmailVerificationPage";
import EmailVerifiedPage from "./pages/EmailVerified/EmailVerifiedPage";
import SelectProductPage from "./pages/SelectProduct/SelectProductPage";
import GetStartedPage from "./pages/LoanFlowBusiness/GetStartedPage";
import LoanLoginPage from "./pages/LoanFlowBusiness/LoanLoginPage";
import LoanInfoPage from "./pages/LoanFlowBusiness/LoanInfoPage";
import DirectorPage from "./pages/LoanFlowBusiness/DirectorPage";
import VerifyOTPPage from "./pages/LoanFlowBusiness/VerifyOTPPage";
import BusinessInfoPage from "./pages/LoanFlowBusiness/BusinessInfoPage";
import BusinessDocumentPage from "./pages/LoanFlowBusiness/BusinessDocumentPage";
import BankLinkingPage from "./pages/LoanFlowBusiness/BankLinkingPage";
import LoanSubmittedPage from "./pages/LoanFlowBusiness/LoanSubmittedPage";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/email" element={<EmailVerificationPage />} />
          <Route path="/verified" element={<EmailVerifiedPage />} />
          <Route path="/select-product" element={<SelectProductPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/loan-login" element={<LoanLoginPage />} />
          <Route path="/loan-info" element={<LoanInfoPage />} />
          <Route path="/director" element={<DirectorPage />} />
          <Route path="/verify-otp" element={<VerifyOTPPage />} />
          <Route path="/business-info" element={<BusinessInfoPage />} />
          <Route path="/business-document" element={<BusinessDocumentPage />} />
          <Route path="/bank-linking" element={<BankLinkingPage />} />
          <Route path="/loan-submitted" element={<LoanSubmittedPage />} />
          <Route element={<LayoutWithSidebar />}>
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
            <Route path="/logs" element={<LogsPage />} />

            <Route path="*" element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
    </>
  );
}

function LayoutWithSidebar() {
  return (
    <Box>
      <Sidebar />
      <div>
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
          <Route path="/logs" element={<LogsPage />} />
        </Routes>
      </div>
    </Box>
  );
}

export default App;
