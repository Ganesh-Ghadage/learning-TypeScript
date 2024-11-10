interface User2 {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User2 {
    githubToken: string
}

interface Admin2 extends User2 {
    role: "admin" | "ta" | "learner"
}

const ganesh: Admin2 = { dbId: 22, email: "h@h.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "ganesh10", off: 10) => {
    return 10
}
}
ganesh.email = "h@hc.com"
// ganesh.dbId = 33