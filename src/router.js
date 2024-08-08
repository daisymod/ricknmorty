import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import Episodes from './views/EpisodesView.vue';
import Locations from './views/LocationsView.vue';
import Characters from './views/CharactersView.vue';
import Episode from './components/Episode.vue';
import Location from './components/Location.vue';
import Character from './components/Character.vue';

  
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { 
            path: '/', 
            name: 'home', 
            component: Characters, 
            props: true,
        },
        {
            path: '/character/:id',
            name: 'character',
            component: Character,
            props: true
        },
        { 
            path: '/episodes', 
            name: 'episodes', 
            component: Episodes,
        },
        {
            path: '/episode/:id', 
            name: 'episode', 
            component: Episode,
            props: true,
        },
        { 
            path: '/locations', 
            name: 'locations', 
            component: Locations,
         },
         {
            path: '/location/:id', 
            name: 'location', 
            component: Location,
            props: true
         }
    ],
})

export default router