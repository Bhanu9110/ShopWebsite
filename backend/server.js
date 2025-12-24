// // // import express from "express"
// // // import cors from "cors"
// // // import { connectDB } from "./config/db.js"
// // // import foodRouter from "./routes/foodRoute.js"
// // // import userRouter from "./routes/userRoute.js"
// // // import 'dotenv/config.js'
// // // import cartRouter from "./routes/cartRoute.js"
// // // import orderRouter from "./routes/orderRoute.js"

// // // //app config
// // // const app = express()
// // // const port = 4000

// // // // middleware
// // // app.use(express.json());
// // // app.use(cors());

// // // //db connection
// // // connectDB();

// // // // api endpoints
// // // app.use("/api/food",foodRouter)
// // // app.use("/images",express.static('uploads'))
// // // app.use("/api/user",userRouter)
// // // app.use("/api/cart",cartRouter);
// // // app.use("/api/order",orderRouter);


// // // app.get("/",(req,res)=>{
// // //     res.send("API Working")
// // // })

// // // app.listen(port,()=>{
// // //     console.log(`Server Started on http://localhost:${port}`)
// // // })

// // // // mongodb+srv://mahalakshmisteeltraders:23062005@cluster0.e2rg8uk.mongodb.net/?
// // import express from "express";
// // import cors from "cors";
// // import { connectDB } from "./config/db.js";
// // import foodRouter from "./routes/foodRoute.js";
// // import userRouter from "./routes/userRoute.js";
// // import "dotenv/config.js";
// // import cartRouter from "./routes/cartRoute.js";
// // import orderRouter from "./routes/orderRoute.js";

// // // app config
// // const app = express();
// // const port = process.env.PORT || 4000;

// // // middleware
// // app.use(express.json());
// // app.use(cors({
// //   origin: ['https://shopwebsite-frontend.onrender.com', 'https://shopwebsite-admin.onrender.com'],
// //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //   credentials: true
// // }));


// // // db connection
// // connectDB();

// // // api endpoints
// // app.use("/api/food", foodRouter);
// // app.use("/images", express.static("uploads"));
// // app.use("/api/user", userRouter);
// // app.use("/api/cart", cartRouter);
// // app.use("/api/order", orderRouter);

// // app.get("/", (req, res) => {
// //   res.send("API Working");
// // });

// // app.listen(port, () => {
// //   console.log(`✅ Server started on port ${port}`);
// // });
// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import "dotenv/config.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// // App config
// const app = express();
// const port = process.env.PORT || 4000;

// // Middleware
// app.use(express.json());
// app.use(cors({
//   origin: [
//     "https://shopwebsite-frontend.onrender.com",
//     "https://shopwebsite-admin.onrender.com",
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,
// }));

// // DB connection
// connectDB();

// // API endpoints
// app.use("/api/food", foodRouter);
// app.use("/images", express.static("uploads"));
// app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// app.get("/", (req, res) => {
//   res.send("✅ API Working");
// });

// app.listen(port, () => {
//   console.log(`✅ Server started on port ${port}`);
// });
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config.js";
//console.log("Stripe Key Loaded:", process.env.STRIPE_SECRET_KEY);


// --- App Config ---
const app = express();
const port = process.env.PORT || 4000;

// --- Middleware ---
app.use(express.json());

// ✅ Allow both frontend and admin deployed on Render
app.use(
  cors({
    origin: [
      "https://shopwebsite-frontend.onrender.com",
      "https://shopwebsite-admin.onrender.com",
      "http://localhost:5173", // local dev (optional)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// --- Database Connection ---
connectDB();

// --- API Routes ---
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// --- Default Route (for health check) ---
app.get("/", (req, res) => {
  res.send("API Working ✅");
});

// --- Start Server ---
app.listen(port, () => {
  console.log(`✅ Server started successfully on port ${port}`);
});
