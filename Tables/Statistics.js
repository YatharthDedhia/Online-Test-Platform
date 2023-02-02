class Statistics{
    constructor(QuestNo,PaperCode, CorrectlyAnswered, IncorrectlyAnswered,Unattempted){
        
        this.QuestNo = QuestNo;
        this.PaperCode = PaperCode;
        this.CorrectlyAnswered = CorrectlyAnswered;
        
        this.IncorrectlyAnswered = IncorrectlyAnswered;
        this.Unattempted = Unattempted;
    }
}

module.exports = Statistics;