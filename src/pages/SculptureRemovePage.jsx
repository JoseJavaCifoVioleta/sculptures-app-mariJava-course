import { useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { sculptureList } from "../data";



export default function SculptureFormPage() {
  const { id } = useParams(); // defined → edit mode
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [sculptures, setSculptures] = useState(sculptureList)
  
    
  //const sculptFilter = sculptureList.filter(sculpture =>
    //sculpture.year === year
  //);
  
  //const { /* TODO: get sculptures + handlers from context */ } = useOutletContext();

  // TODO: initialise form state from existing sculpture (edit) or blanks (create)
  // Fields: name, artist, year, location, url, alt, description

  function handleRemove(index) {
    setSculptures(sculptures.filter(sculptur => sculptur.id!==index))
  }

  return (
    <div> 
      
      <h2 style={{ textAlign: "center" }}>SculptureRemovePage
      </h2>  
      


        <table style={{ margin: "0 auto" }}> 
          <tbody>
          {sculptures.map((sculpt, index) => (

            <tr key={index}>
              <td>{sculpt.id}</td>
              <td>{sculpt.name}</td>
              <td>{sculpt.artist}</td>
              <td>{sculpt.year}</td>
              <td></td>
              

              <td><button onClick = {()=>handleRemove(sculpt.id)}>Remove </button></td>
            </tr>
          ))}
          </tbody>

        </table>
   
    </div>
  );
}