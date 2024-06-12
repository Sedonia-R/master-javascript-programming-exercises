function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    score = score.toString();
    let grade;
    if(score >= 90 && score <= 99) {
        grade = 'A'
    } else if(score >= 80 && score <= 89) {
        grade = 'B'
    } else if(score >= 70 && score <= 79) {
        grade = 'C'
    } else if(score >= 60 && score <= 69) {
        grade = 'D'
    } else if(score >= 0 && score <= 59) {
        return 'F'
    } else if (score == 100) {
        return 'A+';
    } else {
        return 'INVALID SCORE'
    };
    if (score.endsWith(0) || score.endsWith(1) || score.endsWith(2)) {
        return `${grade}-`;
    } else if (score.endsWith(8) || score.endsWith(9)) {
        return `${grade}+`;
    }
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
