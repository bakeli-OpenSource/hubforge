
import React from "react";
import "./App.css";
import { PageTemplate4 } from "./components/PageTemplate";
import Alt from "./components/TemplateNum1/Alt";
import { PageAccueil } from "./components/composPageAccueil/PageAccueil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnsembleTemp2 from "./components/TemplateNum2/EnsembleTemp2";
import { AppProvider } from "./context/AppContext";
import Ampire from "./components/TemplateNum3/Ampire";
import Aria from "./components/TemplateNum4/Aria";
import { RenduNewTemplate } from "./components/NewTemplate/RenduNewTemplate";
import { TotalTemplates } from "./components/Templates/TotalTemplates";
import TelechargePage from "./components/Templates/TelechargePage";
import ChompRestaurant from "./components/pageTemplate2/ChompRestaurant";
import Ensemble from "./components/composPageAccueil/NewTemp2/Ensemble";
import SEVI from "./components/NewTemp1/SEVI";
import { Connexion } from "./pages/Connexion";
import { Inscription } from "./pages/Inscription";
import { WorkerPage } from "./components/Client/WorkerPage";
import WorkerForm from "./components/Client/AddForm";
import { ProtectedRoute } from "./Routes/ProtectedRoute";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
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
            <Route path="/addForm" element={<WorkerForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
