import React, {useState} from 'react'

export default function TextArea() {
    const [text, setText] = useState("Yo raha Text")
    function kantaLaga() {
        setText("Kya Baat Hai");
        console.log(text)
    }
    let Changee = (e) =>{
        setText(e.target.value)
    }
    return(
        <>  
  <form>
     <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Enter the Fckin Text</label>
        <textarea className="form-control" value={text} onChange={Changee} id="exampleFormControlTextarea1" rows="3"></textarea>
        <button type="button" onClick={kantaLaga} className="btn btn-primary">Primary</button>
     </div>
 </form>
        
        </>
    )
}