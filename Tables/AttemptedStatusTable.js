class AttemptedStatusTable{
    constructor(UserId, PaperCode, AttemptedStatus,Date){
        this.UserId = UserId;
        
        this.PaperCode = PaperCode;
        this.AttemptedStatus = AttemptedStatus;
       
        this.Date = Date;
    }
}

module.exports = AttemptedStatusTable;