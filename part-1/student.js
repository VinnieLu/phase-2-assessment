/********************************************************/
/*   It is required to use a for loop                   */
/*   when iterating over a student's array of scores.   */
/********************************************************/

function Student(firstName, scores) {
	this.firstName = firstName.firstName;
	this.scores = firstName.scores;
}

Student.prototype.averageScore = function() {
	total = 0
	for(i=0;i<this.scores.length;i++){
		total += this.scores[i]
	}
	average = total / (this.scores.length)
	return Math.floor(average)
}

Student.prototype.letterGrade = function() {
	if (this.averageScore() >= 90) {
		return "A";
	}
	else if (this.averageScore() >= 80) {
		return "B";
	}
	else if (this.averageScore() >= 70) {
		return "C";
	}
	else if (this.averageScore() >= 60) {
		return "D";
	}
	else if (this.averageScore() < 60) {
		return "F";
	}
}