const heroModel = require('../models/heroModel');

const getAllHeroes = async (req, res) => {
    try {
        const heroes = await heroModel.getAllHeroes();
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os heróis'})
    }
};

const getHeroById = async (req, res) => {
    const { id } = req.params;
    try {
        const hero = await heroModel.getHeroById(id);
        if (!hero) {
            return res.status(404).json({ error: 'Heróis não encontrado' });
        }
        res.json(hero);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar herói'})
    }
}

const createHero = async (req, res) => {
    try {
        const { nome } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newHero = await heroModel.createHero(nome, photo);
        res.status(201).json(newHero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar um herói"})
    }
}

const updateHero = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar um herói"})
    }
}

module.exports = {getAllHeroes, getHeroById, createHero}