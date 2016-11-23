import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import Login from '../components/Login'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page, getdata } = this.props
    const { getPhotos } = this.props.pageActions
    return (
    <div>
      <User name={user.name} />
      <Login getPhotos={getPhotos} users={getdata.users} github={getdata.github} />
      <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>
    </div>
    )
  }
}

function mapStateToProps(state) {
    console.log(state)
  return {
    user: state.user,
    page: state.page,
    getdata: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)