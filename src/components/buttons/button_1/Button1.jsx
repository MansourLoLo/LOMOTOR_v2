import "./Button1.css"

export default function Button1({text, onClick, submitType }){
  
  return(
    <button type={submitType ? "submit" : "text"} className="btn" onClick={onClick}>
      {text}
    </button>
  )

}
