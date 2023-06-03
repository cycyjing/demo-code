const express = require("express");
const db = require("better-sqlite3")("data/demo-db.db");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const router = express.Router();

router
  .get("/", (req, res) => {
    const customer_id = req.query.customer_id;
    if (!customer_id) {
      const opportunities = db.prepare(`SELECT * FROM opportunities`).all();
      return res.json(opportunities);
    }
    const results = db
      .prepare(`SELECT * FROM opportunities where customer_id = ?`)
      .all(customer_id);
    res.json(results);
  })
  .post("/", (req, res) => {
    try {
      const id = uuidv4();
      db.prepare(
        `INSERT INTO opportunities (id,name,status,customer_id,create_time) VALUES (?,?,?,?,?)`
      ).run(
        id,
        req.body.name,
        req.body.status || "New",
        req.body.customer_id,
        moment().format()
      );
      res.status(201).json({
        message: "Opportunity created",
        id,
      });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({
        message: "Opportunity creates fail!",
      });
    }
  })
  .patch("/:id", (req, res) => {
    const results = db
      .prepare(`UPDATE opportunities SET name=?, status=? WHERE id=?`)
      .run(req.body.name, req.body.status, req.params.id);
    res.json(results);
  });

module.exports = router;
