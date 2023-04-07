import React, {useContext} from "react";
import './product.css';
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {

    const {id, productName, price, productImg} = props.data;
    const{ addToCart,cartItems} = useContext(ShopContext);

    const cartItemCount = cartItems[id]
    return (
        <div className="product">
        <img className="product-img" src={productImg} />
        <div className="description">
             <p><b>{productName}</b></p>
             <p>{price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart{cartItemCount > 0 && <> ({cartItemCount}) </>}
        </button>

        </div>
    );
};