import db from './models/model.js';

const projectController = {};

projectController.createProject = async (req, res, next) => {
    try {
        const { name, team_id } = req.body;
    
        const newProject = `INSERT INTO projects (name, team_id) VALUES ($1, $2)`;
    
        const createdProject = await db.query(newProject, [name, team_id]);
    
        res.locals.createdProject = createdProject;
      } catch (err) {
        return next({
          log: `projectController.createProject ERROR: ${err}`,
          status: 400,
          message: {
            err: 'Error creating project',
          },
        });
      }
};

projectController.getProject = async (req, res, next) => {
    try {
        const { team_id } = req.body;
    
        const getProjects = `SELECT * FROM projects WHERE team_id=$1`;
    
        const teamProjects = await db.query(getProjects, [team_id]);
    
        res.locals.teamProjects = teamProjects;
      } catch (err) {
        return next({
          log: `projectController.getProject ERROR: ${err}`,
          status: 400,
          message: {
            err: 'Error retrieving projects',
          },
        });
      }
};

projectController.updateProject = async (req, res, next) => {
    try {
        const { name, team_id } = req.body;
    
        const updateProject = `UPDATE projects SET name = $1 WHERE team_id = $2`;
    
        const newProject = await db.query(updateProject, [name, team_id]);
    
        res.locals.newProject = newProject;
      } catch (err) {
        return next({
          log: `projectController.updateProject ERROR: ${err}`,
          status: 400,
          message: {
            err: 'Error updating project',
          },
        });
      }
};

projectController.deleteProject = async (req, res, next) => {
    try {
        const { name, team_id } = req.body;
    
        const deleteProject = `DELETE FROM projects WHERE name = $1 AND team_id = $2`;
    
        const deletedProject = await db.query(deleteProject, [name, team_id]);
    
        res.locals.deletedProject = deletedProject;
      } catch (err) {
        return next({
          log: `projectController.deleteProject ERROR: ${err}`,
          status: 400,
          message: {
            err: 'Error deleting project',
          },
        });
      }
};

export default projectController;
