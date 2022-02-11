import React from 'react'

function Input(props) {
  return (
    <div className="input">
        <form onSubmit={props.onSubmit}>
            <input className="input-box" onChange={props.onChange} value={props.userInput} placeholder="Enter your question" />
            <br/>
            <br/>
            <button className="button"onClick={props.onSubmit}>Ask the Magic Eightball</button>
        </form>
    </div>
  )
}

export default Input