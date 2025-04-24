import Card from "../card/Card";
import workers from '../../Workers.json';

export default function Workspace()
{
    

    return(
       <div>
     {  
       workers.map((worker, index) => (
       <Card name={worker.name} Location={worker.location} category={worker.category}/>
       ))
     }
   </div>
    
    );
}