

const config = {
    baseUrl: "https://api.react-learning.ru",
    headers: {
        'content-type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFhY2Y5YWFhMzk3MTIxODM5NzYwOGYiLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc5NDc4NzI1LCJleHAiOjE3MTEwMTQ3MjV9.ULpum-jOEXWbP9-ANDhbxgbv34yPhf9r9LBofBDQ9F8'
    }
}

const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject("Error")
}

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getProductList() {
        return fetch(`${this._baseUrl}/products`, {
            headers: this._headers,
        }).then(onResponce);
    }
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        }).then(onResponce);
    }

    setUserInfo({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
            }),
        }).then(onResponce);
    }

    searchProducts(query) {
        return fetch(`${this._baseUrl}/products/search?query=${query}`, {
            headers: this._headers,
        }).then(onResponce);
    }

    changeLikeProductStatus(productId, like) {
        return fetch(`${this._baseUrl}/products/likes/${productId}`, {
            headers: this._headers,
            method: like ? "PUT" : "DELETE"
        }).then(onResponce);
    }
}

export const api = new Api(config);