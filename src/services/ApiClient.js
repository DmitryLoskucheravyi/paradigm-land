class ApiClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(path) {
        const res = await fetch(`${this.baseURL}${path}`);

        if (!res.ok) {
            throw new Error(`could not fetch ${path}, status: ${res.status}`);
        }

        return res.json();
    }
}

export default ApiClient;
