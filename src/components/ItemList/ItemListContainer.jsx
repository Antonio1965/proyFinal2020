import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { Loader } from "../../Loader/Loader";
import { useParams } from "react-router-dom";
import { database } from "../Firebase/firebase";


export const ItemListContainer = () => {
  ///ESTADO DE ITEMS A MOSTRAR
  const [displayItems, setDisplayItems] = useState([]);

  ///OBTENEMOS LA CATEGORIA POR PARAMS
  const { catId } = useParams();

  ///EJECUTAR PROMESA
  useEffect(() => {
    setDisplayItems([]);

    //LLAMADA A FIREBASE
    const getProductos = () => {
      let productos;
   
      if (!catId) {
        productos = database.collection("productos");
      } else {
        productos = database.collection("productos").where("catId", "==", parseInt(catId));
      }

      productos.get().then((query) =>
        setDisplayItems(
          query.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        )
      );
    };

    getProductos();
  }, [catId]);

  ///RETURN
  return !displayItems.length ? (
    <Loader />
  ) : (
    <ItemList displayItems={displayItems} />
  );
};

