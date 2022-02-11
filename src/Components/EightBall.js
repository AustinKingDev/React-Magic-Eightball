import React from 'react'


function EightBall(props) {
  return (
    <div>
        <div className='eightball'>
            <div className='eightball-text'>
                <div className='response'>{props.response && props.response.magic.answer}</div>
            </div>
        </div>
    </div>
  )
}

EightBall.propTypes = {}

export default EightBall
