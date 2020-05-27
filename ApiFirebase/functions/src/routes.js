const { Router } = require("express");
const routes = new Router();
const { ItemController } = require("./controller/ItemController");

routes.post("/api/create", ItemController.store);
routes.get("/api/read/:item_id", ItemController.show);
routes.get("/api/read", ItemController.index);
routes.put("/api/update/:item_id", ItemController.update);
routes.delete("/api/delete/:item_id", ItemController.delete);

exports.routes = routes;
