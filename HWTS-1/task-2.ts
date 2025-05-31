function validatePassword(password:string): boolean{
    let Space:number = 0
    for (let i = 0; i < password.length; i++){
        if (password[i] === ' '){Space++}    
    }
    if (password.length === Space) throw new Error('Password is empty')
    const upper:boolean = /[A-Z]/.test(password);
    const lower:boolean = /[a-z]/.test(password);
    const number:boolean = /[0-9]/.test(password);
    const length:boolean = password.length >= 8;
    return upper && lower && number && length
};