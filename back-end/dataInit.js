/**
 * Split file for create tables and init demo data
 * Please run: npm data
 */
const db = require("better-sqlite3")("data/demo-db.db");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

db.prepare(
  `CREATE TABLE IF NOT EXISTS customers (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  status TEXT NOT NULL,
  create_time TEXT NOT NULL)`
).run();
db.prepare(
  `INSERT INTO customers (id,name,email,phone,status,create_time) VALUES (?,?,?,?,?,?)`
).run(uuidv4(),"Rick Vasquez","rick.vasquez@example.com","(568) 719-1912","Lead",moment().format());
console.log('2', 2)
db.prepare(
  `INSERT INTO customers (id,name,email,phone,status,create_time) VALUES (?,?,?,?,?,?)`
).run(uuidv4(),"Tristan Brooks","tristan.brooks@example.com","(732) 308-9555","Non-Active",moment().format());
db.prepare(
  `INSERT INTO customers (id,name,email,phone,status,create_time) VALUES (?,?,?,?,?,?)`
).run(uuidv4(),"Sue Snyder","sue.snyder@example.com","(488) 412-2007","Active",moment().format());
db.prepare(
  `INSERT INTO customers (id,name,email,phone,status,create_time) VALUES (?,?,?,?,?,?)`
).run(uuidv4(),"Tim Fuller","tim.fuller@example.com","(926) 207-4778","Lead",moment().format());
db.prepare(
  `INSERT INTO customers (id,name,email,phone,status,create_time) VALUES (?,?,?,?,?,?)`
).run(uuidv4(),"Michael Bowman","michael.bowman@example.com","(772) 203-1997","Lead",moment().format());

db.prepare(
  `CREATE TABLE IF NOT EXISTS opportunities (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  status TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  create_time TEXT NOT NULL)`
).run();
