"use strict";
class takePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // complex calculation
        return 4;
    }
}
class instagram extends takePhoto {
    constructor(cameraMode, filter, collage) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.collage = collage;
    }
    clickPhoto() {
        console.log("Photo is cliked");
    }
}
const ganu = new instagram('front', 'none', 4);
ganu.getReelTime();
