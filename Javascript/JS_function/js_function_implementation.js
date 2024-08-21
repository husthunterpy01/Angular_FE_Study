function printContext() {
    var c = 5;
    if (true) {
        let i = 2; // local scope inside the block
        var b = 3; // more wider scope, in this case is the funcrtion
        console.log("The value of i in the block is " + i);
        console.log("The value of b in the block is " + b);
        console.log(c);
    }
    console.log("The value of b outside the block is " + b);
    //console.log("The value of i outside the block is" + i); // Reference error
}

printContext();

(function printHello() {
    var a = 5
    var b = 6;
    console.log(typeof(a + b));
})(); // Auto print the result in here

function playGame(gameType, level = 2) {
    console.log(`The gametype is ${gameType} with the level ${level}`);
}

playGame('Adventure');
playGame('Horror', 6);


studentScore = function() {
    console.log(3);
}

function printSchoolMembersInfo(towel) {
    var teacherName = "Martha";
    var teacherScore = 5;
    console.log(`The teacher in charge of the student is ${teacherName} with the score${teacherScore}`);
    if (towel == 'A') {
        console.log("The following student score is");
        studentScore();
    }
    studentScore();
}

printSchoolMembersInfo('A');