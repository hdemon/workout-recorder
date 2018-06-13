import {connect} from 'react-redux'
import Clock from './clock'
import Counter from './counter'
import ExerciseList from './exerciseList'

function Main ({ exerciseList, lastUpdate, light }) {
  return (
    <div>
      <ExerciseList exerciseList={exerciseList} />
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}

function mapStateToProps(state) {
  const { exerciseList, lastUpdate, light } = state
  return { exerciseList, lastUpdate, light }
}

export default connect(mapStateToProps)(Main)
