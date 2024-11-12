function toggleGradeInput() {
    var studentRadio = document.getElementById('student');
    var gradeInput = document.getElementById('gradeLevel');
    if (studentRadio.checked) {
        gradeInput.style.display = 'block';
    } else {
        gradeInput.style.display = 'none';
    }
}


function toggleAdditionalFields() {
    const yesRadio = document.getElementById("yes");
    const additionalFields = document.getElementById("additionalFields");

    if (yesRadio.checked) {
        additionalFields.style.display = "block";
    } else {
        additionalFields.style.display = "none";
    }
}


function showInstaPayNumber() {
    alert("InstaPay Transfer Number: 01014827229");
}

function showVodafoneNumber() {
    alert("Vodafone Cash Transfer Number: 01014827229");
}