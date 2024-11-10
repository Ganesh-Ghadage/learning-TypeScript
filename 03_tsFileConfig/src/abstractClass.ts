abstract class takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract clickPhoto(): void 
    getReelTime(): number {
        // complex calculation
        return 4
    }
}

class instagram extends takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public collage: number
    ){
        super(cameraMode, filter)
    }

    clickPhoto(): void {
      console.log("Photo is cliked");
    }
}


const ganu = new instagram('front', 'none', 4)

ganu.getReelTime()