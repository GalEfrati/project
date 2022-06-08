import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function ProductPage(props) {
    const navigate = useNavigate();
    const { itemid } = useParams();
    const [displayedProduct,setDisplayedProduct] =useState();
    useEffect(() => {
        let exist = false;
        props.productData.map((item) => {
            if (item.id == itemid) {
                exist = true;
                setDisplayedProduct(item);
            }
            return exist;

        })
        if (!exist) {
            navigate('*')
        }
    }, [])

    const addItem = (item)=>{
        const activeUser = props.profile;
        if (activeUser !== null) {
            activeUser.cart.push(item);
            props.setProfile(activeUser);
            props.setChange(true);
            alert("product added to cart");
        }
        else(navigate("/login"));
    }

    return (
        <>
        {displayedProduct == null? null :
        <div id="product-page" key={displayedProduct.id}>
            <div className="product-page-info">{displayedProduct.name}</div>
            <img id='product-page-picture' src={require("../compponents/images/product-images/" + displayedProduct.picture)} alt={displayedProduct.pictureText} />
            <div className="product-page-info">{displayedProduct.description}</div>
            <div className="product-page-info">{displayedProduct.price}</div>
            <button type="button" id="add-to-cart-page" onClick={() => addItem(displayedProduct)}><span aria-label="shoping cart" role="img">🛒</span> add to cart</button>
        </div>
        }
        </>
    )
}