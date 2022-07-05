const express = require("express");
const Order = require("../models/order.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const products = await Store.listProducts;
        return res.status(200).json({ "products": products });
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const products = await Store.createOrder ;
        return res.status(200).json({ "products": products });
    } catch (err) {
        next(err);
    }
});

module.exports = router;