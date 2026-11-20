// src/pages/SculptureListPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSculptures } from "../SculpturesContext";

export default function SculptureListPage() {
  const { sculptures, loading, error } = useSculptures();
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  if (loading) return <p>Cargando esculturas desde Neon...</p>;
  if (error) return <p style={{ color: "red" }}>Error al cargar: {error}</p>;
  if (!sculptures || sculptures.length === 0) return <p>No hay esculturas disponibles.</p>;

  // Ensure index is within range if items change
  const currentIndex = index >= sculptures.length ? 0 : index;
  const currentSculpture = sculptures[currentIndex];

  function handlerOnClickPrev() {
    setIndex((prev) => Math.max(0, prev - 1));
  }

  function handlerOnClickNext() {
    setIndex((prev) => Math.min(sculptures.length - 1, prev + 1));
  }

  function handlerOnClickImage(id) {
    navigate(`/sculptures/${id}`);
  }

  return (
    <>
      <br />
      <h2>Sculptures Gallery</h2>
      <div>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: 0,
          }}
        >
          {sculptures.map((sculptur) => (
            <li key={sculptur.id}>
              <img
                src={sculptur.url}
                alt={sculptur.alt}
                width={50}
                style={{ cursor: "pointer", borderRadius: "4px" }}
                onClick={() => handlerOnClickImage(sculptur.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <button id="previous" onClick={handlerOnClickPrev} disabled={currentIndex === 0}>
        Previous
      </button>
      <button
        id="next"
        onClick={handlerOnClickNext}
        disabled={currentIndex === sculptures.length - 1}
      >
        Next
      </button>
      <p>
        ({currentIndex + 1} of {sculptures.length})
      </p>
      <p><strong>{currentSculpture.name}</strong> - {currentSculpture.artist}</p>
      <p>{currentSculpture.year}</p>
      {currentSculpture.location && <h3>Location: {currentSculpture.location}</h3>}
      <img src={currentSculpture.url} width="160" alt={currentSculpture.alt} />
      <p>{currentSculpture.description}</p>
    </>
  );
}
