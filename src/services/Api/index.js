
export function getInfosFromApiWithPage(currentPage) {
    const url =
        'https://localhost:8082/api/event/all/' +
        currentPage;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}