export const RoutesConfig = {
    paths: {
        signIn: '/login/signin',
        signUp: '/login/signup',
        profile: '/profile',
        profileMetaId: (mpId: string | number) => RoutesConfig.paths.profile + '/' + mpId,
        profileMetaIdCategory: (mpId: string | number, mpcId: string | number) =>
            RoutesConfig.paths.profile + '/' + mpId + '/' + mpcId,
        home: '/',
        user: '/user',
    },
};
