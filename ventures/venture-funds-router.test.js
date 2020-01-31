const request = require('supertest');
const server = require('../api/server.js');
const db = request('../database/db-config.js');

describe('venture-router', function () {

	describe('test environment', function () {
		it('should be using the testing environment', function () {
			expect(process.env.DB_ENV).toBe('testing');
		})
	})

	describe('posting', function () {
     	it('should post and return 201', function () {
			const venture = { name: "Getty Venture", fund_amount: 245000000 }
			return request(server).post('/api/ventures').send(venture)
				.then(res => {
					expect(res.status).toBe(201);
				})
		})

		it('should post and return json', function () {
			const venture = { name: "Conway Seed Investments", fund_amount: 3402000 }
			return request(server).post('/api/ventures').send(venture)
				.then(res => {
					expect(res.body.name).toBe("Conway Seed Investments");
			})
		})
	})

	describe('delete', function () {
		it('should delete and return message', function () {
			return request(server).delete('/api/ventures/1')
				.then(res => {
					expect(res.body.message).toBe('venture deleted');
				})
		})

		it('should delete and return 200', function () {
			const venture = { name: "Google Ventures", fund_amount: 10000000000000000 }
			return request(server).post('/api/ventures').send(venture).then(
				request(server).delete('/api/ventures/1')
					.then(res => {
						expect(res.status).toBe(200);
					})
			)
		})
	})
})