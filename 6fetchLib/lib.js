class FetchData {
    async get(url) {
        const res = await fetch(url)
        const resData = await res.json()
        return resData
    }

    async post(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await res.json()
        return resData
    }

    async put(url, data) {
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await res.json()
        return resData
    }

    async delete(url) {
        const res = fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const resData = await '删除成功'
        return resData
    }
}