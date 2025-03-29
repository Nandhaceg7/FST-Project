import './Card.css'


export default function Card()
{
    return ( 
       <>
           <div className='Card'>
            <img alt="not loaded" className='img' src='./w.png'/>
            <h1 className='name'>Abinov</h1>
            <h3 className='Category'>Electrician</h3>
            <h4 className='locat'>location</h4>
            <button className='but123'>Click Here . . .</button>
           </div>
       </>

    );
}