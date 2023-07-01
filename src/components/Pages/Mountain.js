import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Search/Header";
import './style.css';

export default function Mountain(){

    const [mountain, setMountain] = useState([])
    const apiKey = '0981c3f78675ab334009367d4fe1f989'
    useEffect(() => {
        axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=mountains&per_page=55&format=json&nojsoncallback=1`)
            .then(res => {
                setMountain(res.data.photos.photo)
            })

    }, [mountain])

    return<>
    <Header />
    <h2 className="title">Mountain Pictures</h2>
    <section className="image-container">
            {mountain.map((item, key) => {
                return <section>
                    <img src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt="" />
                </section>
                
            })}
        </section>
    </>
}