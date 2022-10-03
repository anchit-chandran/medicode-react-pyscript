import React from 'react'


const PyReplComponent = ({ replNum }) => {


    return (
        <div>
            {/* <py-repl
                id={`my-repl${replNum}`}
                auto-generate='false'
                output-mode='replace'
                std-out={`output${replNum}`}
                std-err={`err-div`}
                >
            </py-repl>
            <div id={`output${replNum}`} className="replOutput"></div> */}
            <iframe src="https://trinket.io/embed/python3/76d90b2e38" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
        </div>
    )
}

export default PyReplComponent