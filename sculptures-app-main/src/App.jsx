// src/App.jsx
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import { sculptureList } from "./data.js";
import Layout from "./pages/Layout.jsx";
import SculptureListPage from "./pages/SculptureListPage.jsx";
import SculptureDetailPage from "./pages/SculptureDetailPage.jsx";
import SculptureFormPage from "./pages/SculptureFormPage.jsx";
import SculptureFilterPage from "./pages/SculptureFilterPage.jsx";
import SculptureRemovePage from "./pages/SculptureRemovePage.jsx"
/*import NoPage*/

export default function App() {
  const [sculptures, setSculptures] = useState(sculptureList);

  // TODO: addSculpture / updateSculpture / deleteSculpture handlers

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* TODO: index route → SculptureListPage */}
          <Route index element={<SculptureListPage />}/>
          {/* TODO: "sculptures/:id" → detail (Read one) */}
          <Route path="/sculptures/:id" element={<SculptureDetailPage />}/>
          {/* TODO: "sculptures/new" → form (Create) */}
          <Route path="/sculptures/new" element={<SculptureFormPage />}/>
          {/* TODO: "sculptures/:id/edit" → form (Update) */}
          <Route path="/sculptures/filter" element={<SculptureFilterPage />}/>
          <Route path="/sculptures/remove" element={<SculptureRemovePage />}/>
		  {/* TODO: "*" → NoPage */} 
		  <Route path="*" element={<h2>404 — Página no encontrada</h2>} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}