import WordForm from "./WordForm"
import { useState } from "react";

export default function EnterWords(){

    let wordTypesArray = ["Politician", "Country", "Era", "Celebrity", "Industry", "Left or Right Wing", "Conflict", "Technology", "Surveilance Method"]
    let [formInfo, setFormInfo] = useState({})
    let [json, setJSON] = useState({})
    let jsonObj = {}

    function shuffleArray(array) {
        let i = array.length, j, temp;
        while (--i > 0) {
          j = Math.floor(Math.random() * (i + 1));
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
        return array
      }

    let randomWordTypes = shuffleArray(wordTypesArray).slice(0,4)

    function updateFormInfo(value, target){
        console.log(target, value)
        let newFormInfo = {...formInfo}
        newFormInfo[target] = value
        // formInfo = newFormInfo
        // console.log(newFormInfo)
        setFormInfo(newFormInfo)
        // return newFormInfo

        
    }
    console.log('fi', formInfo)
    // let inputArray = randomWordTypes.map((type, i)=>{
    //     return <WordForm updateFormInfo={updateFormInfo} key={i+type} type={type} index={i}/>
    // })

    function handleOnChange(e){
        // setFormContent(e.target.value)
        e.preventDefault()
        updateFormInfo(e.target.value, e.target.name)

    }

   
    
    function onSubmit(e){
        e.preventDefault()
        // console.log('submit-form',formInfo)
        // setFormInfo(formInfo)
        setJSON(JSON.stringify.formInfo)
        console.log()
        // setFormInfo({})
    }
    // console.log(json)

    return(
        <div className="enter_words">
            <h1>ENTER WORDS</h1>
            <form onSubmit={onSubmit}>
                <label>{randomWordTypes[0]}</label>
                <input name={randomWordTypes[0]} onChange={handleOnChange}></input>
                <label>{randomWordTypes[1]}</label>
                <input name={randomWordTypes[1]} onChange={handleOnChange}></input>
                <label>{randomWordTypes[2]}</label>
                <input name={randomWordTypes[2]} onChange={handleOnChange}></input>
                <label>{randomWordTypes[3]}</label>
                <input name={randomWordTypes[3]} onChange={handleOnChange}></input>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}