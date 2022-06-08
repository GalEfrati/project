import React from "react";

export function CartList(props){
    const remove = (item)=>{
        const index = props.profile.cart.indexOf(item);
        props.profile.cart.splice(index,1);
        props.setChange(true);
    }
    return (<>{
    props.profile.cart.length === 0?
    <div>no items</div>:
    props.profile.cart.map((item) =>
        
        <div className="product"  key={item.id}>
            <img className='product-picture' src={require('./images/product-images/'+item.picture)} alt={item.pictureText} />
            <div className="product-info">{item.description}</div>
            <div className="product-info">{item.price}</div>
            <div className="product-info">{item.number}</div>
            <button type="button" onClick={()=>remove(item)}>remove item</button>
        </div>
    )
    }</>);
}