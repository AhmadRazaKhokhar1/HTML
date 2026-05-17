/*
urdu 100/55    %Age: 55%.     Grade: D
english 100/66    %Age: 66%.     Grade: C
computer 100/88    %Age: 88%.     Grade: A
pak std 45/33    %Age: 73%.     Grade: B

Total 345/242 70.14% B
*/

const subjects = [
    {
        subjectName:"urdu",
        totalMarks: 100,
        obtainedMarks: 55
    },
    {
        subjectName:"english",
        totalMarks: 100,
        obtainedMarks: 32
    },
    {
        subjectName:"computer",
        totalMarks: 100,
        obtainedMarks: 93
    },
    {
        subjectName:"pak stud",
        totalMarks: 100,
        obtainedMarks: 90
    }
];

const grades = {
    "A+": "A+",
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    F: "F",
}

const getGrades = (_percentage) => {
    if(_percentage >= 91){
        return grades["A+"];
    }
    else if (_percentage >= 81 && _percentage < 91){
        return grades.A;
    }
    else if (_percentage >= 71 && _percentage < 81){
        return grades.B
    }
    else if (_percentage >= 61 && _percentage < 71){
        return grades.C
    } else if(_percentage >= 50 && _percentage < 61){
        return grades.D
    }else{
        return grades.F
    }

}

const generateMarksSheet = (_subjects) =>{
    const gradedSubjects = [];
  for(let i =0; i <= _subjects.length-1; i++){
   const percentage = _subjects[i].obtainedMarks / _subjects[i].totalMarks * 100;
   const grade = getGrades(percentage);
   gradedSubjects.push({..._subjects[i], percentage:`${percentage.toFixed(0)}%`, grade});
  }
 logger(gradedSubjects)
}

generateMarksSheet(subjects);