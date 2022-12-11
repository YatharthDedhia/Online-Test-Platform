class Answers{
    constructor(AnswerId, QuestNo, Answer,CorrOpt, isCorrect, Weightage){
        this.AnswerId = AnswerId;
        this.QuestNo = QuestNo;
        this.Answer = Answer;
        this.CorrOpt = CorrOpt;
        this.isCorrect = isCorrect;
        this.Weightage = Weightage;
    }
}

module.exports = Answers;