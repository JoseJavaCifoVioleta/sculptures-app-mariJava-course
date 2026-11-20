import { useParams, useNavigate } from "react-router-dom";
import { useSculptures } from "../SculpturesContext";

export default function SculptureDetailPage() {
  const { id } = useParams();
  const { sculptures, loading, error } = useSculptures();
  const navigate = useNavigate();

  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  // Find sculpture by id (matching numeric or string id)
  const sculpture = sculptures.find((s) => String(s.id) === String(id));

  if (!sculpture) {
    return (
      <div>
        <p>Escultura no encontrada.</p>
        <button type="button" onClick={() => navigate("/")}>
          Back to List
        </button>
      </div>
    );
  }

  return (
    <>
      <br />
      <div>
        <h2>Sculpture's Detail</h2>
        <img src={sculpture.url} width="300" alt={sculpture.alt} />
        <h3>Name: {sculpture.name}</h3>
        <h3>Artist: {sculpture.artist}</h3>
        <h3>Year: {sculpture.year}</h3>
        {sculpture.location && <h3>Location: {sculpture.location}</h3>}
        <h4>Description: {sculpture.description}</h4>

        <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
          <button type="button" onClick={() => navigate(`/sculptures/${id}/edit`)}>
            Edit
          </button>
          <button type="button" onClick={() => navigate("/")}>
            Back to List
          </button>
        </div>
      </div>
    </>
  );
}
