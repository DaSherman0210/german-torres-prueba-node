import express from "express";
import productoRouter from "./routes/productos.routes.js";
import tiendas_productosRouter from "./routes/tiendas_productos.routes.js";
import carritosRouter from "./routes/carritos.routes.js";
const app = express();

app.set("port", 5001);

app.use(express.json());

app.use("/productos", productoRouter )
app.use("/tienda_productos", tiendas_productosRouter )
app.use("/carritos", carritosRouter );

export default app; 