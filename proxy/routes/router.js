const express = require("express");
const router = express.Router();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
require("dotenv").config();

router.post("/proxy", async (req, res) => {
  const data = req.body;
  const xhr = new XMLHttpRequest();
  xhr.open("POST", process.env.POST_QUESTIONNAIRE_ENDPOINT);
  xhr.withCredentials = true;
  xhr.setRequestHeader(
    "Authorization",
    "Basic " +
      btoa(`${process.env.OPENMRS_USERNAME}:${process.env.OPENMRS_PASSWORD}`)
  );
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onload = xhr.onerror = function () {
    if (xhr.status === 201) {
      res.status(201).send("Successfully saved Questionnaire!");
    } else {
      console.error(`Error saving Questionnaire: ${xhr.status} - ${xhr.responseText}`);
      res.status(422).send("Error saving Questionnaire!");
    }
  };
  xhr.send(JSON.stringify(data));
  console.log(data);
});

module.exports = router;
