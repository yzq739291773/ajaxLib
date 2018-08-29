function SimpleHttp() {
    this.http = new XMLHttpRequest()
}

SimpleHttp.prototype.get = function(url, callback) {
    this.http.open('GET', url, true)
    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(null, this.http.responseText)
        } else {
            callback('亲，完蛋了出错了')
        }
    }
    this.http.send(null)
}

SimpleHttp.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true)
    this.http.onload = () => {
        callback(null, this.http.responseText)
    }
    this.http.onerror = () => {
        callback('亲，完蛋了出错了')
    }
    this.http.setRequestHeader('Content-Type', 'application/json')
    this.http.send(JSON.stringify(data))
}

SimpleHttp.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true)
    this.http.onload = () => {
        callback(null, this.http.responseText)
    }
    this.http.onerror = () => {
        callback('亲，完蛋了出错了')
    }
    this.http.setRequestHeader('Content-Type', 'application/json')
    this.http.send(JSON.stringify(data))
}

SimpleHttp.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true)
    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(null, this.http.responseText)
        } else {
            callback('亲，完蛋了出错了')
        }
    }
    this.http.send(null)
}