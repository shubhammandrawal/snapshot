import { useState } from 'react';
import './search.css';
import Images from '../Image/Image'; 
import Header from './Header';

export default function Search({place}){
    const[updatedPlace, setUpdatedPlace]=useState(place)
    
    return <div>
            <Header setUpdatedPlace={setUpdatedPlace} />
            <Images updatedPlace={updatedPlace} />
        </div>
}