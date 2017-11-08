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
        },
      },
      cn: {
        translation: {
          title: { label: '偽推特' },
          description: { label: '偽推特的社交網站' },
        },
      },
    },
  });

export default i18next;
