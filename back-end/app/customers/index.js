const express = require("express");
const db = require("better-sqlite3")("data/demo-db.db");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const router = express.Router();

router
  .get("/", (req, res) => {
    const results = db.prepare(`SELECT * FROM customers`).all();
    res.json(results);
  })
  .get("/:id", (req, res) => {
    const results = db
      .prepare(`SELECT * FROM customers WHERE id=?`)
      .all(req.params.id);
    res.json(results);
  })
  .post("/", (req, res) => {
    try {
      db.prepare(
        `INSERT INTO customers (id,name,email,phone,status,create_time) VALUES (?,?,?,?,?,?)`
      ).run(
        uuidv4(),
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.status || "Lead",
        moment().format()
      );
      res.status(201).json({
        message: "Customer created",
      });
    } catch (error) {
      res.status(500).json({
        message: "Customer creates fail!",
      });
    }
  })
  .patch("/:id", (req, res) => {
    const results = db
      .prepare(`UPDATE customers SET status=? WHERE id=?`)
      .run(req.body.status, req.params.id);
    res.json(results);
  });

module.exports = router;
