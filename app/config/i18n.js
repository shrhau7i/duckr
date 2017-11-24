import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';

i18next
  .use(reactI18nextModule)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    react: {
      wait: true,
    },
    resources: {
      en: {
        translation: {
          title: { label: 'Duckr' },
          description: { label: 'The real time, cloud based, modular, scalable, growth hack, social platform. In the cloud.' },
          logout: { label: 'Logout' },
          home: { label: 'Home' },
          authenticate: { label: 'Authenticate' },
        },
      },
      cn: {
        translation: {
          title: { label: '偽推特' },
          description: { label: '偽推特的社交網站' },
          logout: { label: '登出' },
          home: { label: '首頁' },
          authenticate: { label: '登入' },
        },
      },
    },
  });

export default i18next;
