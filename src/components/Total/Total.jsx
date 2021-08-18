import React, { useContext } from "react";
import { makeStyles} from "@material-ui/core";
import accounting from "accounting";
import { Context } from "../../Context";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: "2rem",
  },
}));

export const Total = () => {
  const classes = useStyles();
  const{ totalCart, quantityCart} = useContext(Context);
  

  return (
    <div className={classes.root}>
      <h5>Total items:{quantityCart()}</h5>
      <h5> TOTAL COMPRAS :  {accounting.formatMoney((totalCart()), )}</h5>
    </div>
  );
};