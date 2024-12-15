const db = require("../models");
const Dashboard = db.dashboard;

exports.createDashboard = async (req,res) => {
    try{
        const dashboard = await Dashboard.create({
            student_id: req.body.student_id
        });
        res.status(201).json(dashboard);
    } catch(error){
        res.status(500).json({
            message:"Failed to Create the Dashboard",
            error: error.message
        });
    }
};

function Calculateyear(admission_year){
    const current_year = new Date().getFullYear();
    return current_year-admission_year;
}

exports.uploadDocument = async (req, res) => {
    try{
        const { student_id, document_type, year, semester, score } = req.body;
        const dashboard = await Dashboard.findOne({ where: { student_id }});

        if(!dashboard){
            return res.status(404).json({message: 'Dashboard not found'});
        }

        if( document_type == 'admission_card'){
            const admissionDocs = dashboard.admission_documents;
        }
    }

};

