const Ventures = require('./venture-funds-model.js');
const db = require('../database/db-config.js');

describe('venture model', function () {

	describe('test environment', function () {
		it('should use the testing environment', function () {
			expect(process.env.DB_ENV).toBe('testing');
		})
	})

	describe('insert', function() {
		beforeEach(async () => {
			await db('ventures').truncate();
		})

		it('add ventures to db', async function () {
			await Ventures.insert({ name: 'CrossCut Ventures', fund_amount: 20000000 });
			await Ventures.insert({ name: 'Anthem Venture Partners', fund_amount: 15000000 });
			const ventures = await db('ventures');
			expect(ventures).toHaveLength(2);
		})
	})

	describe('delete', function() {
		beforeEach(async () => {
			await db('ventures').truncate();
		})

		it('add and delete db', async function () {
			await Ventures.insert({ name: 'Dodger Ventures', fund_amount: 500000000 });
			await Ventures.remove({ id: 1 });
			const ventures = await db('ventures');
			expect(ventures).toHaveLength(0);
		})
	})
})