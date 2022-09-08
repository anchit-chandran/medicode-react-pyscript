import React from 'react'
import PyReplComponent from './PyReplComponent'

const Task1 = ({ }) => {
    return (
        <>
            <div class="row p-2">
                <div class="col">
                    <p>Similar to English, you write Python code in a specific way.</p>
                    <p>You'll understand this properly by writing your own code!</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h4>📖 Hello World!</h4>
                    <div class="row">
                        <div class="col-lg-6">
                            <ol>
                                <li>
                                    <p><input type="checkbox" /> Type your name in the coding cell and run the cell
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div class="col-lg-6">
                            <PyReplComponent/>
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}

export default Task1