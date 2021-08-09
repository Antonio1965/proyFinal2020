import { makeStyles, Button } from "@material-ui/core";
import accounting from "accounting";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/checkout">
        {/* <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          >
          COMPRAR
        </Button> */}
      </Link>
    </div>
  );
};