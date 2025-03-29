import './Search.css'
import Workspace from '../Workspace/Workspace';

export default function Search()
{
    return (
     <>
      <div className='Search'>
     <h1><div  className='hii'>Hii !</div> Hello May I Help You</h1>
    
        <input type="text" className='SearchBar'/>
     </div>
     <Workspace />
     
     </>
    );
}