const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_SERVER, SQL_DATABASE, SQL_USER, SQL_PASSWORD, } = process.env;

assert(PORT, "PORT IS REQUIRED"); //to check whether or not PORT is set up as environment variable. Can check for every other environment variable too
assert(HOST, "HOST IS REQUIRED");
assert(SQL_SERVER, "SQL_SERVER IS REQUIRED");
assert(SQL_DATABASE, "SQL_DATABASE IS REQUIRED");
assert(SQL_USER, "SQL_USER IS REQUIRED");
assert(SQL_PASSWORD, "SQL_PASSWORD IS REQUIRED");


const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database : SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true

        }
    }
};