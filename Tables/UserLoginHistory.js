class UserLoginHistory{
    constructor(UserId, PreviousLoginDateTime){
        this.UserId = UserId;
        this.PreviousLoginDateTime = PreviousLoginDateTime;
    }
}

module.exports = UserLoginHistory;