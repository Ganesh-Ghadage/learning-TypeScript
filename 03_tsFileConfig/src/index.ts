class User {
    email: string   // public by default
    public name: string // in TS public is accessible anywhere in code
    private isActive: boolean // in TS private is accessible only in class itself not even in child class
    readonly city: string = "Madha"

    constructor(email: string, name: string, isActive: boolean){
        this.email = email
        this.name = name
        this.isActive = isActive
    }
}

// another simple way of writing is

class NewUser {

    private _courseNum = 1       
    protected _courseName = 'TypeScript'  // in TS proceted is accesible only in class and its child classes
    readonly city: string = "Madha"

    constructor(    // in this need to mention access modifiers expilicitly
        public email: string, 
        public name: string, 
        private isActive: boolean
    ){}

    private deleteToken(): void{
        console.log("Token Deleted");
    }

    get getAppleEmail(): string {
        return `apple-${this.email}`
    }

    get getCourseNum(): number {
        return this._courseNum
    }

    set setCourseNum(num: number){
        if(num <= 1){
            throw new Error("Course Number should be More than 1")
        }
        this._courseNum = num
    }
}

class SubUser extends NewUser {
    isFamily: boolean = true

    chnageCourse(): void {
        this._courseName = 'Classes in TypeScript'
    }
}

const ganesh = new User('g@gg.com', 'Ganesh', true)

// ganesh.city = "pune"

console.log(ganesh)