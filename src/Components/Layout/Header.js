import React, { Fragment } from "react";
import mealsImg from "../../Assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onChange} />
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImg} alt="meal pic"></img>
        </div>
    </Fragment>
}

export default Header;