import express from 'express';
import teamController from '../controllers/teamController.js';

const teamRouter = express.Router();

//route for creating a team
teamRouter.post('/', teamController.createTeam, (req, res) => {
  res.status(200).json(res.locals.createdTeam);
});

//route for adding user to a team
teamRouter.post('/assignUser', teamController.assignUserToTeam, (req, res) => {
    res.status(200).json(res.locals.createdRoster);
  });

//route for removing user from a team
teamRouter.delete('/removeUser', teamController.removeUserFromTeam, (req, res) => {
    res.status(200).json(res.locals.updatedRoster);
  });

//route for deleting a team
teamRouter.delete('/', teamController.deleteTeam, (req, res) => {
    res.status(200).json(res.locals.deletedTeam);
  });

export default teamRouter;
