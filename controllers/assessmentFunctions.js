import asyncHandler from 'express-async-handler';
import Assessment from '../models/assessmentModel.js';

const createAssessment = asyncHandler(async (req,res)=>{
    const {questions, role, duration} = req.body;
    const assessment = new Assessment({questions, role, duration});
    const createdAssessment = await assessment.save();
    if(createAssessment){
        res.status(200).json(createdAssessment);
    }else{
        res.status(400);
        throw new Error({message:'Assessment creation failed'});
    }
});

const getAssessments = asyncHandler(async (req,res)=>{
    const assessments = await Assessment.find({});
    if(assessments){
        res.status(200).json(assessments);
    }else{
        res.status(400);
        throw new Error({message:'No assessments found'});
    }
});


export {createAssessment, getAssessments};