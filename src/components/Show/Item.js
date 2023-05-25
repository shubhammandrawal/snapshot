import './item.css'

export default function Item({item}){
    return <section className="image-container">
            <section>
                <img alt='mountains-images' src={item} />
            </section>
</section>
}