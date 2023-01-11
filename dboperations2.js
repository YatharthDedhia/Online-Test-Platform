var config = require('./config');
const sql = require('mssql');
const { password } = require('./config');
//const UserTable = require("./Tables/UserTable")


async function getUsers(){
    try{
        let pool = await sql.connect(config.sql);
        let products = await pool.request()
            .query('Select * from Usertable');
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function getUser(UserId){
    try{
        let pool = await sql.connect(config.sql);
        let product = await pool.request()
            .input("input_param", sql.Int, UserId)
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

async function addToTeacherTable(Teacher)
{
    try
    {
        let pool = await sql.connect(config.sql);
        let insertNewTeacher = await pool.request()

            .input('UserId', sql.Int, Teacher.UserId )
            .execute('AddToTeacherTable');
        return insertNewTeacher.recordsets;    
    }

    catch(error)
    {
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
            .input('CourseName',sql.VarChar(800), Courses.CourseName)
            .input('CourseCode',sql.Int,Courses.CourseCode)
            .execute('CreateCourse');
        return insertNewCourse.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function assignCourseToStudent(Student_Course)
{
    try
    {
        let pool = await sql.connect(config.sql);
        let assignCourseToStudent = await pool.request()

            .input('StudentId',sql.Int, Student_Course.StudentId)
            .input('CourseId',sql.Int, Student_Course.CourseId)
            .execute('AssignCourseToStudent');
        return assignCourseToStudent.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function assignCourseToTeacher(Teacher_Course)
{
    try
    {
        let pool = await sql.connect(config.sql);
        let assignCourseToTeacher = await pool.request()

            .input('TeacherId',sql.Int, Teacher_Course.TeacherId)
            .input('CourseId',sql.Int, Teacher_Course.CourseId)
            .execute('AssignCourseToTeacher');
        return assignCourseToTeacher.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function getCourseListStudent(UserId){  
    try{
        let pool = await sql.connect(config.sql);
        let studentsCourses = await pool.request()
            
            .input("input_param", sql.Int, UserId)
            .query("EXEC CourseListOfStudent @input_param");
        return studentsCourses.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function getCourseListTeacher(UserId){ 
    try{
        let pool = await sql.connect(config.sql);
        let teachersCourses = await pool.request()
            
            .input('input_param', sql.Int, UserId)
            .query("EXEC CourseListOfTeacher @input_param");
        return teachersCourses.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function getQuestions_QB(CourseId){
    try{
        let pool = await sql.connect(config.sql);
        let product = await pool.request()
            .input("input_param", sql.Int, CourseId)
            .query('EXEC DisplayQuestionBank @input_param');
        return product.recordsets;
            
    }
    catch(err){
        console.log(err);
    }
}

async function addToQuestionBank(QuestionBank) 
{
    try
    {
        let pool = await sql.connect(config.sql);
        let insertNewQuestion = await pool.request()

            .input('Question',sql.VarChar(8000),QuestionBank.Question)
            .input('Marks',sql.Int,QuestionBank.Marks)
            .input('Difficulty',sql.Int,QuestionBank.Difficulty)
            .input('CourseId', sql.Int, QuestionBank.CourseId)
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
        
            .input("input_param",sql.Int,PaperCode )
            .query("EXEC GetQuestionPaper @input_param");
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
            .execute('CreateQuestionpaper');
        return insertNewQuestionPaper.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function addToQuestionPaper(QuestionPaperQuestions) 
{
    try
    {
        let pool = await sql.connect(config.sql);
        let insertNewQuestion = await pool.request()

            .input('PaperCode',sql.Int,QuestionPaperQuestions.PaperCode)
            .input('QuestNo',sql.Int,QuestionPaperQuestions.QuestNo)
            .execute('AddToQuestionPaper');
        return insertNewQuestion.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function deleteFromQuestionPaper(QuestionPaperQuestions)
{
    try
    {
        let pool = await sql.connect(config.sql);
        let deleteQuestion = await pool.request()

            .input('PaperCode', sql.Int, QuestionPaperQuestions.PaperCode)
            .input('QuestNo', sql.Int, QuestionPaperQuestions.QuestNo)
            .execute('DelFromQuestionPaper');
        return deleteQuestion.recordsets;    
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

async function addToAnswersTable(Answers) 
{
    try
    {
        let pool = await sql.connect(config.sql);
        let insertNewQuestion = await pool.request()

            .input('QuestNo',sql.Int, Answers.QuestNo)
            .input('Answer', sql.VarChar(8000), Answers.Answer)
            .input('isCorrect', sql.Bit, Answers.isCorrect)
            .input('Weightage', sql.Float, Answers.Weightage)
            .execute('AddToAnswersTable');
        return insertNewQuestion.recordsets;    
    }

    catch(error)
    {
        console.log(error);
    }
}

async function updatePassword(UserTable){ //NOT WORKING // where to input replacepassword
    try{
        let pool = await sql.connect(config.sql);
        let updatePassword = await pool.request()

            .input('UserId', sql.Int, UserTable.UserId)
            .input('Password', sql.VarChar(8000), UserTable.Password)
            .replaceInput('newpassword', sql.VarChar(8000), UserTable.Password)
            .execute('UpdatePassword');
        return updatePassword.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function updateSingleAnswer(Answers){ 
    try{
        let pool = await sql.connect(config.sql);
        let updatePassword = await pool.request()

            .input('AnswerId', sql.Int, Answers.AnswerId)
            .input('QuestNo', sql.Int, Answers.QuestNo)
            .input('Answer', sql.VarChar(8000), Answers.Answer)
            .input('isCorrect', sql.Bit, Answers.isCorrect)
            .input('Weightage', sql.Float, Answers.Weightage)
            .execute('UpdateSingleAnswer');
        return updatePassword.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function updateSingleQuestion(QuestionBank){ 
    try{
        let pool = await sql.connect(config.sql);
        let updatePassword = await pool.request()

            .input('QuestNo', sql.Int, QuestionBank.QuestNo)
            .input('Question', sql.VarChar(8000), QuestionBank.Question)
            .input('Marks', sql.Int, QuestionBank.Marks)
            .input('Difficulty', sql.Int, QuestionBank.Difficulty)
            .input('CourseId', sql.Int, QuestionBank.CourseId)
            .execute('UpdateSingleQuestion');
        return updatePassword.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function reactivateQuestion(QuestionPaperQuestions){ 
    try{
        let pool = await sql.connect(config.sql);
        let ReactivateQuestion = await pool.request()

            .input('PaperCode', sql.Int,QuestionPaperQuestions.PaperCode)
            .input('QuestNo', sql.Int, QuestionPaperQuestions.QuestNo)
            .execute('ReactivateQuestion');
        return ReactivateQuestion.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getActivatedStudents(){
    try{
        let pool = await sql.connect(config.sql);
        let products = await pool.request().execute("ActivatedStudentsList");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function getActivatedTeachers(){
    try{
        let pool = await sql.connect(config.sql);
        let products = await pool.request().execute("ActivatedTeachersList");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

// async function getUnactivatedStudents(){
//     try{
//         let pool = await sql.connect(config.sql);
//         let products = await pool.request().execute("ctivatedStudentsList");
//         return products.recordsets;
//     }
//     catch(error){
//         console.log(error);
//     } 
// }

// async function getUnactivatedTeachers(){
//     try{
//         let pool = await sql.connect(config.sql);
//         let products = await pool.request().execute("ActivatedTeachersList");
//         return products.recordsets;
//     }
//     catch(error){
//         console.log(error);
//     } 
// }

module.exports ={
    getUsers : getUsers,
    getUser : getUser,
    addUser : addUser,
    updateUserTable : updateUserTable,
    activateUser : activateUser,
    getAllStudentsinfo : getAllStudentsinfo,
    addToStudentTable : addToStudentTable,
    getAllTeachersinfo : getAllTeachersinfo,
    addToTeacherTable : addToTeacherTable,
    getCourses :  getCourses,
    getCourse : getCourse,
    addCourse : addCourse,
    assignCourseToStudent : assignCourseToStudent,
    assignCourseToTeacher : assignCourseToTeacher,
    getCourseListStudent : getCourseListStudent,
    getCourseListTeacher : getCourseListTeacher,
    getQuestions_QB : getQuestions_QB,
    addToQuestionBank : addToQuestionBank,
    createQuestionPaper : createQuestionPaper,
    getQuestionPaper : getQuestionPaper,
    addToQuestionPaper : addToQuestionPaper,
    deleteFromQuestionPaper : deleteFromQuestionPaper,
    getAnswersTable : getAnswersTable,
    addToAnswersTable : addToAnswersTable,
    updatePassword : updatePassword,
    updateSingleAnswer : updateSingleAnswer,
    updateSingleQuestion : updateSingleQuestion,
    reactivateQuestion : reactivateQuestion,
    getActivatedStudents : getActivatedStudents,
    getActivatedTeachers : getActivatedTeachers
}