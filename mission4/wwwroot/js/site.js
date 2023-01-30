
// Write your JavaScript code.

$("#btnSend").click(function () {
    //event.preventDefault()
    $("#finalGrade").text("")

    var calculation = ((0.5 * $("#assignments").val()) + (0.1 * $("#groupproject").val()) + (0.1 * $("#quizzes").val()) + (0.1 * $("#midterm").val()) + (0.1 * $("#final").val()) + (0.1 * $("#intex").val()));
    var letter = ""
    if (calculation >= 94){
        letter = "A  ";
    } else if (calculation >= 90) {
        letter = "A-  ";
    } else if (calculation >= 87) {
        letter = "B+  ";
    } else if (calculation >= 84) {
        letter = "B  ";
    } else if (calculation >= 80) {
        letter = "B-  ";
    } else if (calculation >= 77) {
        letter = "C+  ";
    } else if (calculation >= 74) {
        letter = "C  ";
    } else if (calculation >= 70) {
        letter = "C-  ";
    } else if (calculation >= 67) {
        letter = "D+  ";
    } else if (calculation >= 64) {
        letter = "D  ";
    } else if (calculation >= 60) {
        letter = "D-  ";
    } else {
        letter = "E  ";
    }
    alert(letter + ": " + String(calculation));
    //$("#finalGrade").text(letter + ": " + String(calculation))
})
