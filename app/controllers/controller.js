import express from 'express'
import mongoose from 'mongoose'
import mepProject from '../models/mepProject'

export function createProject(req, res){
	if(validateRequest(req, res)){
		var newmepProject = new mepProject({
        name: req.body.name,
        director: req.body.director,
        est_date: req.body.est_date,
        type: req.body.type,
        city: req.body.city,
        state: req.body.state,
        postal_address: req.body.postal_address,
        email: req.body.email,
        phone: req.body.phone,
        createdByUserId: req.body.createdByUserId
      });

      newmepProject.save((err) => {
        if(err){
          if(err.code == 11000){
            res.json({ success: false, message: 'Creating failed. Email address already exists.' });
          } else { 
            throw err;
          }
        } else {
          res.json({ success: true, message: 'Mep Project created successfully.' });
        }
      });
	}
}

export function viewProject(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.ProjectId)){
		mepProject.find({_id: req.params.ProjectId}, (err,Projects) => {
			if(err) throw err;
			res.json(Projects)
		});
	} else {
		return res.json({ success: false, message: 'Viewing failed. The id provided is an invalid ObjectId.' });
	}
}

export function updateProject(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.ProjectId)){
		mepProject.update({_id: req.params.ProjectId}, req.body, (err, result) => {
			if(err) throw err
			res.json(result)
		});
	} else {
		return res.json({ success: false, message: 'Updating failed. The id provided is an invalid ObjectId.' });
	}
}

export function deleteProject(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.ProjectId)){
		mepProject.remove({_id: req.params.ProjectId}, (err, result) => {
			if(err) throw err
			res.json(result)
		});
	} else {
		return res.json({ success: false, message: 'Deleting failed. The id provided is an invalid ObjectId.' });
	}
}

export function listProjects(req, res){
	mepProject.find((err, Projects) => {
		if(err) throw err
		res.json(Projects)
	});
}

function validateRequest(req, res){

  if(req.body.name == null || req.body.name == ''){
    res.json({ success: false, message: 'Fail. name must be provided.' });
    return false;
  } 

  if(req.body.type == null || req.body.type == ''){
    res.json({ success: false, message: 'Fail. type must be provided.' });
    return false;
  }

  if(req.body.director == null || req.body.director == ''){
    res.json({ success: false, message: 'Fail. director must be provided.' });
    return false;
  }

  if(req.body.city == null || req.body.city == ''){
    res.json({ success: false, message: 'Fail. city must be provided.' });
    return false;
  }

  if(req.body.state == null || req.body.state == ''){
    res.json({ success: false, message: 'Fail. state must be provided.' });
    return false;
  }

  if(req.body.postal_address == null || req.body.postal_address == ''){
    res.json({ success: false, message: 'Fail. postal_address must be provided.' });
    return false;
  }

  if(req.body.email == null || req.body.email == ''){
    res.json({ success: false, message: 'Fail. email must be provided.' });
    return false;
  }

  if(req.body.phone == null || req.body.phone == ''){
    res.json({ success: false, message: 'Fail. phone must be provided.' });
    return false;
  }

  if(req.body.est_date == null || req.body.est_date == ''){
    res.json({ success: false, message: 'Fail. Established date (est_date) must be provided.' });
    return false;
  } 

  if(req.body.createdByUserId == null || req.body.createdByUserId == ''){
    res.json({ success: false, message: 'Fail. createdByUserId must be provided.' });
    return false;
  }

  return true;
}