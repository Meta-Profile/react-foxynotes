export const LocalStorageUtils = {
    /**
     * Возвращает токен авторизации
     */
    getAuthToken() {
        return localStorage.getItem('token');
    },
};
