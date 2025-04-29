const publisherModel = require('../models/publisherModel');

const getAllPublishers = async (req, res) => {
    try {
        const publishers = await publisherModel.getAllPublishers();
        res.json(publishers)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar editoras'})
    }
}

const getPublisherById = async (req, res) => {
    try {
        const publisher = await publisherModel.getPublisherById(req.params.id);
        if (!publisher) {
            return res.status(404).json({ error: 'Editora não encontrada.' });
        }
        res.json(publisher);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar editora.' });
    }
}

const createPublisher = async (req, res) => {
    try {
        const { nome, hero_id } = req.body;
        if (!nome || !hero_id) {
            return res.status(400).json({ error: "Os campos 'nome' e 'hero_id' são obrigatórios." });
        }
        const newPublisher = await publisherModel.createPublisher(nome, hero_id);
        res.status(201).json(newPublisher);
    } catch (error) {
        console.error("Erro ao criar editora:", error);
        res.status(500).json({ error: 'Erro ao criar editora.' });
    }
};

const updatePublisher = async (req, res) => {
    try {
        const { nome, hero_id } = req.body;
        const updatedPublisher = await publisherModel.updatePublisher(req.params.id, nome, hero_id);
        if (!updatedPublisher) {
            return res.status(404).json({ message: "Editora não encontrado." });
        }
        res.json(updatedPublisher);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Editora." });
    }
};

const deletePublisher = async (req, res) => {
    try {
        const message = await publisherModel.deletePublisher(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar editora." });
    }
};

module.exports = { getAllPublishers, getPublisherById, createPublisher, updatePublisher, deletePublisher };