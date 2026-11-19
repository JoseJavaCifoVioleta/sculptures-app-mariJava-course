// src/pages/SculptureFormPage.jsx
import { useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { sculptureList } from "../data";



export default function SculptureFormPage() {
  const { id } = useParams(); // defined → edit mode
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [sculptures, setSculptures] = useState(sculptureList)
  
  const [sculpture, setSculpture] = useState({
        id:"", 
        name: "",
        artist : "",
        year : "",
        location : "",
        url :"",
        alt : "", 
        description : ""
       
    })

  //const { /* TODO: get sculptures + handlers from context */ } = useOutletContext();

  // TODO: initialise form state from existing sculpture (edit) or blanks (create)
  // Fields: name, artist, year, location, url, alt, description

  function handleSubmit(e) {
    //console.log(e.target.name);
    e.preventDefault();
    setSculptures([
      ...sculptureList, 
      { id: "banana", 
        name: e.target.name.value,
        artist : e.target.artist.value,
        year : e.target.year.value,
        location : e.target.location.value,
        url : e.target.url.value,
        alt : e.target.alt.value, 
        description : e.target.description.value
       
    }])
    // TODO: isEdit ? updateSculpture(...) : addSculpture(...)
    // TODO: navigate("/");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSculpture({
      ...sculpture,
      [name]: value, // <-- Usamos .value, NO .name
    });
  }

  return (
    <div> 

    <form onSubmit={handleSubmit}>

      
      <div>SculptureFormPage
      </div>  
      
       <label>
        Name:
        <input name="name"
          value={sculpture.name}  
          onChange={handleChange}       
        />
      </label>
       <label>
        Artist:
        <input name="artist"
          value={sculpture.artist}  
          onChange={handleChange}       
        />
      </label>

       <label>
        Name:
        <input name="year"
          value={sculpture.year}  
          onChange={handleChange}       
        />
      </label>
       <label>
        Name:
        <input name="location"
          value={sculpture.location}  
          onChange={handleChange}       
        />
      </label>
       <label>
        Name:
        <input name="url"
          value={sculpture.url}  
          onChange={handleChange}       
        />
      </label>
       <label>
        Name:
        <input name="alt"
          value={sculpture.alt}  
          onChange={handleChange}       
        />
      </label>
       <label>
        Name:
        <textarea name="description"
          value={sculpture.description}  
          onChange={handleChange}       
        />
      </label>
    
      {/* TODO: one controlled <input> per field, <textarea> for description */}
      <button type="submit">{isEdit ? "Save changes" : "Create sculpture"}</button>
    </form>
    {sculpture.name}
    <ul>
    {sculptures.map((sculptur) => (<li key={sculptur.id}>{sculptur.name + " - " + sculptur.artist}</li>))}
    </ul>
    </div>
  );
}