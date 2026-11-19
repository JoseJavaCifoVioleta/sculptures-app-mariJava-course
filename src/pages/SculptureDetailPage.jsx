import { useParams } from "react-router-dom";
import { sculptureList } from "../data";
import { useNavigate } from 'react-router-dom';

export default function SculptureDetailPage() {
    const { id } = useParams();
// TODO: const { id } = useParams(); find sculpture by id
// TODO: show all fields; render location only if it exists
// TODO: "Back to list" link

const navigate = useNavigate();
const handleClick = () => {
    navigate('/');
};


return(
    <>
    <br />
    <br />
    <br />
    <div>
      <img src= {sculptureList[id].url} width="300" alt={sculptureList[0].alt}/>
      <h2> Name: {sculptureList[id].name}</h2>
      <h3> Artist: {sculptureList[id].artist}</h3>
      <h3> Year: {sculptureList[id].year}</h3>
      <h4> Description: {sculptureList[id].description}</h4>

      <button type="button" onClick={handleClick} > 
        Back to List
      </button>
    </div>  
    </>


   )
}
