window.onload = function() {
    let oFetch = new FetchData
        // oFetch.get('http://jsonplaceholder.typicode.com/posts')
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))

    const user = {
            "name": "yzq",
            "username": "1234556",
            "email": "124@qq.com"
        }
        // oFetch.post('http://jsonplaceholder.typicode.com/users', user)
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))

    // oFetch.put('http://jsonplaceholder.typicode.com/users/2', user)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))

    oFetch.delete('http://jsonplaceholder.typicode.com/users/2')
        .then(data => console.log(data))
        .catch(err => console.log(err))
}