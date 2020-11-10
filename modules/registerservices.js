class RegisterService{
    register = function(userObj){
       var usersTemp = JSON.parse(localStorage.getItem("USERS"));
       var users= usersTemp ? usersTemp:[];
       users.push(userObj);
       localStorage.setItem("USERS",JSON.stringify(users));
       let result="success";
       return result;
        }
        getAllUsers() {
            let users = JSON.parse(localStorage.getItem("USERS")) || [];
            return users;
        }
        isEmailExists(email) {
            let users = this.getAllUsers();
            let exists = false;
            for (let obj of users) {
                if (obj.email == email) {
                    exists = true;
                    break;
                }
            }
            return exists;
        }
}
