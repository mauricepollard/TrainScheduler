
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCE4BnzCwDrguqtrxy4qn5fNdvMj_AjpkQ",
    authDomain: "train-bb343.firebaseapp.com",
    databaseURL: "https://train-bb343.firebaseio.com",
    projectId: "train-bb343",
    storageBucket: "",
    messagingSenderId: "1033765644861"
};
firebase.initializeApp(config);

var database = firebase.database();

var todaysDate = new Date();
var time = todaysDate.getHours() + ":" + todaysDate.getMinutes();
//console.log(time);
var increment = 0;

$("#add-train").on("click", function (event) {

    event.preventDefault();


    var trainName = $("#train-name-input").val();
    var destination = $("#destination-input").val();
    var trainTime = $("#train-time-input").val();
    var frequency = $("#frequency-input").val();
    var minutesaway = $("#minutes-input").val();

    database.ref().set({
        trainName: trainName,
        destination: destination,
        trainTime: trainTime,
        frequency: frequency,
        minutesaway: minutesaway
    });


});



database.ref().on("value", function (snapshot) {



    $("#train-name-display").text(snapshot.val().trainName);
    $("#destination-display").text(snapshot.val().destination);
    $("#train-time-display").text(snapshot.val().trainTime);
    $("#frequency-display").text("Every "+snapshot.val().frequency+ " Minutes");
    $("#minutes-display").text(snapshot.val().minutesaway + " Minutes");
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});
