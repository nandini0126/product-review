import "./ProductCard.css"
import { Link } from "react-router-dom"

function ProductCard({ id, title, name, rating, Img, price, about }) {
    return (
        <Link className="card" to={`/products/${id}`}>
            <img src={Img.mainImg} className="prod-img" />
            <h2 className="title">{title}</h2>
            <p>{name.substring(0,100)}...</p>
            <div className="desc">
                <span className="price">Price: {price}</span>
                <div className="rating">
                    <img src={rating.ratingImg} className="rating-img" />
                    <span className="rating-no">{rating.ratingNo}</span>
                </div>
            </div>
            <div>
                <button className="btn">ADD TO CART</button>
                <button className="btn">BUY NOW</button>
            </div>
        </Link>

    )
}

export default ProductCard