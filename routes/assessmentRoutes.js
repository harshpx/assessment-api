import express from 'express';
import {createAssessment, getAssessments} from '../controllers/assessmentFunctions.js';

const routes = express.Router();

routes.route('/').post(createAssessment).get(getAssessments);

export default routes;