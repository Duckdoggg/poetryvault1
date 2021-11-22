
import React, { useState } from "react";
import { useHistory } from "react-router-dom"

import "./Form.css"

const PoemForm = ({updateFn, poemInfo}) => {

    let history = useHistory();

    let initialState = poemInfo
    if (!initialState) {
        initialState = {title: '', author: '', text: ''}
    }

    const [formInfo, setFormInfo] = useState(initialState)

    const updateField = (event) => {
        // which input element is this
        const name = event.target.attributes.name.value
        console.log(name, event.target.value)
        if (name === "title") {
            setFormInfo({...formInfo, title: event.target.value})
        } else if (name === "author") {
            setFormInfo({...formInfo, author: event.target.value})
        } else if (name === "text") {
            setFormInfo({...formInfo, text: event.target.value})

        }
    }

    const formHandler = (event) => {
        event.preventDefault()
        console.log("Form submitted: ", formInfo)
        updateFn(formInfo)
        setFormInfo(initialState)
        //redirect back to list
        history.push('/')
    }
    
   
    return (
        <form onSubmit={formHandler}>
            <ul className = "formStyle">
                <li>
                    <label htmlFor="title">Poem Title</label>
                    <input name="title" required onChange={updateField} value={formInfo.title}></input>
                </li>
                <li>
                    <label htmlFor="author">Poem Author</label>
                    <input name="author" required onChange={updateField} value={formInfo.author}></input>
                </li>
                <li>
                    <label htmlFor="text">Poem Text</label>
                    <textarea name="text" required onChange={updateField} value={formInfo.text} />
                </li>     
            <input type="submit"></input> 
            </ul>
        </form>
    )
}

export default PoemForm