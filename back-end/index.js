const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const customersRouter = require("./app/customers");
const opportunitiesRouter = require("./app/opportunities");

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/**
 * Router start
 */
// Customer Router
app.use("/customers", customersRouter);
// OpportunityRouter
app.use("/opportunities", opportunitiesRouter);

/**
 * Router end
 */

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
