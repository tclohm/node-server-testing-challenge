const db = require('../database/db-config.js');

module.exports = {
	insert,
	remove,
	getAll,
	findById,
};

async function insert(venture) {
	const [id] = await db('ventures').insert(venture);
	return findById(id);
}

function remove(id) {
	return db('ventures').del(id);
}

function getAll() {
	return db('ventures');
}

function findBy(filter) {
	return db('ventures').where(filter);
}

function findById(id) {
	return db('ventures').where("id", id).first();
}