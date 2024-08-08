<template>
    <div>
        <p><span>Name:</span> {{ item.name }}</p>
        <p><span>Air date:</span> {{ item.air_date }}</p>
        <p><span>Episode:</span> {{ item.episode }}</p>
        <p>
            <span>Characters: </span>
            <ul>
                <li v-for="(character) in characters">
                    <router-link class="component_links" :to="{ name: 'character', params: {id: character.id} }">
                        {{character.name}}
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
            resource: 'episode',
            item: [],
            extractedIds: '',
            characters: [],
        };
    },
    methods: {
        async created() {
            this.item = await fetchData(this.resource, this.id);
            this.extractedIds = extractIdsFromUrl(this.item.characters);
        },
        async fetchResidents() {
            this.characters = await fetchCharactersByIds(this.extractedIds); 
        },
    },
    mounted() {
        this.created();
        this.fetchResidents()
    }
};

</script>