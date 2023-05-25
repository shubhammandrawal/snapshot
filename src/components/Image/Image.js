import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../Show/Item';


export default function Images({updatedPlace}) {
    const [image, setImage] = useState([])
    const apiKey = '0981c3f78675ab334009367d4fe1f989'
    useEffect(() => {
        axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${updatedPlace}&per_page=55&format=json&nojsoncallback=1`)
            .then(res => {
                setImage(res.data.photos.photo)
            })

    }, [updatedPlace])

    return <>
        <section className="image-container">
            {image.map((item, key) => {
                return <Item item={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} key={key}/>
            })}
        </section>
    </>

}