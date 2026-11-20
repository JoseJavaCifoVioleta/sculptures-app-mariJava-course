// src/pages/SculptureListPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSculptures } from "../SculpturesContext";

export default function SculptureListPage() {
  const { sculptures, loading, error } = useSculptures();
  const [index, setIndex] = useState(0);
  const [likes, setLikes] = useState({});
  const [color, setColor] = useState("white");
  const [loop, setLoop] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  if (loading) return <p>Cargando esculturas desde Neon...</p>;
  if (error) return <p style={{ color: "red" }}>Error al cargar: {error}</p>;
  if (!sculptures || sculptures.length === 0) return <p>No hay esculturas disponibles.</p>;

  // Ensure index is within range if items change
  const currentIndex = index >= sculptures.length ? 0 : index;
  const currentSculpture = sculptures[currentIndex];

  function handlerOnClickPrev() {
    if (loop) {
      if (currentIndex === 0) {
        setIndex(sculptures.length - 1);
      } else {
        setIndex(index - 1);
      }
    } else {
      setIndex(index - 1);
    }
  }

  function handlerOnClickNext() {
    if (loop) {
      if (currentIndex === sculptures.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    } else {
      setIndex(index + 1);
    }
  }

  function handlerOnClickImage(id) {
    navigate(`/sculptures/${id}`);
  }

  function handlerOnClickLike() {
    const currentId = currentSculpture.id;
    setLikes({
      ...likes,
      [currentId]: !likes[currentId]
    });
  }

  function handlerOnClickColor() {
    if (color === "white") {
      setColor("lightblue");
    } else if (color === "lightblue") {
      setColor("lightgreen");
    } else if (color === "lightgreen") {
      setColor("lightpink");
    } else {
      setColor("white");
    }
  }

  function handlerOnChangeLoop(e) {
    setLoop(e.target.checked);
  }

  function handlerOnClickShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
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

      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={loop}
            onChange={handlerOnChangeLoop}
          />
          {" "}Activar Loop (dar la vuelta)
        </label>
      </div>

      <button
        id="previous"
        onClick={handlerOnClickPrev}
        disabled={!loop && currentIndex === 0}
      >
        Previous
      </button>
      <button
        id="next"
        onClick={handlerOnClickNext}
        disabled={!loop && currentIndex === sculptures.length - 1}
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
      
      <div>
        <p>
          {showMore
            ? currentSculpture.description
            : currentSculpture.description.slice(0, 100) + "..."}
        </p>
        <button onClick={handlerOnClickShowMore}>
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>

      <br />
      <div>
        <button onClick={handlerOnClickLike}>
          {likes[currentSculpture.id] ? "❤️ Liked" : "🤍 Like"}
        </button>
        {likes[currentSculpture.id] && <p>Te gusta esta escultura!</p>}
      </div>

      <br />
      <div>
        <button onClick={handlerOnClickColor}>
          Cambiar color de fondo
        </button>
      </div>
    </div>
  );
}
