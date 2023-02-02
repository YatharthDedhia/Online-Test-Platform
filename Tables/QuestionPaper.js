class QuestionPaper{
    constructor(PaperCode, CourseID,  TeacherId,TestName,Date,StartTime,EndTime,Link,Duration){
        this.PaperCode = PaperCode;
        this.CourseID = CourseID;
        
        this.TeacherId = TeacherId;
        this.TestName = TestName;
        this.Date = Date;
        this.StartTime = StartTime;
        this.EndTime = EndTime;
        this.Link = Link;
        this.Duration = Duration
    }
}

module.exports = QuestionPaper;