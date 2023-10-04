import { renderAboutV2 } from '../pages/About.js';
import { renderCharacters } from '../pages/Characters.js';
import { renderMaps } from '../pages/a-maps.js';

export const navigationRoutes = [
    { path: '/', name: 'About' },
    { path: '/Characters', name: 'Characters' },
    { path: '/Maps', name: 'Maps '} //path dos mapas routes.js
];
const routes = {
    '/': renderAboutV2,
    '/Characters': renderCharacters,
    '/Maps': renderMaps //rotas criada pros mapas routes.js
};

export const getRouteHandler = (route) => {
    return routes[route] || notFound;
}

export const notFound = () => {
    return '<h1>404 - Not Found</h1>';
}
