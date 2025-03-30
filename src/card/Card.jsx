import './Card.css'


export default function Card({name,category,Location})
{
    return ( 
       <>
            <div className='Card'>
            <img alt="not loaded" className='img' src='./w.png'/>
            <h1 className='name1' > {name} </h1>
            <h3 className='Category'>{category}</h3>
            <h4 className='locat'>{Location}</h4>
            <button className='but123' >Click Here . . .</button>
            </div>
       </>

    );
}