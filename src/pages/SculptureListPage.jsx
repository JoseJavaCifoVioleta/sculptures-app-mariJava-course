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
  const [animated, setAnimated] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [stars, setStars] = useState([]);
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

  function handlerOnChangeAnimated(e) {
    setAnimated(e.target.checked);
  }

  function handlerOnClickSharona(e) {
    setStarCount(starCount + 1);

    // Creamos 6 estrellitas que saldrán disparadas
    const newStars = [
      { id: Date.now() + 1, tx: "-50px", ty: "-70px" },
      { id: Date.now() + 2, tx: "-20px", ty: "-90px" },
      { id: Date.now() + 3, tx: "15px", ty: "-85px" },
      { id: Date.now() + 4, tx: "45px", ty: "-70px" },
      { id: Date.now() + 5, tx: "0px", ty: "-110px" },
      { id: Date.now() + 6, tx: "-35px", ty: "-50px" },
    ];

    setStars(newStars);

    // Quitamos las estrellitas después de 1 segundo
    setTimeout(() => {
      setStars([]);
    }, 1200);
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

      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={animated}
            onChange={handlerOnChangeAnimated}
          />
          {" "}Activar animación en la imagen
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

      <div>
        <img
          src={currentSculpture.url}
          width="160"
          alt={currentSculpture.alt}
          style={{
            transition: "all 0.5s ease",
            transform: animated ? "scale(1.2)" : "scale(1)",
            opacity: animated ? 0.9 : 1,
            borderRadius: "6px",
          }}
        />
      </div>
      
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
      <div style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "center" }}>
        <button onClick={handlerOnClickLike}>
          {likes[currentSculpture.id] ? "❤️ Liked" : "🤍 Like"}
        </button>

        {/* Botón especial Mi-Sharona con animación de estrellitas */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <button
            onClick={handlerOnClickSharona}
            style={{
              backgroundColor: "#ffeb3b",
              color: "#333",
              border: "2px solid #fbc02d",
              borderRadius: "20px",
              padding: "6px 14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ⭐ Mi-Sharona {starCount > 0 && `(${starCount})`}
          </button>

          {/* Renderizado de las estrellitas flotantes */}
          {stars.map((star) => (
            <span
              key={star.id}
              className="star-particle"
              style={{
                "--tx": star.tx,
                "--ty": star.ty,
                top: "0px",
                left: "40%",
              }}
            >
              ✨⭐
            </span>
          ))}
        </div>
      </div>

      {likes[currentSculpture.id] && <p>Te gusta esta escultura!</p>}

      <br />
      <div>
        <button onClick={handlerOnClickColor}>
          Cambiar color de fondo
        </button>
      </div>
    </div>
  );
}
