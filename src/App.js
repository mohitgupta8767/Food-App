import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShownHandler = () => {
    return setCartIsShown(true);
  }

  const hideCartHandler = () => {
    return setCartIsShown(false);
  }

  return (
    <CartProvider >
      {cartIsShown && <Cart onChange={hideCartHandler} />}
      <Header onChange={cartShownHandler} />
      <Meals />
    </CartProvider>
  )
}

export default App;
