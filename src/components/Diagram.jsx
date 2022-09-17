import React from 'react'

const Diagram = ({ src, content, diagCaption }) => {
    return (
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
                <div class="card diagram text-center rounded m-2">
                    <img src={src} class='img-fluid rounded-top' />
                    <div class="card-body diagBody rounded-bottom">
                        <p class="card-text">{diagCaption}</p>
                    </div>
                </div>
            </div>
            <div className="col">
                {content}
            </div>
        </div>
    )
}

export default Diagram