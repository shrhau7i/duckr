import React, { PropTypes } from 'react'
import { connect } from 'redux'
import { Feed } from 'components'

const FeedContainer = React.createClass({
  propTypes: {
    newDucksAvailable: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
  },
  componentDidMount () {
    // set a listener to ducks
  },
  render () {
    return (
      <Feed
        newDucksAvailable={this.props.newDucksAvailable}
        error={this.props.error}
        isFetching={this.props.isFetching}/>
    )
  }
})

function mapStateToProps({feed}) {
  const { newDucksAvailable, error, isFetcing } = feed
  return {
    newDucksAvailable,
    error,
    isFetching,
  }
}

export default connect(mapStateToProps)(FeedContainer)
