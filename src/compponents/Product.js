import React from "react";
import { useNavigate } from "react-router-dom";

export function Product(props) {

    const navigate = useNavigate();

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

    return (props.result.map((item) =>
        
        <div className="product" key={item.id}>
            <img className='product-picture' src={require('./images/product-images/'+item.picture)} alt={item.pictureText} />
            <div className="product-info">{item.name}</div>
            <div className="product-info">{item.price}</div>
            <button type="button"  onClick={()=>navigate(`/Product${item.id}`)}>more info</button>
            <button type="button" className="add-to-cart" onClick={()=>addItem(item)}><span aria-label="shoping cart" role="img">🛒</span> add to cart</button>
        </div>
    )
    );
}
