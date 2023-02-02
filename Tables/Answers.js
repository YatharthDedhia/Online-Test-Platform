class Answers{
    constructor(AnswerId, QuestNo, Answer, isCorrect, Weightage){
        this.AnswerId = AnswerId;
        this.QuestNo = QuestNo;
        this.Answer = Answer;
        
        this.isCorrect = isCorrect;
        this.Weightage = Weightage;
    }
}

module.exports = Answers;