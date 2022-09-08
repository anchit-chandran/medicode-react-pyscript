import React from 'react'

const LearningObjectives = ({content}) => {
    const { learningobjsBulletPoints } = content
    return (
        <div class="row learning-objectives-row p-2">
            <div class="col learning-objectives-col">
                <ul class="learning-objectives-list">
                    {learningobjsBulletPoints.map((learningObj) =>
                        <li key={learningObj}>{learningObj}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default LearningObjectives