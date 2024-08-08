<template>
    <div>
        <p><span>Name:</span> {{ item.name }}</p>
        <p><span>Type:</span> {{ item.type }}</p>
        <p><span>Dimension:</span> {{ item.dimension }}</p>
        <p>
            <span>Residents:</span>
            <ul>
                <li v-for="(resident) in residents">
                    <router-link class="component_links" :to="{ name: 'character', params: {id: resident.id} }">
                        {{resident.name}}
                    </router-link>
                </li>
            </ul>
        </p>
        
        
    </div>
</template>
<script>
import { fetchData, fetchCharactersByIds } from '@/api';
import { extractIdsFromUrl } from '@/helper';
export default {
    props: [
        'id',
    ],
    
    data() {
        return {
            resource: 'location',
            item: [],
            extractedIds: '',
            residents: [],
        };
    },
    methods: {
        async created() {
            this.item = await fetchData(this.resource, this.id);
            this.extractedIds = extractIdsFromUrl(this.item.residents);
        },
        async fetchResidents() {
            this.residents = await fetchCharactersByIds(this.extractedIds); 
        },
    },
    mounted() {
        this.created();
        this.fetchResidents()
    }
};

</script>