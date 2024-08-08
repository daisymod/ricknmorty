<template>
    <div class="main_view">
        <ul class="characters_list">
            <li class="characters_list_item" v-for="item in items" :key="item.id">
                <router-link class="character_links" :to="{ name: 'character', params: {id: item.id} }">
                    <img class="character_img" v-bind:src=item.image>
                    <p>{{item.name}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
import { fetchData } from '@/api';
export default {
    data() {
        return {
            resource: 'character',
            items: [] 
        };
    },
    methods: {
        async created() {
            this.items = await fetchData(this.resource);
        },
    },
    mounted() {
        this.created()
    }
};
</script>