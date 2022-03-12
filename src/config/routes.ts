export const NavigatorConfig = {
    paths: {
        add: '!add',
        search: '!search',
        feed: '!feed',
        signIn: '/login/signin',
        signUp: '/login/signup',
        profile: '/profile',
        profileMetaId: (mpId: string | number) => NavigatorConfig.paths.profile + '/' + mpId,
        home: '!space',
        user: '!user',
    },
};
