import React from 'react'

const button = ({text, click}) => (
    <button className="button" onClick={click}>
        {text}
    </button>
)

export default button
