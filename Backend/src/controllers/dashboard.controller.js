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

        if( document_type === 'admission_card'){
            const admissionDocs = dashboard.admission_documents;
            admissionDocs.admission_card = {
                file_path: req.file.path,
                original_name: req.file.originalname,
                file_size: req.file.size,
                uploaded_at: new Date(),
                verified: false,
                verified_by: null,
                version: (admissionDocs.admission_card?.version || 0)+1,
                remarks: null   
            };
            await dashboard.update({ admission_documents: admissionDocs });
        } else if (document_type === 'mht_cet_scoredcard'){
            const admissionDocs = dashboard.admission_documents;
            admissionDocs.mht_cet_scoredcard = {
                result: {
                    score: score,
                    uploaded_at: new Date(),
                    verified: false,
                    verified_by: null,
                    version: (admissionDocs.mht_cet_scoredcard?.result?.version || 0)+1,
                    remarks: null
                }
            };
            await dashboard.update({ admission_documents: admissionDocs });
        } else if (document_type === 'twelft_marksheet'){
            
        }
    }
    catch(error){

    }
};

