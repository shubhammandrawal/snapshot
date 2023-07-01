import axios from "axios";
import Header from "../Search/Header";
import { useEffect, useState } from "react";

export default function Birds(){
    const [birds, setBirds] = useState([])
    const apiKey = '0981c3f78675ab334009367d4fe1f989'
    useEffect(() => {
        axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=birds&per_page=55&format=json&nojsoncallback=1`)
            .then(res => {
                debugger
                // console.log(res)
                setBirds(res.data.photos.photo)
            })

    }, [birds])

    return<>
    <Header />
    <h2 className="title">Bird Pictures</h2>
    <section className="image-container">
            {birds.map((item, key) => {
                return <section>
                    <img src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt="" />
                </section>
                
            })}
        </section>
    </>
}