import React from 'react'

function Students({students}) {

    return students.map((student, index) => (
        <div className={'student-row'} key={index}>
                    <div className={'row-name'}>{student.name}</div>
                    <div className={'row-desc'}>{student.description}</div>
                    <div className={'row-email'}>{student.email}</div>
                    <div className={'row-tag'}>{student.tag}</div>
        </div>
    ))
}

export default Students
