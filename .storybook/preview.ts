import type { Preview } from '@storybook/react';
import { initTranslations } from '@wowfinder/translations';

const i18n = initTranslations();

const preview: Preview = {
    globals: {
        locale: i18n.language,
        locales: {
            en: { icon: '🇬🇧', title: 'English' },
            es: { icon: '🇪🇸', title: 'Castellano' },
        },
    },
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        i18n,
    },
};

console.warn({ i18n, preview });

export default preview;
