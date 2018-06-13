import {connect} from 'react-redux'
import Clock from './clock'
import Counter from './counter'
import ExerciseList from './exerciseList'

function Main ({ exerciseList }) {
  return (
    <div>
      <ExerciseList exerciseList={exerciseList} />
    </div>
  )
}

function mapStateToProps(state) {
  const { exerciseList } = state
  return { exerciseList }
}

export default connect(mapStateToProps)(Main)
