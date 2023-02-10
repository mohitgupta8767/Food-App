import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/cart-context"
import CartItem from "./CartItem";

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx[0].totalAmount.toFixed(2)}`
    const hasItems = cartCtx[0].items.length > 0;

    const cartRemoveHandler = id => {
        cartCtx[0].removeItem(id);
    }

    const cartAddHandler = item => {
        cartCtx[0].addItem({ ...item, amount: 1 })
    }

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx[0].items.map((item) => (

            <CartItem key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartRemoveHandler.bind(null, item.id)}
                onAdd={cartAddHandler.bind(null, item)} />
        )
        )}
    </ul>


    return <Modal onClick={props.onChange}>
        {cartItems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onChange}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;