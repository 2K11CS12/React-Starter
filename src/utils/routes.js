
export const routes = {
    news: {
        exactly: true,
        protected: false,
        pattern: '/',
        label: 'About React Lego',
        component: Homepage
    },
    vulnerabilty: {
        pattern: '/game',
        label: 'Star Wars Trivia',
        component: Game,
        protected: true,
    }
};