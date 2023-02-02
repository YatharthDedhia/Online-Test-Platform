const Db = require('./dboperations2');
// const config = require('./config');

// const UserTable = require('../Tables/UserTable');
var Userstable = require('./Tables/UserTable');
const userRouter = require('./api/user/user.router');
// var Course = require('./Tables/Courses');

// var express = require('express');
// var bodyParser = require('body-parser');

// var cors = require('cors');
// const { request, response } = require('express');
// var app = express();
// var router = express.Router();

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', router);

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);
app.use("/", userRouter);

router.use((request, response, next)=> { //middleware(used for authentication)
    // console.log("middleware");
    next();
})

router.route('/user').get((request,response)=>{
    
    Db.getUsers().then(result =>{
        response.json(result);
    })
})

router.route('/user/:id').get((request,response)=>{
    
    Db.getUser(request.params.id).then(result =>{
        response.json(result);
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
        response.json(result);
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
        response.json(result);
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
        response.json(result);
    })
})

router.route('/course/:id').get((request,response)=>{
    
    Db.getCourse(request.params.id).then(result =>{
        response.json(result);
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
        response.json(result);
    })
})

router.route('/teacher/courses/:id').get((request,response)=>{  
    
    Db.getCourseListTeacher(request.params.id).then(result =>{
        response.json(result);
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

router.route('/questionbank/:id').get((request,response)=>{ 
router.route('/questionbank/:id').get((request,response)=>{ 
    
    Db.getQuestions_QB(request.params.id).then(result =>{
        response.json(result);
    })
})
router.route('/qbaf/:id').get((request,response)=>{ 
    
    Db.getQuestionsandA_QB(request.params.id).then(result =>{
        
        response.json(result);
        
    })
})

router.route('/allutests').get((request,response)=>{ 
    
    Db.DisplayAllUpcomingTests(request.params.id).then(result =>{
        
        response.json(result);
        
    })
})

router.route('/allctests').get((request,response)=>{ 
    
    Db.DisplayAllCompletedTests(request.params.id).then(result =>{
        
        response.json(result);
        
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

// router.route('/questionpaper').get((request,response)=>{  
    
//     Db.getQuestionPaper().then(result =>{
//         response.json(result);
//     })
// })

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
        response.json(result);
    })
})


router.route('/attemptedlist/:id').get((request,response)=>{
    
    Db.getAttemptedList(request.params.id).then(result =>{
        response.json(result);
    })
})

router.route('/qplist/:id').get((request,response)=>{
    
    Db.getQuestionPaperListPerCourse(request.params.id).then(result =>{
        response.json(result);
    })
})


router.route('/qpanalytics/:id').get((request,response)=>{
    
    Db.getQPaperAnalytics(request.params.id).then(result =>{
        response.json(result);
    })
})

router.route('/qptotalmarks/:id').get((request,response)=>{
    
    Db.getQPTotalMarks(request.params.id).then(result =>{
        response.json(result);
    })
})

router.route('/totalmarksallstuds/:id').get((request,response)=>{
    
    Db.getTotalMarksAllStudents(request.params.id).then(result =>{
        response.json(result);
    })
})


// router.route('/totalmarkssinglestud/:id/:id').get((request,response)=>{
    
//     Db.getTotalMarksSingleStudent(request.params.id).then(result =>{
//         response.json(result);
//     })
// })



router.route('/studentschedule/:id').get((request,response)=>{
    
    Db.getStudentSchedule(request.params.id).then(result =>{
        response.json(result);
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
        response.json(result);
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

router.route('/update/password').post((request,response)=> //NOT WORKING
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
        response.json(result);
    })
})

router.route('/activated/teachers').get((request,response)=>{
    
    Db.getActivatedTeachers().then(result =>{
        response.json(result);
    })
})

router.route('/unactivated/teachers').get((request,response)=>{
    
    Db.getUnActivatedTeachers().then(result =>{
        response.json(result);
    })
})

router.route('/unactivated/students').get((request,response)=>{
    
    Db.getUnActivatedStudents().then(result =>{
        response.json(result);
    })
})


router.route('/unactivated/users').get((request,response)=>{
    
    Db.getUnActivatedUsers().then(result =>{
        response.json(result);
    })
})
router.route('/studentresponse').post((request,response)=>
{
    let sresponse = {...request.body};
    Db.RecordStudentResponse(sresponse).then(result=>
        {
            response.status(201).json(result);
        })
    }
)

router.route('/altercourse').post((request,response)=>
{
    let ac = {...request.body};
    Db.alterCourse(ac).then(result=>
        {
            response.status(201).json(result);
        })
    }
)




var port = process.env.PORT||8090;
app.listen(port);
console.log('API is running at ' + port);