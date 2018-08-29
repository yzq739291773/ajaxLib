window.onload = function() {
    let btn = document.getElementById('btn')
    let p = document.getElementById('data')
    btn.onclick = function() {
        const xhr = new XMLHttpRequest()
            // xhr.open('GET', './data.text', true)
        xhr.open('GET', './data.json', true)
        xhr.send(null)
            // xhr.onreadystatechange = function() {
            //     if (xhr.readyState == 4 && xhr.status == 200) {
            //         console.log(xhr)
            //     }
            // }
            // xhr.onload的状态已经是xhr.readyState == 4
        xhr.onload = function() {
            if (xhr.status === 200) {
                // p.innerHTML = xhr.responseText
                p.innerHTML = JSON.parse(xhr.responseText).name
            }
        }
        xhr.onerror = function() {
            console.log('网络错误')
        }
    }
}


/**
 * RESTFUL api : Representational State Transfer api 表现层状态转移
 * GET      用来获取资源
 * POST     用来新建资源
 * PUT      用来更新整个资源
 * DELETE   用来删除资源
 * PATCH    更新部分资源
 * OPTIONS  请求方法
 * 
 */