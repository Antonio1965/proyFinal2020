import { makeStyles, Button } from "@material-ui/core";
import accounting from "accounting";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { DataProvider } from "../../Context";


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

export const Total = ({children}) => {
  const classes = useStyles();
  const [cart, setCart] = useState([]);
  

  return (
    <div className={classes.root}>
      <h5>Total items:{3}</h5>
      <h5> TOTAL COMPRAS :  {accounting.formatMoney((45000), )}</h5>
      <Link to="/checkout">
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          COMPRAR
        </Button>
      </Link>
    </div>
  );
};