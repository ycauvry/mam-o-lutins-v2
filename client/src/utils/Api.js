export const getObjectById = async (namespace, id, queryParams = {}) => {
    const url = new URL(`http://localhost:8000/api/${namespace}/${id}`);
    return await fetch(url.href).then(res => res.json());
}

export const listObjects = async (namespace, queryParams = {}) => {
    const url = new URL(`http://localhost:8000/api/${namespace}`);
    return await fetch(url.href).then(res => res.json());
}

export const postObject = async (namespace, body= {}) => {
    const url = new URL(`http://localhost:8000/api/${namespace}`);

    return await fetch(url.href, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(res => res.json());
}
