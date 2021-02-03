const Product = (props) => {
    return (
        <div className="col-4">
            <img src={props.image} alt={props.name} />
            <h4>{props.name}</h4>
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
            </div>
            <p>  ${props.price}</p>
            <button className="mycart">
                <span>Add to Cart</span>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
        </div>
    )
}
export default Product;