export const ConfigRoutes = {
    paths: {
        signIn: '/login/signin',
        signUp: '/login/signup',
        profile: '/profile',
        profileMetaId: (id: string) => ConfigRoutes.paths.profile + '/' + id,
        home: '/',
    },
};
