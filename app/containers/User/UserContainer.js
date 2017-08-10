import React, { PropTypes } from 'react'
import { User } from 'components'
import { connect } from 'react-redux'
const UserContainer = React.createClass({
  propTypes: {
    noUser: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    duckIds: PropTypes.array.isRequired,
  },
  render () {
    return (
      <User
        noUser={this.props.noUser}
        name={this.props.name}
        isFetching={this.props.isFetching}
        error={this.props.error}
        duckIds={this.props.duckIds} />
    )
  },
})

function mapStateToProps ({users}, props) {
  const specificUsersDucks = usersDucks[props.routePrams.uid]
  const user = users[props.routeParams.uid]
  const noUser = typeof user === 'undefined'
  return {
    noUser,
    isFetching: users.isFetching || usersDucks.isFetching,
    error: users.error || usersDucks.error,
    duckIds: specificUsersDucks ? specificUsersDucks.ducksIds : []
  }
}

export default connect(
  mapStateToProps
)(UserContainer)