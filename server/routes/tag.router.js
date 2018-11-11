const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET ROUTER FOR TAG
router.get('/', (req, res) => {
  const queryText = 'SELECT name, id FROM tags';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT tags query', err);
      res.sendStatus(500);
    });
});

// GET DETAILS ROUTER FOR TAG
router.get('/details/:id', (req, res) => {
  const queryText = 'SELECT * FROM tags WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT tag detail query', err);
      res.sendStatus(500);
    });
});

// POST ROUTER FOR NEW TAG
router.post('/', (req, res) => {
  const newTag = req.body;
  const queryText = `INSERT INTO tags
                    ("name") VALUES ($1)`;
  const queryValues = [
    newTag.name,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing INSERT tag query', err);
      res.sendStatus(500);
    });
});

// PUT ROUTER FOR UPDATED TAG
router.put('/', (req, res) => {
  const updatedTag = req.body;

  const queryText = `UPDATE tags
  SET "name" = $1 WHERE id=$2;`;

  const queryValues = [
    updatedTag.name, updatedTag.id,
  ];

  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing UPDATE tag query', err);
      res.sendStatus(500);
    });
});

// DELETE ROUTER FOR TAG
router.delete('/', (req, res) => {
  console.log('in delete on server', req.query.id);
  const queryText = 'DELETE FROM tags WHERE id=$1';
  pool.query(queryText, [req.query.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing DELETE tag query', err);
      res.sendStatus(500);
    });
});

module.exports = router;