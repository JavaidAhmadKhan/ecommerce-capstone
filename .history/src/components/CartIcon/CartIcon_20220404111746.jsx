import "./cart-icon.styles.scss";


const CartIcon = () => {
    return (
        <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon