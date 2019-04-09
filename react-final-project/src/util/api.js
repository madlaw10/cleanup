async function getRequest(location, callback) {
    await fetch(location)
        .then(async res => await res.json())
        .then(async data => await callback(data))
        .catch(err => console.log(err))
}

export default {
    getRequest
}
    
