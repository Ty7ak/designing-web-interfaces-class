import React, {useState} from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function hashCode(str) {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

const items = [
    {
        id: 0,
        name: 'Python'
    },
    {
        id: 1,
        name: 'JavaScript'
    },
    {
        id: 2,
        name: 'C++'
    },
    {
        id: 3,
        name: 'PHP'
    },
    {
        id: 4,
        name: 'Java'
    },
    {
        id: 5,
        name: 'React'
    },
    {
        id: 6,
        name: 'Assembly'
    }
  ]

function StudentForm(props) {
const [nameInput, setName] = useState('');
const [descriptionInput, setDescription] = useState('');
const [emailInput, setEmail] = useState('');
const [tagInput, setTag] = useState('');

const handleNameChange = e => {
    setName(e.target.value);
    console.log(tagInput);
}

const handleDescriptionChange = e => {
    setDescription(e.target.value);
}

const handleEmailChange = e => {
    setEmail(e.target.value);
}

const handleOnSelect = (item) => {
    setTag(item.name)
}

const handleSumbit = e => {
    e.preventDefault();

    props.onSubmit({
        id: hashCode(nameInput),
        name: nameInput,
        description: descriptionInput,
        email: emailInput,
        tag: tagInput
    });
     
    setName('');
    setDescription('');
    setEmail('');
};
 
    return (
        <form className="student-form" onSubmit={handleSumbit}>
            <input 
                placeholder="Name" 
                value={nameInput} 
                name="name" 
                className='name-input'
                onChange={handleNameChange}
            />
            <input 
                placeholder="Descritpion" 
                value={descriptionInput} 
                name="description" 
                className='description-input'
                onChange={handleDescriptionChange}
            />
            <input 
                placeholder="E-mail" 
                value={emailInput} 
                name="email" 
                className='email-input'
                onChange={handleEmailChange}
            />
            <div className="tag-box">
                <ReactSearchAutocomplete
                    items={items}
                    onSelect={handleOnSelect}
                    showIcon={false}
                    placeholder="Tag"
                    styling={
                        {
                            padding: "14px 32px 14px 16px",
                            borderRadius: "4px 0 0 4px",
                            backgroundColor: "#161a2b",
                            hoverBackgroundColor: "#5d0cff",
                            color: "#fff",
                            border: "2px solid #5d0cff",
                            outline: "none",
                        }
                    }
                />
            </div>  
            <button className="student-button">Add a student</button>            
        </form>
    )
}

export default StudentForm
