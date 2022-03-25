const express = require("express");
const customerModel = require("./models");
const app = express();
const cors = require('cors');
const fs = require('fs');


app.post("/api/customers", cors(), async (request, response) => {
     
     console.log("request.body "+JSON.stringify(request.header));
     console.log("request.data "+JSON.stringify(request.data));
    const _customer = new customerModel(request.body);  
    try {
      await _customer.save();
      response.send(_customer);
    } catch (error) {
      console.log("error.body "+error);
      response.status(500).send(error);
    }
});


app.get("/api/customers",  cors(),async (request, response) => {
    const _customer = await customerModel.find({}).sort({ customerId : "asc"});
    try {
           response.send(_customer);
    } catch (error) {
      response.status(500).send(error);
    }
});


  module.exports = app;