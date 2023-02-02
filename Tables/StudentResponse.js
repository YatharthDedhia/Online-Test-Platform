class StudentResponse{
    constructor(StudentResponseID,UserID,PaperCode,QuestNo,AnswerId,CreatedDateTime){
        this.StudentResponseID = StudentResponseID;
        this.UserID = UserID;
        this.PaperCode = PaperCode;
        this.QuestNo = QuestNo;
        
        this.AnswerId = AnswerId;
        this.CreatedDateTime = CreatedDateTime
       
        
    }
}

module.exports = StudentResponse;