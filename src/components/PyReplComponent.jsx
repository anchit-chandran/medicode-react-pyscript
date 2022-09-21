import React from 'react'

const PyReplComponent = ({ replNum }) => {
    return (
        <div>
            <py-repl
                id={`my-repl${replNum}`}
                auto-generate='false'
                std-out={`output${replNum}`}
                std-err={`err-div`}>
            </py-repl>
            <div id={`output${replNum}`} class="replOutput"></div>
        </div>
    )
}

export default PyReplComponent