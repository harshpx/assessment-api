import mongoose from "mongoose";

// const assessmentSchema = new mongoose.Schema({
//     assessment:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Assessment',
//         required: true
//     },
//     response:{
//         // audio
//         type: Buffer,
//         required: false
//     }
// });

const candidateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    contact_no:{
        type: Number,
        required: false,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    domain:{
        type: String,
        enum: ['Software', 'Analyst', 'Finance', 'Marketing', 'HR'],
        default: 'Software'
    },
    resume:{
        // pdf
        type: Buffer,
        required: false,
        default: null
    },
    links:{
        type: [String],
        default: []
    },
    // assessments:{
    //     type: [assessmentSchema],
    //     default: []
    // }
}, {timestamps: true});

const candidateModel = mongoose.model('Candidate', candidateSchema);

export default candidateModel;