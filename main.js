Webcam.set({
    width : 310,
    height : 300,
    img_format : "png",
    png_quality : 90,
    constraints : {facingMode : "environment"}
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapShot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = `<img id = 'capturedImage' src = ${data_uri}>`;
    });
    console.log("snapShot works")
}

console.log("ml5 version = ", ml5.version);
classifier = ml5.imageClassifier("MobileNet", modelLoaded);


function modelLoaded() {
    console.log("Model Loaded!");
}

function check() {
    img = document.getElementById("capturedImage");
    classifier.classify(img, gotResult);
    console.log("check works")
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("objectName").innerHTML = results[0].label;
        console.log("gotResults works")
    }
}