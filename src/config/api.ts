/**
 * Настройки API
 */
const ConfigApi = {
    version: 'v1',
    localhost: false,
    endpoint: 'https://api.foxynotes.ru/',
};

// Автоматические настройки
if (ConfigApi.localhost) ConfigApi.endpoint = 'http://localhost:8080/';
ConfigApi.endpoint = ConfigApi.endpoint + ConfigApi.version;

export { ConfigApi };
