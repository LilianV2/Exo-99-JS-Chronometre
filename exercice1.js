// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let a = 0;
let countUp = function() {
    let counter = setTimeout(function() {
        seconds.innerHTML++
        (a <= 60) ? countUp() : null;
    }, 1000)
};

countUp();

// How can you make it stop counting?
let stopCountUp = function() {
    countUp = null
};
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

