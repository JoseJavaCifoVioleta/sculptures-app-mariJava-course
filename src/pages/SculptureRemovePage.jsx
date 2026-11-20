import { useSculptures } from "../SculpturesContext";

export default function SculptureRemovePage() {
  const { sculptures, loading, error, removeSculpture } = useSculptures();

  if (loading) return <p>Cargando esculturas...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  async function handleRemove(id, name) {
    if (window.confirm(`¿Estás seguro de eliminar "${name}" de Neon?`)) {
      await removeSculpture(id);
    }
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Eliminar Esculturas (Neon DB)</h2>

      {sculptures.length === 0 ? (
        <p style={{ textAlign: "center" }}>No hay esculturas para eliminar.</p>
      ) : (
        <table style={{ margin: "0 auto", borderCollapse: "collapse", width: "80%" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>
              <th style={{ padding: "8px" }}>ID</th>
              <th style={{ padding: "8px" }}>Nombre</th>
              <th style={{ padding: "8px" }}>Artista</th>
              <th style={{ padding: "8px" }}>Año</th>
              <th style={{ padding: "8px" }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {sculptures.map((sculpt) => (
              <tr key={sculpt.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px" }}>{sculpt.id}</td>
                <td style={{ padding: "8px" }}>{sculpt.name}</td>
                <td style={{ padding: "8px" }}>{sculpt.artist}</td>
                <td style={{ padding: "8px" }}>{sculpt.year}</td>
                <td style={{ padding: "8px" }}>
                  <button onClick={() => handleRemove(sculpt.id, sculpt.name)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
