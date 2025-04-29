const pool = require("../config/database");

const getAllPublishers = async () => {
    const result = await pool.query(`
        SELECT 
            editora.*, 
            heroes.nome AS hero_name 
        FROM 
            editora 
        LEFT JOIN 
            heroes 
        ON 
            editora.hero_id = heroes.id
    `);
    return result.rows;
};

const getPublisherById = async (id) => {
    const result = await pool.query(
        `SELECT 
            editora.*, 
            heroes.nome AS hero_name
        FROM 
            editora
        LEFT JOIN 
            heroes 
        ON 
            editora.hero_id = heroes.id
        WHERE 
            editora.id = $1`, [id]
    );
    return result.rows[0];
};

const createPublisher = async (nome, hero_id) => {
    const result = await pool.query(
        `INSERT INTO editora (nome, hero_id) VALUES ($1, $2) RETURNING *`,
        [nome, hero_id]
    );
    return result.rows[0]
}

const updatePublisher = async (id, nome, hero_id) => {
    const result = await pool.query(
        `UPDATE editora SET nome = $1, hero_id = $2 WHERE id = $3 RETURNING *`,
        [nome, hero_id, id]
    );
    return result.rows[0];
};

const deletePublisher = async (id) => {
    const result = await pool.query(`DELETE FROM editora WHERE id = $1 RETURNING *`, [id])
    if (result.rowCount === 0) {
        return { error: "Editora não encontrado!" };
    }
    return { message: "Editora deletada com sucesso!" };
}

module.exports = { getAllPublishers, getPublisherById, createPublisher, updatePublisher, deletePublisher };