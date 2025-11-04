// import axios from "axios";
// import { createContext, use, useEffect, useState } from "react";

// export const StoreContext = createContext(null)

// const StoreContextProvider = (props) => {

//     const [cartItems, setCartItems] = useState({});
//    // const url = "http://localhost:4000";
//    const url = process.env.REACT_APP_BASE_URL;

//     const [token, setToken] = useState("");
//     const [food_list, setFoodList] = useState([])

//     const addToCart = async (itemId) => {
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
//         }
//         else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
//         }
//         if (token) {
//             await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
//         }
//     }

//     const removeFromCart = async (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//         if (token) {
//             await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
//         }
//     }

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = food_list.find((product) => product._id === item);
//                 totalAmount += itemInfo.price * cartItems[item]
//             }

//         }
//         return totalAmount;
//     }

//     const fetchFoodList = async () => {
//         const response = await axios.get(url + "/api/food/list");
//         setFoodList(response.data.data);
//     }

//     const loadCartData = async (token) => {
//         const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
//         setCartItems(response.data.cartData);
//     }

//     useEffect(() => {

//         async function loadData() {
//             await fetchFoodList();
//             if (localStorage.getItem("token")) {
//                 setToken(localStorage.getItem("token"));
//                 await loadCartData(localStorage.getItem("token"));
//             }
//         }
//         loadData();
//     }, [])

//     const contextValue = {
//         food_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         url,
//         token,
//         setToken
//     }

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  // ✅ Use environment variable for backend URL
  // Make sure this is set in Render: REACT_APP_BASE_URL = https://shopwebsite-backend.onrender.com
  const url = process.env.REACT_APP_BASE_URL;

  // 🛒 Add item to cart
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      try {
        await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } });
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  // 🗑️ Remove item from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      try {
        await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { token } });
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    }
  };

  // 💰 Calculate total price
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  // 🍔 Fetch food list from backend
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data && response.data.data) {
        setFoodList(response.data.data);
      } else {
        console.error("Unexpected API response:", response.data);
        setFoodList([]);
      }
    } catch (error) {
      console.error("Error fetching food list:", error);
      setFoodList([]);
    }
  };

  // 🛍️ Load user cart data
  const loadCartData = async (token) => {
    try {
      const response = await axios.post(`${url}/api/cart/get`, {}, { headers: { token } });
      setCartItems(response.data.cartData || {});
    } catch (error) {
      console.error("Error loading cart data:", error);
      setCartItems({});
    }
  };

  // 🚀 On first load: fetch data and load cart if token exists
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        await loadCartData(savedToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
