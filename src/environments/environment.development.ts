export const environment = {
    // despues se reemplazaria con el dominio, pero en esta caso no habra talvez.
    apiUrlBase: "https://localhost:7777/",
    csrfToken: localStorage.getItem('CSRF_TOKEN') || ''
    
};
