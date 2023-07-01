import { useState } from "react"
import { useNavigate } from "react-router-dom"

 
 export default function Header({setUpdatedPlace}){
    const handleChange = (e)=>{
        setPlace(e.target.value)
    }    
    const handleClick = ()=> {
        setUpdatedPlace(place) 
    }

    const navigate = useNavigate()

    const [place, setPlace] = useState(' ')
    return<div className='container'>
            <section className='search-container'>
                <h2 className='title' onClick={()=> navigate('/')}>SnapShot</h2>
                <input type='text' onChange={handleChange}
                value={place}
                /> 
                  <button onClick={handleClick}>Search</button>
            </section>
            <section className='search-button'>
                <button onClick={()=> navigate('/mountains')}>Mountains</button>
                <button onClick={()=> navigate('/beaches')}>Beaches</button>
                <button onClick={()=> navigate('/birds')}>Birds</button>
                <button onClick={()=> navigate('/foods')}>Foods</button>
            </section>
            </div>
 }