const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_SERVER, SQL_DATABASE, SQL_USER, SQL_PASSWORD, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = process.env;

assert(PORT, "PORT IS REQUIRED"); //to check whether or not PORT is set up as environment variable. Can check for every other environment variable too
assert(HOST, "HOST IS REQUIRED");
assert(SQL_SERVER, "SQL_SERVER IS REQUIRED");
assert(SQL_DATABASE, "SQL_DATABASE IS REQUIRED");
assert(SQL_USER, "SQL_USER IS REQUIRED");
assert(SQL_PASSWORD, "SQL_PASSWORD IS REQUIRED");
assert(ACCESS_TOKEN_SECRET, "ACCESS_TOKEN_SECRET IS REQUIRED");
assert(REFRESH_TOKEN_SECRET, "REFRESH_TOKEN_SECRET IS REQUIRED");


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
    },
    access_token : ACCESS_TOKEN_SECRET,
    refresh_token : REFRESH_TOKEN_SECRET

};