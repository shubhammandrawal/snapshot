import { useState } from 'react';
import './search.css';
import Images from '../Image/Image'; 

export default function Search(){
    const handleChange = (e)=>{setPlace(e.target.value)}    
    const handleClick = ()=> {setUpdatedPlace(place) }

    const [place, setPlace] = useState(' ')
    const[updatedPlace, setUpdatedPlace]=useState(place)
    return<div className='container'>
            <section className='search-container'>
                <h2 className='title'>SnapShot</h2>
                <input type='text' onChange={handleChange}
                value={place}
                /> 
                  <button onClick={handleClick}>Search</button>
            </section>
            <Images updatedPlace={updatedPlace} />
        </div>
}