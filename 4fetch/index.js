window.onload = function() {
    const btn = document.getElementById('btn')
    const div = document.getElementById('content')

    // 获取文本
    // btn.onclick = function() {
    //     fetch('data.txt')
    //         .then(function(res) {
    //             console.log(res)
    //             return res.text()
    //         })
    //         .then(function(data) {
    //             div.innerHTML = data
    //             console.log(data)
    //         })
    //         .catch(function(err) {
    //             console.log(err)
    //         })
    // }

    // 获取json
    btn.onclick = function() {
        fetch('data.json')
            .then(function(res) {
                console.log(res)
                return res.json()
            })
            .then(function(data) {
                div.innerHTML = data.name
                console.log(data.name)
            })
            .catch(function(err) {
                console.log(err)
            })
    }
}