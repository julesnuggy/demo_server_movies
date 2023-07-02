const db = require('../db/client');

const getAllMovies = async () => {
  const result = await db.query('SELECT * FROM movies');
  return result.rows;
};

const getMovieById = async (id, res) => {
  const result = await db.query('SELECT * FROM movies WHERE id = $1', [id]);
  if(result.rows.length) {
    return result.rows[0];
  } else {
    res.status(404).send(`No movie with ID: ${id}`);
    return null;
  }
}

const createMovie = async (body, res) => {
  const { title, director, release_year, duration_mins } = body;
  try {
    const result = await db.query('INSERT INTO movies (title, director, release_year, duration_mins)' +
      'VALUES ($1, $2, $3, $4)' +
      'RETURNING *', [title, director, release_year, duration_mins]);
    return result.rows[0];
  } catch (err) {
    res.status(400).send(`Failed to create movie:\r\n${err.message}`);
    return null;
  }
}

const updateMovie = async (id, body, res) => {
  const { title, director, release_year, duration_mins } = body;

  try {
    const result = await db.query(`  
      UPDATE movies
      SET title = $2, director = $3, release_year = $4, duration_mins = $5
      WHERE id = $1
      RETURNING *
    `, [id, title, director, release_year, duration_mins]);

    if(!result.rows[0]) {
      throw new Error(`Cannot update movie with ID ${id} as it does not exist`);
    }

    return result.rows[0];
  } catch (err) {
    res.status(400).send(`Failed to update movie:\r\n${err.message}`);
    return null;
  }
}

const deleteMovie = async (id, res) => {
  try {
    const result = await db.query(`
    DELETE FROM movies
    WHERE id = $1
    RETURNING *
  `, [id]);

    if(!result.rows[0]) {
      throw new Error(`Cannot delete movie with ID ${id} as it does not exist`);
    }

    return result.rows[0];
  } catch (err) {
    res.status(400).send(`Failed to delete movie:\r\n${err.message}`);
    return null;
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
}
