import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Navigation } from 'components';
import { connect } from 'react-redux';
import { container, innerContainer } from './styles.css';
import * as usersLikesActionCreators from 'redux/modules/usersLikes';
import * as userActionCreators from 'redux/modules/users';
import { formatUserInfo } from 'helpers/utils';
import { firebaseAuth } from 'config/constants';
const { bool, func, object } = PropTypes;

class MainContainer extends React.Component {
  constructor () {
    super();
  }

  componentDidMount () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0];
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid);
        this.props.authUser(user.uid);
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now());
        this.props.setUsersLikes();
        if (this.props.location.pathname === '/') {
          this.context.router.replace('feed');
        }
      } else {
        this.props.removeFetchingUser();
      }
    });
  }

  render () {
    return this.props.isFetching === true
      ? null
      : <div className={container}>
          <Navigation isAuthed={this.props.isAuthed} />
          <div className={innerContainer}>
            {this.props.children}
          </div>
        </div>;
  }
}

MainContainer.propTypes = {
  isAuthed: bool.isRequired,
  setUsersLikes: func.isRequired,
  authUser: func.isRequired,
  fetchingUserSuccess: func.isRequired,
  removeFetchingUser: func.isRequired,
};

MainContainer.contextTypes = {
  router: object.isRequired,
};

export default connect(
  ({users}) => ({isAuthed: users.isAuthed, isFetching: users.isFetching}),
  (dispatch) => bindActionCreators({
    ...usersLikesActionCreators,
    ...userActionCreators,
  }, dispatch)
)(MainContainer);
