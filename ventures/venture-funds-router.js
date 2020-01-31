const router = require('express').Router();
const Ventures = require('./venture-funds-model.js');

router.post('/ventures', (req, res) => {
	let venture = req.body;
	Ventures.insert(venture)
		.then(vt => {
			res.status(201).json(vt)
		})
		.catch(err => {
			res.status(500).json(err)
		})
});

router.delete('/ventures/:id', (req, res) => {
	let id = req.params.id;
	Ventures.remove(id)
		.then(id => {
			if(id) {
				res.status(200).json({ message: 'venture deleted' });
			} else {
				res.status(400).json({ message: 'venture does not exist' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'could not delete the venture' });
		})
})

module.exports = router;