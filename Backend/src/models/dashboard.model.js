const signup = require('./signup.model');

module.export = (sequelize, Sequelize ) => {
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
            default_value: {
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
                    file_path: null,
                    original_name: null,
                    file_size: null,
                    uploaded_at: null,
                    verified: false,
                    verified_by: null,
                    version: 1,
                    remarks: null
                },
                twelfth_marksheet: {
                    file_path: null,
                    original_name: null,
                    file_size: null,
                    uploaded_at: null,
                    verified: false,
                    verified_by: null,
                    version: 1,
                    remarks: null
                }
            }
        },
        academic_records:{
            type: Sequelize.JSON,
            defaultValue: {
                year_1:{
                    sem_1: {
                        result: {
                            file_path: null,
                            original_name: null,
                            file_size: null,
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    sem_2: {
                        result: {
                            file_path: null,
                            original_name: null,
                            file_size: null,
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    grade_card: {
                        file_path: null,
                        original_name: null,
                        file_size: null,
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
                            file_path: null,
                            original_name: null,
                            file_size: null,
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    sem_4:{
                        result: {
                            file_path: null,
                            original_name: null,
                            file_size: null,
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    grade_card: {
                        file_path: null,
                        original_name: null,
                        file_size: null,
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
                            file_path: null,
                            original_name: null,
                            file_size: null,
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    sem_6:{
                        result: {
                            file_path: null,
                            original_name: null,
                            file_size: null,
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    grade_card: {
                        file_path: null,
                        original_name: null,
                        file_size: null,
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
                            file_path: null,
                            original_name: null,
                            file_size: null,
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    sem_8:{
                        result: {
                            file_path: null,
                            original_name: null,
                            file_size: null,
                            uploaded_at: null,
                            verified: false,
                            verified_by: null,
                            version: 1,
                            remarks: null
                        }
                    },
                    grade_card: {
                        file_path: null,
                        original_name: null,
                        file_size: null,
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