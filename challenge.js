// As a user, I should see the timer increment every second once the page has loaded.
const counter = document.querySelector('h1.counter');

function incrementCounter() {
    count = parseInt(counter.textContent);
    window.setInterval(
        function() {
        count += 1;
        counter.textContent = count;
    }, 1000);
};

document.addEventListener("DOMContentLoaded", function() {
    console.log("the page is loaded");
});


// As a user, I can manually increment and decrement the counter as I like.
// As a user, I can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number.
// As a user, I can pause the game, which should disable all buttons except the pause button. The pause button should then show the text "resume."



// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
const list = document.getElementById("list");
const submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    console.log('clicked!')
});

function addComment() {

};