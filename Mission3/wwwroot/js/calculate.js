$("#submitButton").click(function () {
    //if ($("#assign").val() > 100) {
    //    alert("You cannot enter a score higher than 100!");
    //} else { a = $("#assign").val() * .55; }
    //if ($("#assign").val() > 100){
    //    alert("You cannot enter a score higher than 100!");
    //} else { b = $("#group").val() * .05; }
    //if ($("#assign").val() > 100){
    //    alert("You cannot enter a score higher than 100!");
    //} else { c = $("#quiz").val() * .10; }
    //if ($("#assign").val() > 100){
    //    alert("You cannot enter a score higher than 100!");
    //} else { d = $("#exam").val() * .20; }
    //if ($("#assign").val() > 100){
    //    alert("You cannot enter a score higher than 100!");
    //} else { e = $("#intex").val() * .10; }


    a = $("#assign").val() * .55;
    b = $("#group").val() * .05;
    c = $("#quiz").val() * .10;
    d = $("#exam").val() * .20;
    e = $("#intex").val() * .10;

    finalGrade = a + b + c + d + e;

    if (finalGrade >= 94) {
        letterGrade = 'A'
    } else if (finalGrade >= 90) {
        letterGrade = 'A-'
    } else if (finalGrade >= 87) {
        letterGrade = 'B+'
    } else if (finalGrade >= 84) {
        letterGrade = 'B'
    } else if (finalGrade >= 80) {
        letterGrade = 'B-'
    } else if (finalGrade >= 77) {
        letterGrade = 'C+'
    } else if (finalGrade >= 74) {
        letterGrade = 'C'
    } else if (finalGrade >= 70) {
        letterGrade = 'C-'
    } else if (finalGrade >= 67) {
        letterGrade = 'D+'
    } else if (finalGrade >= 64) {
        letterGrade = 'D'
    } else if (finalGrade >= 60) {
        letterGrade = 'D-'
    } else {
        letterGrade = 'E'
    }


    // OUTPUT RESULTS

    finalGrade = finalGrade.toFixed(2);
    alert("Your final grade is " + finalGrade + "%, which is a(n) " + letterGrade + "!");
    //$("#result").html("Your final grade is " + finalGrade + "%, which is a(n) " + letterGrade + "!")
}

);









/*function calculate() {

    // Initialize variables
    var grade = 0;
    var weight = 0;
    var gxw = 0;
    var finalGrade = 0;
    var totalGxw = 0;
    var totalWeight = 0;
    // Create array of all "input" elements within the parent element
        var input = $("#coursework").find("input");


    // Loop thru the array and get every third result
    for (var i = 0; i < input.length; i += 3) {

        // Get val()s from arry
        grade = input[i + 1].text();
        weight = input[i + 2].text()


        // Check to verify the both selects are not empty
        if (grade.length > 0 && weight.length > 0) {

            grade = parseFloat(grade);
            weight = parseFloat(weight);
            gxw = grade * weight;

        } else { // Assign zero val() if either select is empty

            grade = 0;
            weight = 0;
            gxw = 0;

        }

        // Check to make sure the input is a number, then add up needed val()s
        if (gxw >= 0 && grade >= 0 && weight > 0) {

            totalWeight = totalWeight + weight;
            totalGxw = totalGxw + gxw;


        } else {

            grade = 0;
            gxw = 0;
            weight = 0;

        }

    }

    // Convert inputs to numbers

    // Add the final grade weight with the weights from the coursework
    // Calculate final grade
    finalGrade = totalGxw / 100

    if (finalGrade >= 94) {
        letterGrade = 'A'
    } else if (finalGrade >= 90) {
        letterGrade='A-'
    } else if (finalGrade >= 87){
        letterGrade = 'B+'
    } else if (finalGrade >= 84) {
        letterGrade = 'B'
    } else if (finalGrade >= 80) {
        letterGrade = 'B-'
    } else if (finalGrade >= 77) {
        letterGrade = 'C+'
    } else if (finalGrade >= 74) {
        letterGrade = 'C'
    } else if (finalGrade >= 70) {
        letterGrade = 'C-'
    } else if (finalGrade >= 67) {
        letterGrade = 'D+'
    } else if (finalGrade >= 64) {
        letterGrade = 'D'
    } else if (finalGrade >= 60) {
        letterGrade = 'D-'
    } else {
        letterGrade = 'E'
    }


    // OUTPUT RESULTS 

  //finalGrade = finalGrade.toFixed(2);
    $("#output").innerHTML = "The sum of the weight of all your coursework is equal to " + finalGrade + "%. This means you received an " + letterGrade + ".";
}
*/