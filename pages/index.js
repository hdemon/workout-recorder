import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../store'
import Layout from '../components/layout'
import Main from '../components/main'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Layout>
        <Main />
      </Layout>
    )
  }
}

export default connect()(Index)
