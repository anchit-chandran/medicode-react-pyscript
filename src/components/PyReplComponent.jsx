import React from 'react'

const PyReplComponent = () => {
    return (
        <div><py-repl id="my-repl" auto-generate="false" std-out="output" std-err="err-div">
        </py-repl>
            <div id="output" class=""></div>
            <div id="err-div"></div></div>
    )
}

export default PyReplComponent