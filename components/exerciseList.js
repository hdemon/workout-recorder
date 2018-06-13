import React from 'react'
import Exercise from './exercise'
import Interval from './interval'

const ExerciseList = ({ exerciseList }) =>
    <div>
        {exerciseList.map((item) => {
            if (item.type === 'exercise') {
                return <Exercise {...item.data} />
            } else if (item.type === 'interval') {
                return <Interval {...item.data} />
            }
        })}
    </div>

export default ExerciseList
