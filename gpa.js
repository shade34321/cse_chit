function calculateGPA(){
	var it_3153 = document.getElementById("3153").value;
	var it_3503 = document.getElementById("3503").value;
	var it_4153 = document.getElementById("4153").value;
	var it_3883 = document.getElementById("3883").value;
	var it_4323 = document.getElementById("4323").value;

	var gpa = (it_3153+it_3503+it_4153+it_3883+it_4323)/5;

	if (gpa < 3.5){
		$("body").append("<p>We're sorry. Please try again next year!</p>");
	} else {
		$("body").append("<p>Congratulations! Please send your resume to <a href=\"mailto:cwhite5@spsu.edu\">Curtis White</a></p>");
	}
}
