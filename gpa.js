function calculateGPA(){
	var grades = new Array();
	
	grades[0] = document.getElementById("3153").value; //it_3153
	grades[1] = document.getElementById("3503").value; //it_3503
	grades[2] = document.getElementById("4153").value; //it_4153
	grades[3] = document.getElementById("3883").value; //it_3883
	grades[4] = document.getElementById("4323").value; //it_4323

	for(var i = 0; i<grades.length;i++){
		if(grades[i] === 'A' || grades[i] === 'a'){
			grades[i] = 4;
		} else if(grades[i] === 'B' || grades[i] === 'b'){
			grades[i] = 3;
		} else if(grades[i] === 'C' || grades[i] === 'c'){
			grades[i] = 2;
		} else if(grades[i] === 'D' || grades[i] === 'd'){
			grades[i] = 1;
		} else {
			grades[i] = 0;
		}
	}

	var gpa = 0;
	
	for(var i = 0; i<grades.length;i++){
		gpa+=grades[i];
	}
	
	gpa /= 5;
	
	var div = document.getElementByID('content');
	
	if (gpa < 3.5){
		//$("body").append("<p>We're sorry. Please try again next year!</p>");
		var content = document.createTextNode("<p>We're sorry. Please try again next year!</p>");
		div.appendChild(content);
	} else {
		//$("body").append("<p>Congratulations! Please send your resume to <a href=\"mailto:cwhite5@spsu.edu\">Curtis White</a></p>");
		var content = document.createTextNode("<p>Congratulations! Please send your resume to <a href=\"mailto:cwhite5@spsu.edu\">Curtis White</a></p>");
		div.appendChild(content);
	}
}