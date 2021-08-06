import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { Loader } from "../../Loader/Loader";
import { useParams } from "react-router-dom";
import { database } from "../Firebase/firebase";

export const ItemListContainer = () => {

  const [displayItems, setDisplayItems] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    setDisplayItems([ ]);


    const getItems = () => {
      let productos;
      if (!catId) {
        productos = database.collection("productos");
      } else {
        productos = database.collection("productos").where("category", "==", catId);
      }

      productos.get().then((query) =>
        setDisplayItems(
          query.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        )
      );
    };

    getItems();
  }, [ catId ]);

  return !displayItems.length ? (
    <Loader />
  ) : (
    <ItemList displayItems={displayItems} />
  );

};
