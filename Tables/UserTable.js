class UserTable{
    constructor(UserId,Username,Password,FirstName,LastName,EmailId,MobileNo,LastLoginDate,DateOfBirth,Age,TypeId,ActivationStatus,Photo){
        this.UserId = UserId;
        this.Username = Username;
        this.Password = Password;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.EmailId = EmailId;
        this.MobileNo = MobileNo;
        this.LastLoginDate = LastLoginDate;
        this.DateOfBirth = DateOfBirth;
        this.Age = Age;
        this.TypeId = TypeId;
        this.ActivationStatus = ActivationStatus;
        this.Photo = Photo
    }
}

module.exports = UserTable;