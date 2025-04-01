import './Addworkers.css'


export default function Addworkers()
{
    return(
        <div className="container">
        <h2>Worker Management System</h2>

        
        <form>
            <input type="text" placeholder="Worker Name"  required />
            <input type="text" placeholder="Worker Role"   required />
            <button type="submit">Add Worker</button>
        </form>

        
       
    </div>
    );
}