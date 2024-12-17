const dbconfig = require("../config/db.config.js");

const Sequelize= require("sequelize");

const sequelize = new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    //operatorsAliases: false,

    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.signup = require("./signup.model.js")(sequelize,Sequelize);
db.login = require('./login.model.js')(sequelize, Sequelize);
db.dashboard = require('./dashboard.model.js')(sequelize, Sequelize);


//Defining the relation-ship in the data base
db.signup.hasOne(db.dashboard,{
    foreginKey: 'student_id',
    targetKey: 'id',
    onDelete: 'CASCADE' // it is to ensure if signup and user deleted all the referencing data will be deleted
});

db.dashboard.belongsTo(db.signup,{
    foreginKey: 'student_id',
    targetKey: 'id'
});

db.signup.hasOne(db.login, {
    foreginKey: 'student_id',
    sourceKey: 'id',
    onDelete: 'CASCADE'
});

db.login.belongsTo(db.signup, {
    foreginKey: 'student_id',
    targetKey: 'id'
})


module.exports = db;
