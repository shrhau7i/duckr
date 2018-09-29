import React from 'react';
import { Home } from 'components';
import i18next from 'config/i18n';

class HomeContainer extends React.Component {
  componentDidMount() {
    document.querySelector('button').addEventListener('click', () => {
      if (i18next.language !== 'en') {
        i18next.changeLanguage('en');
      } else {
        i18next.changeLanguage('cn');
      }
    });
  }

  render() {
    return <Home />;
  }
}

export default HomeContainer;
