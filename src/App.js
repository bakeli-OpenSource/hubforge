import React from "react";
import "./App.css";
import { PageAccueil } from "./components/composPageAccueil/PageAccueil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { TotalTemplates } from "./components/Templates/TotalTemplates";
import TelechargePage from "./components/Templates/TelechargePage";
import { Connexion } from "./pages/Connexion";
import { Inscription } from "./pages/Inscription";
import { WorkerPage } from "./components/Client/WorkerPage";
import { ProtectedRoute } from "./Routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<PageAccueil />} />
            <Route
              path="/telecharge/:templateId"
              element={<TelechargePage />}
            />
            <Route path="/dashbords" element={<TotalTemplates />} />
            {/*== Routes vers La partie Worker== */}
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route
              path="/workerPage"
              element={<ProtectedRoute Cmp={WorkerPage} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
