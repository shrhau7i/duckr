import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Feed } from 'components';
import { bindActionCreators } from 'redux';
import * as feedActionCreators from 'redux/modules/feed';
import { List } from 'immutable';
const { bool, string, func } = PropTypes;

class FeedContainer extends React.Component {
  componentDidMount() {
    this.props.setAndHandleFeedListener();
  }

  render() {
    return (
      <Feed
        duckIds={this.props.duckIds}
        newDucksAvailable={this.props.newDucksAvailable}
        error={this.props.error}
        isFetching={this.props.isFetching}
        resetNewDucksAvailable={this.props.resetNewDucksAvailable}
      />
    );
  }
}

FeedContainer.propTypes = {
  duckIds: PropTypes.instanceOf(List),
  newDucksAvailable: bool.isRequired,
  error: string.isRequired,
  isFetching: bool.isRequired,
  setAndHandleFeedListener: func.isRequired,
  resetNewDucksAvailable: func.isRequired,
};

// const FeedContainer = React.createClass({
//   propTypes: {
//     duckIds: PropTypes.instanceOf(List),
//     newDucksAvailable: PropTypes.bool.isRequired,
//     error: PropTypes.string.isRequired,
//     isFetching: PropTypes.bool.isRequired,
//     setAndHandleFeedListener: PropTypes.func.isRequired,
//     resetNewDucksAvailable: PropTypes.func.isRequired,
//   },
//   componentDidMount () {
//     this.props.setAndHandleFeedListener()
//   },
//   render () {
//     return (
//       <Feed
//         duckIds={this.props.duckIds}
//         newDucksAvailable={this.props.newDucksAvailable}
//         error={this.props.error}
//         isFetching={this.props.isFetching}
//         resetNewDucksAvailable={this.props.resetNewDucksAvailable} />
//     )
//   },
// })

function mapStateToProps({ feed }) {
  return {
    newDucksAvailable: feed.get('newDucksAvailable'),
    error: feed.get('error'),
    isFetching: feed.get('isFetching'),
    duckIds: feed.get('duckIds'),
  };

  // const { newDucksAvailable, error, isFetching, duckIds } = feed
  // return {
  //   newDucksAvailable,
  //   error,
  //   isFetching,
  //   duckIds,
  // }
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(feedActionCreators, dispatch)
)(FeedContainer);
