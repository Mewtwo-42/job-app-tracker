import { pool } from '../models/model.js';

const teamController = {};

teamController.createTeam = async (req, res, next) => {
  try {
    const { name } = req.body;

    const newTeam = `INSERT INTO teams (name, team_id) VALUES ($1)`;

    const createdTeam = await pool.query(newTeam, [name]);

    res.locals.createdTeam = createdTeam;
  } catch (err) {
    return next({
      log: `teamController.createTeam ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error creating team',
      },
    });
  }
};

teamController.assignUserToTeam = async (req, res, next) => {
  try {
    const { team_id, user_id } = req.body;

    const newRoster = `INSERT INTO rosters (team_id, user_id) VALUES ($1, $2)`;

    const createdRoster = await pool.query(newRoster, [team_id, user_id]);

    res.locals.createdRoster = createdRoster;
  } catch (err) {
    return next({
      log: `teamController.assignUserToTeam ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error creating roster',
      },
    });
  }
};

teamController.removeUserFromTeam = async (req, res, next) => {
  try {
    const { team_id, user_id } = req.body;

    const updateRoster = `DELETE FROM rosters WHERE team_id=$1 AND user_id=$2`;

    const updatedRoster = await pool.query(updateRoster, [team_id, user_id]);

    res.locals.updatedRoster = updatedRoster;
  } catch (err) {
    return next({
      log: `teamController.removeUserFromTeam ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error removing user from roster',
      },
    });
  }
};

teamController.deleteTeam = async (req, res, next) => {
  try {
    const { team_id } = req.body;

    const deleteTeam = `DELETE FROM teams WHERE team_id = $1`;

    const deletedTeam = await pool.query(deleteTeam, [team_id]);

    res.locals.deletedTeam = deletedTeam;
  } catch (err) {
    return next({
      log: `taskController.deleteTeam ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error deleting team',
      },
    });
  }
};

export default teamController;
