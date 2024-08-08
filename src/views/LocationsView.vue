<template>
    <div>
        <ul class="locations_list">
            <li class="locations_list_item" v-for="item in items" :key="item.id">
                <router-link class="view_links" :to="{ name: 'location', params: {id: item.id} }">
                    <p><span>Location:</span> {{item.name}}</p> 
                    <p><span>Type:</span> {{ item.type }}</p>
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
            resource: 'location',
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