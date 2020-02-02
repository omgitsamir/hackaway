const video = document.getElementById("video");
const emoji = document.getElementById("emoji");
let currentExprs = {
  happy: 0,
  sad: 0,
  neutral: 1
};

const emojiMap = {
  happy: "x1F600",
  sad: "x1F62A",
  neutral: "x1F610",
  angry: "x1F620",
  fearful: "x1F628",
  disgusted: "x1F974",
  surprised: "x1F92A",
}

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("../vendor/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("../vendor/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("../vendor/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("../vendor/models")
]).then(startVideo);

function startVideo() {
  navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;
    if (navigator.getUserMedia) {
    navigator.getUserMedia(
      { video: {} },
      stream => (video.srcObject = stream),
      err => console.error(err)
    );
  }
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    //console.log(detections[0].expressions);
    if (detections) {
      currentExprs = detections[0].expressions;
      const result = findMax(detections[0].expressions);
      emoji.innerHTML = `&#${emojiMap[result]}`;
    }
  }, 400);
});

function findMax(exprIn){
  let maxValue= [0,0];
  for (let one of Object.entries(exprIn)) {
    if(one[1] > maxValue[1]) {
      maxValue = one;
    }
  }
  return maxValue[0];
}

function onStart(){
  //console.log("i have been clicked")
  let splashScreen = document.getElementById('splashScreen')
  splashScreen.style.display = "none";

  let second = 3;
  var x = setInterval(function() {
    document.getElementById("countDown").innerHTML =  second - 1;
    second -= 1;
    if(second == 0){
      console.log("here");
      document.getElementById("countDown").innerHTML = "Start";
      clearInterval(x);
      setTimeout(() => {
        document.getElementById("countDown").style.display = "none";
      }, 1000)
    }
  }, 1400);
}


