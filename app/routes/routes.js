import express from 'express'
import mongoose from 'mongoose'
import {
	createProject, 
	viewProject, 
	updateProject, 
	deleteProject, 
	listProjects
} from '../controllers/controller'

const routes   = express.Router() 

// List Projects
routes.get('/Project', listProjects)

//Create Project
routes.post('/Project', createProject)

//View Project
routes.get('/Project/:ProjectId', viewProject)

//Edit Project
routes.patch('/Project/:ProjectId', updateProject)

//Delete Project
routes.delete('/Project/:ProjectId', deleteProject)

export default routes;