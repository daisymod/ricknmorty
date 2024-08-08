export async function fetchData(resource, id = null){
    let items = [];
    try {
        let url = 'https://rickandmortyapi.com/api/';
        let link = id == null ? url + resource : url + resource + '/' + id;
        let response = await fetch(link);
        if (!response.ok) {
            new Error('Network response was not ok');
        }
        let data = await response.json();
        items = id == null ? data.results : data; 
        return items;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

export async function fetchCharactersByIds(ids) {
    try {
        let response = await fetch('https://rickandmortyapi.com/api/character/'+ids);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        return data.results; 
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
