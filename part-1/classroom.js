/************************************************************/
/*   It is required to use Array.prototype methods          */
/*   when iterating over a classroom's array of students.   */
/************************************************************/
function Classroom(students) {
	this.students = students
}

Classroom.prototype.find = function(name) {
	this.students.forEach(function(student) {
		named = []
		if (student.firstName === name) {
			named.push(student);
		}
	})
	return named[0]
}

Classroom.prototype.honorRollStudents = function() {
	highAchievers = []
	this.students.forEach(function(student) {
		if (student.averageScore() >= 95) {
			highAchievers.push(student);
		}
	})
	return highAchievers;
}