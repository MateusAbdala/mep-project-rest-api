import express from 'express'
import mongoose from 'mongoose'
import MepProject from '../models/MepProject'

export function createProject(req, res){
	if(validateRequest(req, res)){
		var newMepProject = new MepProject({
				name: req.body.name,
				description: req.body.description
      });

      newMepProject.save((err) => {
        if(err){
           throw err;
        } else {
          res.json({ success: true, message: 'Mep Project created successfully.' });
        }
      });
	}
}

export function viewProject(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.projectId)){
		MepProject.find({_id: req.params.projectId}, (err,Projects) => {
			if(err) throw err;
			res.json(Projects)
		});
	} else {
		return res.json({ success: false, message: 'Viewing failed. The id provided is an invalid ObjectId.' });
	}
}

export function updateProject(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.projectId)){
		MepProject.update({_id: req.params.projectId}, req.body, (err, result) => {
			if(err) throw err
			res.json(result)
		});
	} else {
		return res.json({ success: false, message: 'Updating failed. The id provided is an invalid ObjectId.' });
	}
}

export function deleteProject(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.projectId)){
		MepProject.remove({_id: req.params.projectId}, (err, result) => {
			if(err) throw err
			res.json(result)
		});
	} else {
		return res.json({ success: false, message: 'Deleting failed. The id provided is an invalid ObjectId.' });
	}
}

export function listProjects(req, res){
	MepProject.find((err, Projects) => {
		if(err) throw err
		res.json(Projects)
	});
}

function validateRequest(req, res){

  if(req.body.name == null || req.body.name == ''){
    res.json({ success: false, message: 'Fail. name must be provided.' });
    return false;
  }

  return true;
}