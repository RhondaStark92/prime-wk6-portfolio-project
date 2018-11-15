const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET ROUTER FOR PROJECT
router.get('/', (req, res) => {
  // Get projects and associated tag name
  const queryText = 'SELECT projects.*, tags.name as tag FROM projects JOIN tags ON projects.tag_id = tags.id';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT projects query', err);
      res.sendStatus(500);
    });
});

// GET DETAILS ROUTER FOR PROJECT
router.get('/details/:id', (req, res) => {
  const queryText = 'SELECT * FROM projects WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT project detail query', err);
      res.sendStatus(500);
    });
});

// POST ROUTER FOR NEW PROJECT
router.post('/', (req, res) => {
  const newProject = req.body;
  const queryText = `INSERT INTO projects 
                    ("name", "description", "thumbnail", "website", 
                    "github", "date_completed", "tag_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  const queryValues = [
    newProject.name,
    newProject.description,
    newProject.thumbnail,
    newProject.website,
    newProject.github,
    newProject.date_completed,
    newProject.tag_id,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing INSERT projects query', err);
      res.sendStatus(500);
    });
});

// PUT ROUTER FOR UPDATED PROJECT
router.put('/', (req, res) => {
  const updatedProject = req.body;

  const queryText = `UPDATE projects
  SET "name" = $1, 
  "description" = $2, 
  "thumbnail" = $3, 
  "website" = $4, 
  "github" = $5, 
  "date_completed" = $6, 
  "tag_id" = $7
  WHERE id=$8;`;

  const queryValues = [
    updatedProject.name,
    updatedProject.description,
    updatedProject.thumbnail,
    updatedProject.website,
    updatedProject.github,
    updatedProject.date_completed,
    updatedProject.tag_id,
  ];

  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing UPDATE projects query', err);
      res.sendStatus(500);
    });
});

// DELETE ROUTER FOR PROJECT
router.delete('/', (req, res) => {
  console.log('in delete on server', req.query.id);
  const queryText = 'DELETE FROM projects WHERE id=$1';
  pool.query(queryText, [req.query.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing DELETE project query', err);
      res.sendStatus(500);
    });
});

module.exports = router;