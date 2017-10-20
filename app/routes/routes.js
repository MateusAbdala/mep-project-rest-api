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
routes.get('/project', listProjects)

//Create Project
routes.post('/project', createProject)

//View Project
routes.get('/project/:projectId', viewProject)

//Edit Project
routes.patch('/project/:projectId', updateProject)

//Delete Project
routes.delete('/project/:projectId', deleteProject)

export default routes;