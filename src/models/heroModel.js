const pool = require("../config/database");

const getAllHeroes = async () => {
    const result = await pool.query("SELECT * FROM heroes");
    return result.rows;
}

const getHeroById = async (id) => {
    const result = await pool.query("SELECT * FROM heroes WHERE id = $1", [id]);
    return result.rows[0]
}

const createHero = async (nome, photo) => {
    const result = await pool.query("INSERT INTO heroes (nome, photo) VALUES ($1, $2) RETURNING *", [nome, photo]);
    return result.rows[0];
}

module.exports = {getAllHeroes, getHeroById, createHero}