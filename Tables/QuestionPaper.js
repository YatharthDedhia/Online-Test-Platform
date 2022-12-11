class QuestionPaper{
    constructor(PaperCode, CourseID, DurationHours, TeacherId, CourseName, CourseCode){
        this.PaperCode = PaperCode;
        this.CourseID = CourseID;
        this.DurationHours = DurationHours;
        this.TeacherId = TeacherId;
        this.CourseName = CourseName;
        this.CourseCode = CourseCode;
    }
}

module.exports = QuestionPaper;