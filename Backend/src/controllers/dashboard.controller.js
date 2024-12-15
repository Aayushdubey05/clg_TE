const { DATE } = require("sequelize");
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
//function to calculate year 
// function Calculateyear(admission_year){
//     const current_year = new Date().getFullYear();
//     return current_year-admission_year;
// }

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
            const admissionDocs = dashboard.admission_documents;
            admissionDocs.twelfth_marksheet = {
                result: {
                    score: score,
                    uploaded_at: new Date(),
                    verified: false,
                    verified_by: null,
                    version: (admissionDocs.twelfth_marksheet?.result?.version || 0)+1,
                    remarks: null,
                }
            };
            await dashboard.update({ admission_documents: admissionDocs });
        } else {
            if (year && semester) {
                if(!dashboard.academic_records[`year_${year}`]){
                    dashboard.academic_records[`year_${year}`] = {};
                }
                if(!dashboard.academic_records[`year_${year}`][`sem_${semester}`]){
                    dashboard.academic_records[`year_${year}`][`sem_${semester}`] = {
                        result: {
                            score: null,  
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    };
                }
                dashboard.academic_records[`year_${year}`][`sem_${semester}`].result.score = score;
                await dashboard.update({ academic_records: dashboard.academic_records });
            }
        }

        res.status(200).json({message: "Data has been successfully uploaded"});
    }
    catch(error){
        res.status(500).json({
            message: "failed to upload the data",
            error: error.message
        });
    }
};

exports.getStudentDashboard = async (req, res) => {
    try{
        const { student_id } = req.params;
        const dashboard = Dashboard.findOne({ where:{ student_id } });

        if(!dashboard){
            return res.status(404).json({message: "Dashboard not found"});
        }

        //Determining the current year based on the student's admission year
        const admissionYear = new Date(dashboard.signup.year_of_admission).getFullYear();
        const currentYear = new Date().getFullYear();
        const yearsInCollege = currentYear - admissionYear;

        //Prepareing the response data
        const responseData = {
            student_id: dashboard.student_id,
            admission_documents: {
                admission_card: dashboard.admission_documents.admission_card,
                mht_cet_scoredcard: dashboard.admission_documents.mht_cet_scoredcard,
                twelfth_marksheet: dashboard.admission_documents.twelfth_marksheet
            },
            academic_records: {}
        };

        for(let i = 1; i <= yearsInCollege; i++){
            responseData.academic_records[`year_${i}`] = dashboard.academic_records[`year_${i}`];
        }

        res.status(200).json(responseData);
    } catch (error){
        res.status(500).json({
            message: "Failed to fetch Dashboard",
            error: error.message
        });
    }
};
