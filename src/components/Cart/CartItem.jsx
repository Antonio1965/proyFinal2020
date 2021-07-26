import React from "react";
import { StyledCartItem } from "./CartItemStyles";
// import trash from "../../../assets/trash.svg";

export const CartItem = ({ item, removeFromCart }) => {
  const handleRemoval = () => removeFromCart(item);

  return (
    <StyledCartItem>
    <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>Puntajes: {item.rating}</p>
        <span>
          {item.quantity} * ${item.price} = ${item.quantity * item.price}
        </span>
        <br/>
        <span>
         Sub-Total =  $ {item.quantity * item.price}
          </span>
        <br />
        {/* <img
          src={trash}
          onClick={handleRemoval}
          alt="Eliminar elemento"
          className="trash" 
        /> */}
      </div>
      </StyledCartItem>
    
  );
};

