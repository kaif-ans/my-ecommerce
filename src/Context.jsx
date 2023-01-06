import React from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [wishlist, setWishlist] = React.useState([]);
  const [filterItem, setFilterItem] = React.useState([]);

  React.useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(data.products.map((p) => ({ ...p, quantity: 1 })))
      );
  }, []);
  console.log(products);

  function handleCart(id) {
    const handleCartFunction = cart.some((c) => c.id === id);

    if (handleCartFunction) {
      const removeFromCart = cart.filter((p) => p.id !== id);
      setCart(removeFromCart);
    } else {
      const product = products.find((products) => products.id === id);
      setCart((prev) => [...prev, product]);
    }
  }

  function handleWishlist(id) {
    const handleWishlistFunction = wishlist.some((c) => c.id === id);

    if (handleWishlistFunction) {
      const removeFromWishlist = wishlist.filter((p) => p.id !== id);
      setWishlist(removeFromWishlist);
    } else {
      const product = products.find((products) => products.id === id);
      setWishlist((prev) => [...prev, product]);
    }
  }
  function deleteWishlist(id) {
    // FOR WISHLIST ONLY
    const removeFromWishlist = wishlist.filter((p) => p.id !== id);
    setWishlist(removeFromWishlist);
  }

  function handleSearch(e) {
    const searchValue = e.target.value;
    const searchInput = products.filter((p) =>
      p.brand.toUpperCase().includes(searchValue.toUpperCase())
    );
    setFilterItem(searchInput);
  }

  function addQuantity(id) {
    setCart((prevValue) =>
      prevValue.map((p) =>
        p.id === id
          ? { ...p, quantity: p.quantity + (p.quantity < 10 ? 1 : 0) }
          : p
      )
    );
  }

  function subtractQuantity(id) {
    setCart((prevValue) =>
      prevValue.map((p) =>
        p.id === id
          ? { ...p, quantity: p.quantity - (p.quantity > 1 ? 1 : 0) }
          : p
      )
    );
  }

  return (
    <Context.Provider
      value={{
        products,
        cart,
        wishlist,
        handleCart,
        handleWishlist,
        deleteWishlist,
        handleSearch,
        filterItem,
        addQuantity,
        subtractQuantity,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
