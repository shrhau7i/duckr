import React from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DuckDetails } from 'components';
import * as duckActionCreators from 'redux/modules/ducks';
import * as likeCountActionCreators from 'redux/modules/likeCount';
import * as repliesActionCreators from 'redux/modules/replies';
const { func, object, string, bool } = PropTypes;

class DuckDetailsContainer extends React.Component {
  componentDidMount () {
    this.props.initLikeFetch(this.props.duckId);
    if (this.props.duckAlreadyFetched === false) {
      this.props.fetchAndHandleDuck(this.props.duckId);
    } else {
      this.props.removeFetching();
    }
  }

  render () {
    return (
      <DuckDetails
        addAndHandleReply={this.props.addAndHandleReply}
        authedUser={this.props.authedUser}
        duckId={this.props.duckId}
        error={this.props.error}
        isFetching={this.props.isFetching} />
    );
  }
}

DuckDetailsContainer.propTypes = {
  authedUser: object.isRequired,
  duckId: string.isRequired,
  error: string.isRequired,
  isFetching: bool.isRequired,
  removeFetching: func.isRequired,
  fetchAndHandleDuck: func.isRequired,
  duckAlreadyFetched: bool.isRequired,
  initLikeFetch: func.isRequired,
  addAndHandleReply: func.isRequired,
};

// const DuckDetailsContainer = React.createClass({
//   propTypes: {
//     authedUser: object.isRequired,
//     duckId: string.isRequired,
//     error: string.isRequired,
//     isFetching: bool.isRequired,
//     removeFetching: func.isRequired,
//     fetchAndHandleDuck: func.isRequired,
//     duckAlreadyFetched: bool.isRequired,
//     initLikeFetch: func.isRequired,
//     addAndHandleReply: func.isRequired,
//   },
//   componentDidMount () {
//     this.props.initLikeFetch(this.props.duckId)
//     if (this.props.duckAlreadyFetched === false) {
//       this.props.fetchAndHandleDuck(this.props.duckId)
//     } else {
//       this.props.removeFetching()
//     }
//
//   },
//   render () {
//     return (
//       <DuckDetails
//         addAndHandleReply={this.props.addAndHandleReply}
//         authedUser={this.props.authedUser}
//         duckId={this.props.duckId}
//         error={this.props.error}
//         isFetching={this.props.isFetching} />
//     )
//   },
// })

function mapStateToProps ({ducks, likeCount, users}, props) {
  return {
    isFetching: ducks.get('isFetching') || likeCount.isFetching,
    error: ducks.get('error'),
    authedUser: users[users.authedId].info,
    duckId: props.routeParams.duckId,
    duckAlreadyFetched: !!ducks.get(props.routeParams.duckId),
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...duckActionCreators,
    ...likeCountActionCreators,
    ...repliesActionCreators,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuckDetailsContainer);
