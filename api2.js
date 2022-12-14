const Db = require('./dboperations2');
const config = require('./config');

//const UserTable = require('../Tables/UserTable');
// var Userstable = require('./Tables/UserTable');
// var Course = require('./Tables/Courses');

var express = require('express');
var bodyParser = require('body-parser');

var cors = require('cors');
const { request, response } = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.route('/user').get((request,response)=>{
    
    Db.getUsers().then(result =>{
        response.json(result[0]);
    })
})

router.route('/user/:id').get((request,response)=>{
    
    Db.getUser(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/user').post((request,response)=>
{
    let Userstable = {... request.body};
    Db.addUser(Userstable).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/update/user').post((request,response)=>
{
    let UpdateUserTable = {... request.body};
    Db.updateUserTable(UpdateUserTable).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/activate').post((request,response)=>
{
    let activationInfo = {... request.body};
    Db.activateUser(activationInfo).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/student').get((request,response)=>{
    
    Db.getAllStudentsinfo().then(result =>{
        response.json(result[0]);
    })
})

router.route('/activate/student').post((request,response)=>
{
    let activationInfo = {... request.body};
    Db.addToStudentTable(activationInfo).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/teacher').get((request,response)=>{
    
    Db.getAllTeachersinfo().then(result =>{
        response.json(result[0]);
    })
})

router.route('/activate/teacher').post((request,response)=>
{
    let activationInfo = {... request.body};
    Db.addToTeacherTable(activationInfo).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/course').get((request,response)=>{
    
    Db.getCourses().then(result =>{
        response.json(result[0]);
    })
})

router.route('/course/:id').get((request,response)=>{
    
    Db.getCourse(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/course').post((request,response)=>
{
    let Courses = {... request.body};
    Db.addCourse(Courses).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/student/courses').post((request,response)=>  
{
    let studentCourses = {... request.body};
    Db.assignCourseToStudent(studentCourses).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/student/courses/:id').get((request,response)=>{ 
    
    Db.getCourseListStudent(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/teacher/courses/:id').get((request,response)=>{  
    
    Db.getCourseListTeacher(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/teacher/courses').post((request,response)=> 
{
    let teacherCourses = {... request.body};
    Db.assignCourseToTeacher(teacherCourses).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/questions/:id').get((request,response)=>{ 
    
    Db.getQuestions_QB(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/questionbank').post((request,response)=>
{
    let Question = {... request.body};
    Db.addToQuestionBank(Question).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/questionpaper').get((request,response)=>{  //NOT WORKING //SP wrong
    
    Db.getQuestionPaper().then(result =>{
        response.json(result[0]);
    })
})

router.route('/questionpaper').post((request,response)=>
{
    let QuestionPaper = {... request.body};
    Db.createQuestionPaper(QuestionPaper).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/questionpaper/:id').get((request,response)=>{
    
    Db.getQuestionPaper(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/questionpaper/question').post((request,response)=> 
{
    let Questions = {... request.body};
    Db.addToQuestionPaper(Questions).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/questionpaper/question').put((request,response)=>
{
    let Questions = {... request.body};
    Db.deleteFromQuestionPaper(Questions).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/answers').get((request,response)=>{
    
    Db.getAnswersTable().then(result =>{
        response.json(result[0]);
    })
})

router.route('/answers').post((request,response)=>
{
    let Answers = {... request.body};
    Db.addToAnswersTable(Answers).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/update/password').put((request,response)=> //NOT WORKING
{
    let PasswordInfo = {... request.body};
    Db.updatePassword(PasswordInfo).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/update/answer').post((request,response)=>
{
    let OptionsUpdate = {... request.body};
    Db.updateSingleAnswer(OptionsUpdate).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/update/question').post((request,response)=>
{
    let QuestionUpdate = {... request.body};
    Db.updateSingleQuestion(QuestionUpdate).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/reactivatequestion').post((request,response)=>
{
    let question = {... request.body};
    Db.reactivateQuestion(question).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/activated/students').get((request,response)=>{
    
    Db.getActivatedStudents().then(result =>{
        response.json(result[0]);
    })
})

router.route('/activated/teachers').get((request,response)=>{
    
    Db.getActivatedTeachers().then(result =>{
        response.json(result[0]);
    })
})

router.use((request, response, next)=> { //middleware(used for authentication)
    console.log("middleware");
    next();
})

app.get('/', (req, res) => res.send('Home route!'));

app.listen(config.port, ()=>{
    console.log(`App is listening on url http://${ config.host }:${ config.port }`)
})

