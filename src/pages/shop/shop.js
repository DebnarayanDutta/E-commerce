import React from "react";
import { Products } from "../../products";
import { Product } from "./product";
import './product.css';

export const Shop = () => {
    return (
        <div className="shop">
        <div className="shopTitle">
            <h1>dND tECH sHOP</h1>
        </div>

        <div className="products">
         {
            Products.map((product) => (
                <Product data={product}/>
            ))
         }
        </div>
             
        </div>
    );
};