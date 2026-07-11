enum Courses {
    "SWE_B_1"="SWE_B_1",
    "SWE_B_2"="SWE_B_2",
    "SWE_B_3"="SWE_B_3",
}

enum Role {
    PRINCIPLE="PRINCIPLE",
    STUDENT="STUDENT",
    TEACHER="TEACHER"
}

interface StudentInterface {
    fullName: string;
    phoneNumber: string;
    email?: string;
    course: Courses;
    role:Role
}


const studentObj:StudentInterface =  {
    fullName:"Ahmad",
    phoneNumber:"0323323122",
    email:"ahmadrazawebexpert@gmail.com",
    course:Courses.SWE_B_2,
    role:Role.STUDENT
}

const teacherObj:StudentInterface =  {
    fullName:"Ali",
    phoneNumber:"0312312321",
    email:"ahsdasert@gmail.com",
    course:Courses.SWE_B_2,
    role:Role.TEACHER
}


type Arr = (number)[];

const arr: Arr= [1,2,3,4]

