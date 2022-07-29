class Api {
    constructor() {
        this._baseUrl = 'https://deezerdevs-deezer.p.rapidapi.com/infos'
        this._headers = {
            'X-RapidAPI-Key': '9606e55559mshce29d0d3f487b8fp16743ejsn994cdf958d5f',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }

    _checkResponse(res) {
        if (res.ok) {
            console.log(res.json());
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMusicList() {
        fetch(this._baseUrl, {
            method: 'GET',
            headers: this._headers,
        }).then(this._checkResponse)
    }
}

const api = new Api();

export { api };
