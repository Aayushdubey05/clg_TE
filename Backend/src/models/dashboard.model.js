const signup = require('./signup.model');

module.exports = (sequelize, Sequelize ) => {
    const Dashboard = sequelize.define("dashboard",{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        student_id:{
            type: Sequelize.INTEGER,
            allowNull: true,
            unique: true,
            references: {
                model: 'signups',
                key: 'id'
            }
        },
        //admission Documents in the intial stage after the creation of records 
        admission_documents: {
            type: Sequelize.JSON,
            defaultValue: {
                admission_card: {
                    file_path: null,
                    original_name: null,
                    file_size: null,
                    uploaded_at: null,
                    verified: false,
                    verified_by: null,
                    version: 1,
                    remarks: null
                },
                mht_cet_scoredcard: {
                    result: {
                        score: null, // Floating-point number for score
                        uploaded_at: null,
                        verified: false,
                        verified_by: null,
                        version: 1,
                        remarks: null
                    }
                },
                twelfth_marksheet: {
                    result: {
                        score: null, // Floating-point number for score
                        uploaded_at: null,
                        verified: false,
                        verified_by: null,
                        version: 1,
                        remarks: null
                    }
                }
            }
        },
        academic_records:{
            type: Sequelize.JSON,
            defaultValue: {
                year_1:{
                    sem_1: {
                        result: {
                            score: null, // Floating-point number for score
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    sem_2: {
                        result: {
                            score: null, // Floating-point number for score
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    ggrade_card: {
                        score: null,
                        uploaded_at: null,
                        verified: false,
                        verified_by: null,
                        version: 1,
                        remarks: null
                    }
                },
                year_2:{
                    sem_3:{
                        result: {
                            score: null, // Floating-point number for score
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    sem_4:{
                        result: {
                            score: null, // Floating-point number for score
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    grade_card: {
                        score: null,
                        uploaded_at: null,
                        verified: false,
                        verified_by: null,
                        version: 1,
                        remarks: null
                    }
                },
                year_3:{
                    sem_5:{
                        result: {
                            score: null, // Floating-point number for score
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    sem_6:{
                        result: {
                            score: null, // Floating-point number for score
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1, 
                            remarks: null
                        }
                    },
                    grade_card: {
                        score: null,
                        uploaded_at: null,
                        verified: false,
                        verified_by: null,
                        version: 1,
                        remarks: null
                    }
                },
                year_4:{
                    sem_7:{
                        result: {
                            score: null, // Floating-point number for score
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    sem_8:{
                        result: {
                            score: null, // Floating-point number for score
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    grade_card: {
                        score: null,
                        uploaded_at: null,
                        verified: false,
                        verified_by: null,
                        version: 1,
                        remarks: null
                    }
                }
            }
        }
    });

    return Dashboard;
};