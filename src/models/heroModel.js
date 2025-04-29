const pool = require("../config/database");

const getAllHeroes = async ( nome ) => {
    if (!nome) {
        const result = await pool.query("SELECT * FROM heroes");
        return result.rows;
    } else {
        const result = await pool.query("SELECT * FROM heroes WHERE nome ILIKE $1", [`%${nome}%`]);
        return result.rows;
    }
    
}

const getHeroById = async (id) => {
    const result = await pool.query("SELECT * FROM heroes WHERE id = $1", [id]);
    return result.rows[0]
}

const createHero = async (nome, photo) => {
    const result = await pool.query("INSERT INTO heroes (nome, photo) VALUES ($1, $2) RETURNING *", [nome, photo]);
    return result.rows[0];
}

const updateHero = async (id, nome, photo) => {
    const result = await pool.query("UPDATE heroes SET nome = $1, photo = $2 WHERE id = $3 RETURNING *", [nome, photo, id]);
    return result.rows[0]
}

const deleteHero = async (id) => {
    const result = await pool.query("DELETE FROM heroes WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Herói não encontrado." };
    }
    return { message: "Herói deletado com sucesso." };
};

module.exports = {getAllHeroes, getHeroById, createHero, updateHero, deleteHero}