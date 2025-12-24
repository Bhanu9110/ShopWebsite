# 🛍️ ShopWebsite — Delivery Platform

A full-stack **Ordering Website** built with **React (Frontend)**, **Node.js + Express (Backend)**, and **Admin Panel** for managing products, orders, and users.

---

## 🚀 Features

### 👨‍💻 User Features
- Register and Login with Email
- Secure Authentication
- Browse and order construction items
- Responsive UI (mobile and desktop)
- Real-time cart management

### 🧑‍💼 Admin Panel
- Admin Login (separate from users)
- Manage menu items (add, edit, delete)
- View and manage customer orders
- Dashboard analytics

---

### 🧰 Tech Stack

- Frontend: React.js, Axios, CSS
- Backend: Node.js, Express.js, MongoDB, JWT
- Admin Panel: React.js
- Deployment: Render

---

## 🏗️ Project Overview


- I have built a React-based Construction Materials ordering app with the following structure:

- Global State & Context

- StoreContext.jsx handles cart items, authentication token, Materials list, and API interactions.

- Provides methods: addToCart, removeFromCart, getTotalCartAmount, fetchMaterialList, loadCartData.

- Pages

- Home.jsx: Displays the header, menu categories, Material items, and app download section.

- Cart.jsx: Shows items in the cart with subtotal, delivery fee, total, and promo code option.

- PlaceOrder.jsx: Collects user delivery info and triggers payment via API.

- Verify.jsx: Handles payment verification and redirects user accordingly.

- MyOrders.jsx: Displays user’s past orders fetched from the backend.

- Components

- Navbar.jsx: Dynamic navigation with login/logout and cart badge.

- LoginPopup.jsx: Login/Sign-up popup with API integration.

- Footer.jsx: (not included but presumably a simple footer).

- Other smaller components like Header, ExploreMenu, MaterialDisplay, AppDownload.

- Styling

- Each component/page has its own CSS file for scoped styling.

- Responsive design is included in Navbar.css and Cart.css.

- Routing

- Handled by react-router-dom in App.jsx.

- Routes:

/        → Home
/cart    → Cart
/order   → PlaceOrder
/verify  → Verify
/myorders → MyOrders


- Authentication

- Token is stored in localStorage and StoreContext.

- Navbar dynamically changes based on token.

- LoginPopup.jsx handles login/register.

- Cart & Orders

- Cart items are tracked in cartItems state as an object { itemId: quantity }.

- getTotalCartAmount() calculates total dynamically.

- Orders are posted to backend with PlaceOrder.jsx and verified with Verify.jsx.
