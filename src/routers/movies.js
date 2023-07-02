const express = require('express');
const router = express.Router();
const { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie} = require('../controllers/movies');

router.get('/', async (req, res) => {
  const movies = await getAllMovies();
  res.json({ movies })
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const movie = await getMovieById(id, res)
  movie && res.json({ movie });
})

router.post('/', async (req, res) => {
  const movie = await createMovie(req.body, res);
  movie && res.status(201).json({ movie });
})

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const movie = await updateMovie(id, req.body, res);
  movie && res.json({ movie });
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const movie = await deleteMovie(id, res);
  movie && res.json({ movie });
})

module.exports = router;
