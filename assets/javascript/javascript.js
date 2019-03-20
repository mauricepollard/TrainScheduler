
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


$("#add-train").on("click", function (event) {

    event.preventDefault();


    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var trainTime = $("#train-time-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    var minutesaway = $("#minutes-input").val().trim();

    database.ref().push({
        trainName: trainName,
        destination: destination,
        trainTime: trainTime,
        frequency: frequency,
        minutesaway: minutesaway
    });
    //  $("#train-name-input").val(" ");
    //  $("#destination-input").val(" ");
    //  $("#train-time-input").val(" ");
    //  $("#frequency-input").val(" ");
    //  $("#minutes-input").val(" ");


});



database.ref().on("child_added", function (snapshot) {
    var newRow = $("<div>");

    var col1 = $("<div>");
    var P1 = $("<p>");

    var col2 = $("<div>");
    var P2 = $("<p>");

    var col3 = $("<div>");
    var P3 = $("<p>");

    var col4 = $("<div>");
    var P4 = $("<p>");

    var col5 = $("<div>");
    var P5 = $("<p>");
    
    
    newRow.attr("class", "row");
    
    var col1 = $("<div>");
    col1.attr("class", "col-sm");
    col1.append(P1);
    P1.text(snapshot.val().trainName);
    newRow.append(col1);
    
    
    var col2 = $("<div>");
    col2.attr("class", "col-sm");
    col2.append(P2);
    P2.text(snapshot.val().destination);
    newRow.append(col2);
    
    var col3 = $("<div>");
    col3.attr("class", "col-sm");
    col3.append(P3);
    P3.text(snapshot.val().trainTime);
    newRow.append(col3);
    
    var col4 = $("<div>");
    col4.attr("class", "col-sm");
    col4.append(P4);
    P4.text(snapshot.val().frequency);
    newRow.append(col4);

    var col5 = $("<div>");
    col5.attr("class", "col-sm");
    col5.append(P4);
    P5.text(snapshot.val().minutesaway);
    newRow.append(col5);

    $("#display").prepend(newRow);

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});
