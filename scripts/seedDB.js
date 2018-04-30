const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the Users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/smart_hedge",
  {
    // useMongoClient: true
  }
);

const userSeed = 
  {
  context: "http://schema.org",
  type: "Person",
  publicKey: "0x04f2a1f31112f00a7dc158316463474dd795df656ca06391be579a8e5e98ed82c778d36d97386d3782df08f330cec1d20d08f2584ab29849563830c500c20b498d",
  publicEncKey: "4quoIu75qU0edEIlIwA5uDwmxJ8HkLxD7kR9Qjl13Ts=",
  name: "Ryan Drachenberg ",
  avatar: {
    uri: "https://ipfs.infura.io/ipfs/QmQazJNNMaD5f5Y3cxMRz5cQLmVCuSq8M7GtnVFJ1b7p5d"
  },
  phone: "+14073411162",
  country: "Maitland, FL ",
  pushToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpc3MiOiIyb3l6MlJ4NnBOSnlaUUZTWTF4RVJuNHNYYkp5dDdQeWR3diIsImlhdCI6MTUyNDYxNjQ2MCwiYXVkIjoiMHgyYmVkZTdhZTY5YTlhYTc2ODRjMzczYWUzM2ZiMjExNjJlNTY1ZTUyIiwidHlwZSI6Im5vdGlmaWNhdGlvbnMiLCJ2YWx1ZSI6ImFybjphd3M6c25zOnVzLXdlc3QtMjoxMTMxOTYyMTY1NTg6ZW5kcG9pbnQvQVBOUy91UG9ydC84NWNiYjA3MC02ZDA5LTMwOTUtODcxNi1kOWYwOWE3MzAxMzkiLCJleHAiOjE1MjU5MTI0NjB9.m41Oh_1w43nfbJCmReznWqe9uCTZW92YTA4gNGetq--YG2oIBEbEJeubaLCVapnWnA8XZFssaTybP7F3EEPgaw",
  address: "2oyz2Rx6pNJyZQFSY1xERn4sXbJyt7Pydwv",
  networkAddress: "2oyz2Rx6pNJyZQFSY1xERn4sXbJyt7Pydwv",
  rinkebyID: "0xe786ace0fc66ef3b2793b217b70108c04eba9bce",
  date: new Date(Date.now())
  };

db.User
  .remove({})
  .then(() => db.User.collection.insertOne(userSeed))
  .then(data => {
    console.log("seed" + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
