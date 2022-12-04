let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function() {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
 video.srcObject = stream;
});

click_button.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');

    const img = document.getElementById('canvas');

// Load the model.
cocoSsd.load().then(model => {
 // detect objects in the image.
 model.detect(img).then(predictions => {
   console.log('Predictions: ', predictions);
   document.getElementById("pred").innerHTML = predictions[0].class;
 });
});
    
});