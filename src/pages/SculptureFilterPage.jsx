import { useState } from "react";
import { useSculptures } from "../SculpturesContext";

export default function SculptureFilterPage() {
  const { sculptures, loading, error } = useSculptures();
  const [year, setYear] = useState("");

  if (loading) return <p>Cargando esculturas...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  function handleChange(e) {
    setYear(e.target.value);
  }

  // Filter in memory from shared reactive sculptures state
  const filteredSculptures =
    year.trim() === ""
      ? sculptures
      : sculptures.filter((s) => String(s.year) === year.trim());

  return (
    <div>
      <h2>Filtrar Esculturas por Año</h2>

      <div style={{ marginBottom: "16px" }}>
        <label>
          Año:{" "}
          <input
            name="year"
            type="number"
            placeholder="Ej: 2024"
            value={year}
            onChange={handleChange}
          />
        </label>
        {year && (
          <button
            onClick={() => setYear("")}
            style={{ marginLeft: "8px" }}
          >
            Limpiar filtro
          </button>
        )}
      </div>

      <p>
        Mostrando {filteredSculptures.length} de {sculptures.length} esculturas
      </p>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredSculptures.map((sculptur) => (
          <li
            key={sculptur.id}
            style={{
              padding: "8px",
              borderBottom: "1px solid #ddd",
              maxWidth: "500px",
            }}
          >
            <strong>{sculptur.name}</strong> — {sculptur.artist} ({sculptur.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
