import React from 'react'
import content from '../content'

const Cells = ({toShow, sectionName, content}) => {

    // console.log(content)

    return (
        <section class={`${sectionName} cell p-4 m-3 rounded-5`}>
            <h3 class='cellTitle'>{content.title}</h3>
            {/* line to show learning objectives if learning obj cell */}
            {toShow ? toShow : <></>}


        </section>
    )
}

export default Cells