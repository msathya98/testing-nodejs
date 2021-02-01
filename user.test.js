const request = require('supertest')
const app = require('../src/app')
const Users = require('../src/models/users')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')


const userOneId = new mongoose.Types.ObjectId()

const userOne = {
	name: 'Sathya',
	email: "sathyaachar062@gmail.com",
	password: "boss1234",
	tokens: [{
		token: jwt.sign({ _id: userOneId}, process.env.JWT_SECRET)
	}]

}

beforeEach(async () => {
	await Users.deleteMany()
	await new Users(userOne).save()

})

// afterEach(() => {
// 	console.log('afterEach')
// })

test('should signup a new user', async () => {
	await request(app).post('/users').send({
		name: 'Sathya',
		email: "sathyaachar062@gmail.com",
		password: "boss@123!"
	}).expect(201)
})

test("should login existing user", async () => {
	await request(app).post('/users/login').send({
		email: userOne.email,
		password: userOne.password
	}).expect(200)
})

test("should not login nonexistent user", async() => {
	await request(app).post('/users/login').send({
		eamil: userOne.email,
		password: "sa23rnkfj34j aoss"
	}).expect(400)
})

test("should get a profile for user", async() => {
	await request(app)
	.get('/users/me')
	.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
	.send()
	.expect(200)

	})

test("should not get a profile for user", async() => {
	await request(app)
	.get('/users/me')
	.send()
	.expect(401)

	})

test("Should delete account for users", async() => {
	await request(app)
	.delete('/users/me')
	.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
	.send()
	.expect(200)
const user = await User.findById(userOneId)
expect(user).toBeNull()

})
