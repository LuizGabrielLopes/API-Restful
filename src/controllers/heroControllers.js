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
        const { nome, photo} = req.body;
        const hero = await heroModel.updateHero(req.params.id, nome, photo);
        if (!hero) {
            return res.status(404).json({ error: "Herói não encontrado"})
        }
        res.json(hero)
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar um herói"})
    }
}

const deleteHero = async (req,res) => {
    try {
        const result = await heroModel.deleteHero(req.params.id);
        if (result.error) {
            return res.status(404).json(result)
        }
        res.json(result);
    } catch (error) {
        console.error('Erro ao buscar herói:', error);
        res.status(500).json({ error: 'Erro ao deletar herói'})
    }
}

module.exports = {getAllHeroes, getHeroById, createHero, updateHero, deleteHero}