// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import SculptureListPage from "./pages/SculptureListPage.jsx";
import SculptureDetailPage from "./pages/SculptureDetailPage.jsx";
import SculptureFormPage from "./pages/SculptureFormPage.jsx";
import SculptureFilterPage from "./pages/SculptureFilterPage.jsx";
import SculptureRemovePage from "./pages/SculptureRemovePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SculptureListPage />} />
          <Route path="/sculptures/:id" element={<SculptureDetailPage />} />
          <Route path="/sculptures/new" element={<SculptureFormPage />} />
          <Route path="/sculptures/:id/edit" element={<SculptureFormPage />} />
          <Route path="/sculptures/filter" element={<SculptureFilterPage />} />
          <Route path="/sculptures/remove" element={<SculptureRemovePage />} />
          <Route path="*" element={<h2>404 — Página no encontrada</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
