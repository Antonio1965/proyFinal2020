import React from "react";
import firebase from "firebase/app";
import { database } from "../Firebase/firebase";
import { StyledForm } from "./FormStyles";



export const Form = ({ cart, clearCart}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name: event.target[0].value,
      surname: event.target[1].value,
      phone: event.target[2].value,
      email: event.target[3].value,
    };

    const newOrder = {
      buyer: userData,
      items: cart,
      date: new Date().toString(),
       
    };

    const orders = database.collection("orders");
    
    let orderId;

    orders
      .add(newOrder)
      .then((response) => {
        orderId = response.id;
      })
      .catch((error) => {
        alert("ERROR: " + error);
      });

  
    const itemsToCheck = database.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cart.map((item) => item.id)
    );

    itemsToCheck.get().then((query) => {
     
      const batch = database.batch();
      
      const outOfStockItems = []; 


      query.docs.forEach((doc, index) => {
        if (doc.data().stock >= newOrder.items[index].quantity) {
          batch.update(doc.ref, {
            stock: doc.data().stock - newOrder.items[index].quantity,
          });
        } else {
          outOfStockItems.push({ ...doc.data(), id: doc.id });
        }
      });

      if (outOfStockItems.length === 0) {
        batch.commit().then(() => {
          alert("ORDEN GENERADA CON EXITO! \n ID: " + orderId);
             clearCart();
        });
      } else {
        alert("ERROR: Hay items que ya no tienen stock suficiente.");
      }
    });
  };

  return (
    
     <StyledForm onSubmit={handleSubmit}>
      <h2>Finalizar Compra</h2>
      <input placeholder="Nombre" type="text" />
      <input placeholder="Apellido" type="text" />
      <input placeholder="Teléfono" type="tel" />
      <input placeholder="E-mail" type="email" />
      <button type="submit">COMPRAR</button>
     </StyledForm>
    
  );
};

