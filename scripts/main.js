import getAllMaps from '../services/allMaps.js';
import { initNavigation } from './navigation.js';

function handleHashChange() {
   
    initNavigation();
}

window.addEventListener('hashchange', handleHashChange);
window.addEventListener('load', handleHashChange);

