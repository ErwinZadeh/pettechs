const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/:id", (req, res) => {
    const sqlText = `SELECT * from client where id = $1;`;
    console.log(req.params.id);
  pool
    .query(sqlText, [req.params.id])
    .then((response) => {
      console.log('---->client data:', response.rows)
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
    // const {user_id, city, state} = req.body;
  const user_id = req.body.user_id;
  const client_name = req.body.client_name;
  const home_address_house = req.body.home_address_house;
  const apt_suite = req.body.apt_suite;
  const city = req.body.city;
  const state = req.body.state;
  const zip_code = req.body.zip_code;
  const about_client = req.body.about_client;
  const about_home = req.body.about_home;
  const contact_name_1 = req.body.contact_name_1;
  const contact_phone_1 = req.body.contact_phone_1;
  const contact_email_1 = req.body.contact_email_1;
  const vet_clinic = req.body.vet_clinic;
  const clinic_address = req.body.clinic_address;
  const clinic_phone = req.body.clinic_phone;
  const transport = req.body.transport;
  const queryText =
    'INSERT INTO "client" ( user_id, client_name, home_address_house, apt_suite, city, state, zip_code, about_client, about_home, contact_name_1, contact_phone_1, contact_email_1, vet_clinic, clinic_address, clinic_phone, transport) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)';
  pool
    .query(queryText, [
      user_id,
      client_name,
      home_address_house,
      apt_suite,
      city,
      state,
      zip_code,
      about_client,
      about_home,
      contact_name_1,
      contact_phone_1,
      contact_email_1,
      vet_clinic,
      clinic_address,
      clinic_phone,
      transport,
    ])
    .then(() => res.sendStatus(201))

    .catch((error) => {
        console.log(error)
        res.sendStatus(500)});
});

module.exports = router;
