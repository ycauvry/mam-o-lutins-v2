export const listObjects = async (namespace, queryParams = {}) => {
    const url = new URL(`http://localhost:8000/api/${namespace}`);

    if (queryParams) {
        url.search = new URLSearchParams(queryParams);
    }

    return await fetch(url.href).then(res => res.json());
}