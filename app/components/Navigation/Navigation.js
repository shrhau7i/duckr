import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import { ModalContainer } from 'containers';
import { container, navContainer, link } from './styles.css';
import { I18n } from 'react-i18next';

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
};

function NavLinks ({isAuthed}) {
  return isAuthed === true
    ? <I18n>
        {(t) => {
          return (
            <ul>
              <li><Link to='/' className={link}>{t('home.label')}</Link></li>
            </ul>
          );
        }}
      </I18n>
    : null;
}

// function ActionLinks ({isAuthed}) {
//   return isAuthed === true
//     ? <ul>
//         <li><ModalContainer /></li>
//         <li><Link to='/logout' className={link}>{'Logout'}</Link></li>
//       </ul>
//     : <ul>
//         <li><Link to='/' className={link}>{'Home'}</Link></li>
//         <li><Link to='/auth' className={link}>{'Authenticate'}</Link></li>
//       </ul>;
// }

function ActionLinks ({isAuthed}) {
  return isAuthed === true
    ? <I18n>
        {(t) => {
          return (
            <ul>
              <li><ModalContainer /></li>
              <li><Link to='/logout' className={link}>{t('logout.label')}</Link></li>
            </ul>
          );
        }}
      </I18n>
    : <I18n>
        {(t) => {
          return (
            <ul>
              <li><Link to='/' className={link}>{t('home.label')}</Link></li>
              <li><Link to='/auth' className={link}>{t('authenticate.label')}</Link></li>
            </ul>
          );
        }}
      </I18n>
}

export default function Navigation ({isAuthed}) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  );
}
