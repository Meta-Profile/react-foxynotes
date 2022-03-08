/**
 * Настройки API
 */
const ApiConfig = {
    version: 'v1',
    localhost: false,
    endpoint: 'https://api.foxynotes.ru/',
};

// Автоматические настройки
if (ApiConfig.localhost) ApiConfig.endpoint = 'http://localhost:8080/';
ApiConfig.endpoint = ApiConfig.endpoint + ApiConfig.version;

export { ApiConfig };
