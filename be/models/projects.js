const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    projectId: String,
    name:  String,
}, { versionKey: false })

const ProjectModel = mongoose.model('Project', projectSchema)

module.exports = ProjectModel