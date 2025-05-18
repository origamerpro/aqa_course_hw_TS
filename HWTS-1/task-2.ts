function validatePassword(password:string): boolean{
    let Space:number = 0
    for (let i = 0; i < password.length; i++){
        if (password[i] === ' '){Space++}    
    }
    if (password.length === Space) throw new Error('Password is empty')
    const Upper:boolean = /[A-Z]/.test(password);
    const Lower:boolean = /[a-z]/.test(password);
    const Number:boolean = /[0-9]/.test(password);
    const Length:boolean = password.length >= 8;
    return Upper && Lower && Number && Length
};