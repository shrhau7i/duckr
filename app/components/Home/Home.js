import React from 'react';
import { container, title, slogan } from './styles.css';
import { I18n } from 'react-i18next';

import i18next from 'config/i18n'; // initialized i18next instance using reactI18nextModule

export default function Home () {
  return (
    <I18n>
      {(t) => {
        return (
            <div className={container}>
              <p className={title}>{t('title.label')}</p>
              <p className={slogan}>{t('description.label')}</p>
              <button>{'Toggle Language'}</button>
            </div>
          );
      }}
    </I18n>
  );
}
