import React from "react";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = props => {

    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        console.log("The amount here is : ", amount, props.price);
        cartCtx[0].addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return <li className={classes.displayFlex}>
        <div className={classes.meal}>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} />
        </div>
    </li>
}

export default MealItem;