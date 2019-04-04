function getRequest(location, callback) {
    fetch(location)
        .then(res => res.json())
        .then(data =>
            callback(data)
        )
        .catch(err => console.log(err))
}

export default {
    getRequest
}
    
