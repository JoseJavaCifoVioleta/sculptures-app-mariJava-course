// src/pages/SculptureListPage.jsx
import { Link, useOutletContext } from "react-router-dom";
import { sculptureList } from "../data";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SculptureListPage() {
  //const { sculptures } = useOutletContext();
  // TODO: map sculptures → card rows
  //   <img src={s.url} alt={s.alt} width="80" />
  //   name, artist, year
  //   <Link to={`/sculptures/${s.id}`}>View</Link>
  //   <Link to={`/sculptures/${s.id}/edit`}>Edit</Link>
  //   <button>Delete</button>  (calls deleteSculpture from context)

  const [index, setIndex] = useState(0); 
  

  function handlerOnClickPrev(){
    
    setIndex(  
         index - 1
    )
    
  }

  function handlerOnClickNext(){
    setIndex(
      index + 1
    )
  }
  const navigate = useNavigate();

  function handlerOnClickImage(id){
   
    navigate(`/sculptures/${id-1}`);
    
    //confirm("id "+ id);
  }

   return(
    <>
    <br />
    <br />
    <br />
    <h2>Sculptures Gallery</h2>  
    <div>
      <ul style={{listStyleType: 'none',display: 'flex', gap: '20px',justifyContent: 'center'}}>
        {sculptureList.map((sculptur) => (
          <li key={sculptur.id}>
            <img src={sculptur.url} alt={sculptur.alt} width={40} style={{display: 'inlineBlock'}} onClick={()=>handlerOnClickImage(sculptur.id)}  />
          </li>))}
      </ul>
    </div>
    <button id="previous" onClick={handlerOnClickPrev} disabled={index==0} >Previous</button>
    <button id="next" onClick={handlerOnClickNext}  disabled={index==sculptureList.length -1}>Next</button>
    <p>({index+1} of {sculptureList.length})</p>
    <p>{sculptureList[index].name}</p>
    <p>{sculptureList[index].year}</p>
    <img src= {sculptureList[index].url} width="80" alt={sculptureList[index].alt}/>
    <p>{sculptureList[index].description}</p>
    </>


   )
}