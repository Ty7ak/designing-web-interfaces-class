import React, {useState} from 'react';
import StudentForm from './StudentForm';
import Students from './Students'

function StudentList() {
    const [students, setStudents] = useState([]);

    const addStudent = student => {
        // Don't allow empty inputs
        if(!student.name || /^\s*$/.test(student.name)){
            alert("Name can't be empty.")
            return; 
        }
        if(!student.description || /^\s*$/.test(student.description)){
            alert("Description can't be empty.")
            return; 
        }
        if(!student.email || /^\s*$/.test(student.email)){
            alert("Email can't be empty.")
            return; 
        }
        if(student.name.length > 32){
            alert("Name too long (maximum 32 characters)")
            return;
        }
        if(student.description.length > 200){
            alert("Description too long (maximum 300 characters)")
            return;
        }
        if(student.email.length > 32){
            alert("Email too long (maximum 32 characters)")
            return;
        }

        const newStudent = [student, ...students]

        setStudents(newStudent)
        console.log(student, ...students);
    }

    return (
        <div>
            <h1>Project Tinder</h1>
            <h2>By Maciej Tylak</h2>
            <StudentForm onSubmit={addStudent} />
            <Students students={students} />
        </div>
    )
}

export default StudentList
