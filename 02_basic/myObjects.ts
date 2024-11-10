// const User = {
//     name: "Ganesh",
//     email: "Ganesh@lco.dev",
//     isAvtive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "Ganesh", isPaid: false, email: "h@h.com"}

// createUser(newUser)



// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number   // ? makes it optional
}

let myUser: User = {
    _id: "1245",
    name: "g",
    email: "g@g.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "g@gmail.com"
// myUser._id = "asa"





type User2 = {
    readonly _id: string[];
    name: string;
}

const myUser2: User2 = {
    _id: ['sdff','adda','afaf'],
    name: 'Ganesh'
}

myUser2._id.push('rtrw')

console.log(myUser2)

export {}
