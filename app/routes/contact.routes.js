const express=require("express");

const contacts = require("../controllers/contact.comtroller");


module.exports = app =>{
    const router = express.Router();

    router.post("/", contacts.create);

    router.get("/",contacts.finAll);

    router.get("/favorite",contacts.findAllFavorite);

    router.put("/:id",contacts.update);

    router.delete("/:id",contacts.delete);

    router.delete("/",contacts.deleteAll);

    router.get("/:id",contacts.findOne);

    app.use("/api/contacts",router);
};