const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Project = require('./models/project')
mongoose.connect('mongodb://localhost:27017/godzilla-101', { useNewUrlParser: true })
mongoose.connection.on('error', err => {
	console.error('MongoDB error', err)
})

const app = express()
const port = 3000

// สร้าง database schema
const Cat = mongoose.model('Cat', { name: String })

// สร้าง instance จาก model
const kitty = new Cat({ name: 'JavaScript' })

// save ลง database (return เป็น Promise)
kitty.save().then(() => console.log('meow'))

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))




// mock data
const projects = [{}]

app.get('/projects', async (req, res) => {
	const projects = await Project.find({})
	res.json(projects)
})

app.get('/projects/:id', async (req, res) => {
	const { id } = req.params
	
	try {
		const project = await Project.findById(id)
		res.json(project)
	} catch (error) {
		res.status(400).json(error)
	}
})

app.post('/projects', async (req, res) => {
	const payload = req.body
	try {
		const project = new Project(payload)
		await project.save()
		res.status(201).end()
	} catch (error) {
		res.status(400).json(error)
	}
})

app.put('/projects/:id', async (req, res) => {
	const payload = req.body
	const { id } = req.params
	
	try {
		const project = await Project.findByIdAndUpdate(id, { $set: payload })
		res.json(project)
	} catch (error) {
		res.status(400).json(error)
	}
})

app.delete('/projects/:id', async (req, res) => {
	const { id } = req.params
	
	try {
		await Project.findByIdAndDelete(id)
		res.status(204).end()
	} catch (error) {
		res.status(400).json(error)
	}
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
	console.log(`Try http://localhost:3000`)
})