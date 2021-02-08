import React from 'react'
import { CoursePart } from './Content'



const Total: React.FunctionComponent<{courseParts: Array<CoursePart>}> = ({courseParts}) => {
    return (
        <p>
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
        </p>
    )
}

export default Total
