var config = require('./config');
const sql = require('mssql');
const { password } = require('./config');
//const UserTable = require("./Tables/UserTable")


async function getUsers(){
    try{
        let pool = await sql.connect(config.sql);
        let products = await pool.request().query("Select * from UserTable");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function getUser(Id){
    try{
        let pool = await sql.connect(config.sql);
        let product = await pool.request()
            .input("input_param", sql.Int, Id)
            .query('select * from UserTable where UserId = @input_param');
        return product.recordsets;
            
    }
    catch(err){
        consolele.log(err);
    }
}

async function addUser(UserTable)
{
    try
    {
        let pool = await sql.connect(config.sql);
        let insertNewUser = await pool.request()
            
            .input('UserName',sql.VarChar(8000),UserTable.UserName) 
            .input('Password',sql.VarChar(8000),UserTable.Password)   
            .input('FirstName',sql.VarChar(8000),UserTable.FirstName)
            .input('LastName',sql.VarChar(8000),UserTable.LastName)
            .input('EmailId',sql.VarChar(8000),UserTable.EmailId)
            
            
            .input('MobileNo',sql.Numeric(10,0),UserTable.MobileNo)
            .input('LastLoginDateTime',sql.Date,UserTable.LastLoginDateTime)
            .input('DateOfBirth',sql.Date,UserTable.DateOfBirth)
            .input('Age',sql.Int,UserTable.Age)
            .input('TypeId',sql.Int,UserTable.TypeId )
            
            .input('ActivationStatus',sql.Bit,UserTable.ActivationStatus)
            .execute('RegisterUser');
        return insertNewUser.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function updateUserTable(UserTable)
{
    try
    {
        let pool = await sql.connect(config.sql);
        let updateUser = await pool.request()
            .input('UserId',sql.Int,UserTable.UserId)
            .input('UserName',sql.VarChar(8000),UserTable.UserName) 
            .input('Password',sql.VarChar(8000),UserTable.Password)   
            .input('FirstName',sql.VarChar(8000),UserTable.FirstName)
            .input('LastName',sql.VarChar(8000),UserTable.LastName)
            .input('EmailId',sql.VarChar(8000),UserTable.EmailId)
            
            
            .input('MobileNo',sql.Numeric(10,0),UserTable.MobileNo)
            .input('LastLoginDateTime',sql.Date,UserTable.LastLoginDateTime)
            .input('DateOfBirth',sql.Date,UserTable.DateOfBirth)
            .input('Age',sql.Int,UserTable.Age)
            // .input('TypeId',sql.Int,UserTable.TypeId )
            
            // .input('ActivationStatus',sql.Bit,UserTable.ActivationStatus)
            .execute('UpdateUserInfo');
        return updateUserTable.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function activateUser(UserTable)
{
    try
    {
        let pool = await sql.connect(config.sql);
        let activateUser = await pool.request()
            
            .input('UserId', sql.Int, UserTable.UserId)
            .input('TypeId', sql.Int, UserTable.TypeId)
            .input('ActivationStatus', sql.Bit, UserTable.ActivationStatus)
            .execute('AcivateUser');
        return activateUser.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function getAllStudentsinfo(){
    try{
        let pool = await sql.connect(config.sql);
        let products = await pool.request().execute("AllStudentsList");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function addToStudentTable(Student)
{
    try
    {
        let pool = await sql.connect(config.sql);
        let insertNewStudent = await pool.request()

            .input('UserId', sql.Int, Student.UserId )
            .execute('AddToStudentTable');
        return insertNewStudent.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function getAllTeachersinfo(){
    try{
        let pool = await sql.connect(config.sql);
        let products = await pool.request().execute("AllTeachersList");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function getCourses(){
    try{
        let pool = await sql.connect(config.sql);
        let products = await pool.request().execute("AllCourseList");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function getCourse(Id){
    try{
        let pool = await sql.connect(config.sql);
        let product = await pool.request()
            .input("input_param", sql.Int, Id)
            .query('select * from Courses where CourseId = @input_param');
        return product.recordsets;
            
    }
    catch(err){
        console.log(err);
    }
}

async function addCourse(Courses)
{
    try
    {
        let pool = await sql.connect(config.sql);
        let insertNewCourse = await pool.request()

            //.input('CourseId',sql.Int,Courses.CourseId)
            .input('CourseName',sql.VarChar(800), Courses.Coursename)
            .input('CourseCode',sql.Int,Courses.CourseCode)
            .execute('CreateCourse');
        return insertNewCourse.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function getQuestions_QB(){
    try{
        let pool = await sql.connect(config.sql);
        let products = await pool.request().query("Select * from QuestionBank");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function getQuestion_QB(Id){
    try{
        let pool = await sql.connect(config.sql);
        let product = await pool.request()
            .input("input_param", sql.Int, Id)
            .query('select * from QuestionBank where QuestNo = @input_param');
        return product.recordsets;
            
    }
    catch(err){
        consolele.log(err);
    }
}

async function addToQuestionBank(QuestionBank) //course column needs to added to input
{
    try
    {
        let pool = await sql.connect(config.sql);
        let insertNewQuestion = await pool.request()

            .input('Question',sql.VarChar(8000),QuestionBank.Question)
            .input('Marks',sql.Int,QuestionBank.Marks)
            .input('Difficulty',sql.Int,QuestionBank.Difficulty)
            .execute('AddToQuestionBank')
        return insertNewQuestion.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function getQuestionPaper(PaperCode){
    try{
        let pool = await sql.connect(config.sql);
        let questionpaper = await pool.request()
        
            .input("PaperCode",sql.Int,PaperCode )
            .execute("GetQuestionPaper");
        return questionpaper.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function createQuestionPaper(QuestionPaper)
{
    try
    {
        let pool = await sql.connect(config.sql);
        let insertNewQuestionPaper = await pool.request()

            .input('CourseId', sql.Int, QuestionPaper.CourseId)
            .input('DurationHours', sql.Int, QuestionPaper.DurationHours)
            .input('TeacherId', sql.Int, QuestionPaper.TeacherId)
            .input('CourseName',sql.VarChar(8000), QuestionPaper.CourseName)
            .input('CourseCode',sql.VarChar(8000), QuestionPaper.CourseCode)
            .execute('CreateQuestionpaper')
        return insertNewQuestionPaper.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function addToQuestionPaper(QuestionPaper,QuestionBank) //ERROR!!!!
{
    try
    {
        let pool = await sql.connect(config.sql);
        let insertNewQuestion = await pool.request()

            .input('PaperCode',sql.Int,QuestionPaper.PaperCode)
            .input('QuestNo',sql.Int,QuestionBank.QuestNo)
            .execute('AddToQuestionPaper')
        return insertNewQuestion.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function getAnswersTable(){
    try{
        let pool = await sql.connect(config.sql);
        let products = await pool.request().query("Select * from Answers");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function addToAnswersTable(Answers) //courseId column needs to added to input
{
    try
    {
        let pool = await sql.connect(config.sql);
        let insertNewQuestion = await pool.request()

            .input('QuestNo',sql.Int, Answers.QuestNo)
            .input('Answer', sql.VarChar(8000), Answers.Answer)
            .input('isCorrect', sql.Bit, Answers.isCorrect)
            .input('Weightage', sql.Float, Answers.Weightage)
            .execute('AddToAnswersTable')
        return insertNewQuestion.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

module.exports ={
    getUsers : getUsers,
    getUser : getUser,
    addUser : addUser,
    updateUserTable : updateUserTable,
    activateUser : activateUser,
    getAllStudentsinfo : getAllStudentsinfo,
    addToStudentTable : addToStudentTable,
    getAllTeachersinfo : getAllTeachersinfo,
    getCourses :  getCourses,
    getCourse : getCourse,
    addCourse : addCourse,
    getQuestions_QB : getQuestions_QB,
    getQuestion_QB : getQuestion_QB,
    addToQuestionBank : addToQuestionBank,
    createQuestionPaper : createQuestionPaper,
    getQuestionPaper : getQuestionPaper,
    addToQuestionPaper : addToQuestionPaper,
    getAnswersTable : getAnswersTable,
    addToAnswersTable : addToAnswersTable,
}