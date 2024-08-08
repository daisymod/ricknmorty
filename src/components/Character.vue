<template>
    <div class="view character_view">
        <div class="character_img">
            <img :src="item.image" alt="Character Image" />
        </div>
        <div class="character_info">
            <p><span>Name: </span>{{ item.name }}</p>
            <p><span>Status: </span>{{ item.status }}</p>
            <p><span>Species: </span>{{ item.species }}</p>
            <p><span>Type: </span>{{ item.type || 'Unknown' }}</p>
            <p><span>Gender: </span>{{ item.gender }}</p>
            
            <p v-if="item.origin && item.origin.name != 'unknown'"><span>Origin: </span>
                <router-link class="component_links"  
                    :to="{ name: 'location', params: {id: this.extractId(item.origin.url)} }">
                    {{ item.origin.name }}
                </router-link>
            </p> 
            <p v-else-if="item.origin"><span>Origin:</span> {{ item.origin.name }}</p> 
            

            <p v-if="item.location && item.location.name != 'unknown'"><span>Location: </span>
                <router-link class="component_links"  
                    :to="{ name: 'location', params: {id: this.extractId(item.location.url)} }">
                    {{ item.location.name }}
                </router-link>
            </p> 
            <p v-else-if="item.location"><span>Location:</span> {{ item.location.name }}</p> 

            <p>
                <span>Episodes: </span>
                <span v-for="(episode, index) in item.episode">
                    <router-link class="component_links" :to="{ name: 'episode', params: {id: this.extractId(episode) }}">
                        {{ this.extractId(episode) }}
                    </router-link>
                    <span v-if="index < item.episode.length - 1">, </span>
                </span>
            </p>
        </div>
        
        
        
    </div>
</template>
<script>
import { fetchData } from '@/api';
export default {
    props: [
        'id',
    ],
    data() {
        return {
            resource: 'character',
            item: [],
        };
    },
    methods: {
        async created() {
            this.item = await fetchData(this.resource, this.id);
        },
        extractId(url) {
            const match = url.match(/\d+/);
            return match ? match[0] : null;
        },

    },
    mounted() {
        this.created();
    }
};

</script>