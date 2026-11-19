// src/pages/SculptureFormPage.jsx
import { useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { sculptureList } from "../data";



export default function SculptureFormPage() {
  const { id } = useParams(); // defined → edit mode
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  //const [sculptures, setSculptures] = useState(sculptureList)
  
  const [year, setYear] = useState("")
    //if (year === "") 
  
  const sculptFilter = sculptureList.filter(sculpture =>
    sculpture.year === year
  );
  
  //const { /* TODO: get sculptures + handlers from context */ } = useOutletContext();

  // TODO: initialise form state from existing sculpture (edit) or blanks (create)
  // Fields: name, artist, year, location, url, alt, description

  function handleChange(e) {
    //setYear([e.target.name] = e.target.value);
    setYear(e.target.value);
  }

  return (
    <div> 
      
      <h2>SculptureFilterPage
      </h2>  
      
      
       <label>
        Name:
        <input name="year"
          value={year}  
          onChange={handleChange}       
        />
      </label>
    

    <ul  style={{listStyleType: 'none'}}>
      {year}
      {year===""?  
        sculptureList.map((sculptur) => (<li key={sculptur.id}>{sculptur.name + " - " + sculptur.artist + " - " +sculptur.year}</li>)):
        sculptureList.filter(sculptur => sculptur.year==year).map((sculptur) => (<li key={sculptur.id}>{sculptur.name + " - " + sculptur.artist + " - " +sculptur.year}</li>))}
    </ul>
    </div>
  );
}