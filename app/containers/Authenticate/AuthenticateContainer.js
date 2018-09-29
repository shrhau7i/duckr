import React from 'react';
import { PropTypes } from 'prop-types';
import { Authenticate } from 'components';
// import auth from 'helpers/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActionCreators from 'redux/modules/users';
const { func, bool, string, object } = PropTypes;

class AuthenticateContainer extends React.Component {
  constructor() {
    super();
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth(e) {
    e.preventDefault();
    this.props
      .fetchAndHandleAuthedUser()
      .then(() => this.context.router.replace('feed'));
  }

  render() {
    return (
      <Authenticate
        onAuth={this.handleAuth}
        isFetching={this.props.isFetching}
        error={this.props.error}
      />
    );
  }
}

AuthenticateContainer.propTypes = {
  fetchAndHandleAuthedUser: func.isRequired,
  isFetching: bool.isRequired,
  error: string.isRequired,
};

AuthenticateContainer.contextTypes = {
  router: object.isRequired,
};

// const AuthenticateContainer = React.createClass({
//   propTypes: {
//     fetchAndHandleAuthedUser: PropTypes.func.isRequired,
//     isFetching: PropTypes.bool.isRequired,
//     error: PropTypes.string.isRequired,
//   },
//   contextTypes: {
//     router: PropTypes.object.isRequired,
//   },
//   handleAuth (e) {
//     e.preventDefault()
//     this.props.fetchAndHandleAuthedUser()
//       .then(() => this.context.router.replace('feed'))
//   },
//   render () {
//     return (
//       <Authenticate
//         onAuth={this.handleAuth}
//         isFetching={this.props.isFetching}
//         error={this.props.error} />
//     )
//   },
// })

export default connect(
  state => ({ isFetching: state.isFetching, error: state.error }),
  dispatch => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer);
