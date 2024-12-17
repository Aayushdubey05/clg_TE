module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "mysecretpassword",
    DB: "testDB",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};