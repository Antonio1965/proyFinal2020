import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import{ Loader } from "../../Loader/Loader";
import {ItemDetail } from "./ItemDetail";
import { database } from "../Firebase/firebase";

export const ItemDetailContainer = () => {

  const [itemToDisplay, setItemToDisplay] = useState();

  const { id: idParams } = useParams();

  const getSelectedItem = () => {
    const productos = database.collection("productos").doc(idParams);

    productos
      .get()
      .then((query) => setItemToDisplay({ ...query.data(), id: query.id }));
  };

  useEffect(
    () => {
      setItemToDisplay(); 
      getSelectedItem()
    },

    [idParams]
  );

  return !itemToDisplay ? (<Loader/> ) : (<ItemDetail itemToDisplay={itemToDisplay} />);

};

