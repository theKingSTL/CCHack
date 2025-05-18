import { useState } from "react"

export default function WordForm({type, updateFormInfo}){
    // let [formContent, setFormContent] = useState("")

    function handleOnChange(e){
        // setFormContent(e.target.value)
        e.preventDefault()
        updateFormInfo(e.target.value, e.target.name)

    }
    // console.log(formContent)

    
    // updateWordInfo(){

    // }
    

    return(
        <div>
            <label>{type}</label>
            <input name={type} onChange={handleOnChange}></input>
        </div>
    )
}