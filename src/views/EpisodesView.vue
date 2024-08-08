
<template>
    <div>
        <ul class="episodes_list">
            <li class="episodes_list_item" v-for="item in items" :key="item.id">
                <router-link class="view_links" :to="{ name: 'episode', params: {id: item.id} }">
                    <p><span>Episode:</span> {{item.name}}</p> 
                    <p><span>Air date:</span> {{ item.air_date }}</p>
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
            resource: 'episode',
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
