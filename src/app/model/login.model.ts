export class LoginModel{
    public username: String;
    public password: String;
    public rememberMe: boolean;
    public token: String;

    constructor(username: String, password:String, rememberMe: boolean, token: String){
        this.username = username;
        this.password = password;
        this.rememberMe = rememberMe;
        this.token = token;
    }
}