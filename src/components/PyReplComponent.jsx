import React from 'react'

const PyReplComponent = ({ task }) => {
    return (
        <div>
            <py-repl id={`my-repl${task}`} auto-generate="false" std-out="output" std-err="err-div">
            </py-repl>
            <div id="output" class=""></div>
            <div id="err-div"></div>
        </div>
    )
}

export default PyReplComponent