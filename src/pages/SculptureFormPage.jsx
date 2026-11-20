// src/pages/SculptureFormPage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSculptures } from "../SculpturesContext";

export default function SculptureFormPage() {
  const { id } = useParams(); // defined → edit mode
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { sculptures, addSculpture, updateSculpture } = useSculptures();
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [sculpture, setSculpture] = useState({
    name: "",
    artist: "",
    year: "",
    location: "",
    url: "",
    alt: "",
    description: "",
  });

  // When in edit mode, populate the form once sculptures are loaded
  useEffect(() => {
    if (isEdit && sculptures.length > 0) {
      const existing = sculptures.find((s) => String(s.id) === String(id));
      if (existing) {
        setSculpture({
          name: existing.name || "",
          artist: existing.artist || "",
          year: existing.year || "",
          location: existing.location || "",
          url: existing.url || "",
          alt: existing.alt || "",
          description: existing.description || "",
        });
      }
    }
  }, [id, isEdit, sculptures]);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    setSubmitting(true);

    const payload = {
      name: sculpture.name,
      artist: sculpture.artist,
      year: parseInt(sculpture.year, 10) || new Date().getFullYear(),
      location: sculpture.location || null,
      url: sculpture.url,
      alt: sculpture.alt || sculpture.name,
      description: sculpture.description,
    };

    let success = false;
    if (isEdit) {
      success = await updateSculpture(id, payload);
    } else {
      success = await addSculpture(payload);
    }

    setSubmitting(false);

    if (success) {
      navigate("/");
    } else {
      setErrorMessage(
        isEdit
          ? "No se pudo actualizar la escultura en Neon."
          : "No se pudo guardar la escultura en Neon."
      );
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSculpture((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <h2>{isEdit ? "Edit Sculpture" : "New Sculpture"}</h2>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          Name:
          <input
            name="name"
            required
            value={sculpture.name}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          Artist:
          <input
            name="artist"
            required
            value={sculpture.artist}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          Year:
          <input
            name="year"
            type="number"
            required
            value={sculpture.year}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          Location:
          <input
            name="location"
            value={sculpture.location}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          URL:
          <input
            name="url"
            type="url"
            required
            value={sculpture.url}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          Alternative Text:
          <input
            name="alt"
            value={sculpture.alt}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          Description:
          <textarea
            name="description"
            required
            rows={4}
            value={sculpture.description}
            onChange={handleChange}
          />
        </label>

        <button
          type="submit"
          disabled={submitting}
          style={{ alignSelf: "flex-start", marginTop: "8px" }}
        >
          {submitting
            ? "Guardando en Neon..."
            : isEdit
            ? "Save changes"
            : "Create sculpture"}
        </button>
      </form>
    </div>
  );
}
