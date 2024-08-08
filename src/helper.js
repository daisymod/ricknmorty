export function extractIdsFromUrl(urls) {
    let extractedIds = urls.map(url => {
        const match = url.match(/\d+/);
        return match ? match[0] : null;
    }).filter(number => number !== null).join(',');
    return extractedIds;
}