function getRequest(location, callback) {
    fetch(location)
        .then(res => res.json())
        .then(data => callback(data))
        .catch(err => console.log(err))
}

function postRequest(location, requestBody, callback) {
    fetch(location, {
        method: "POST",
        body: JSON.stringify(requestBody)
    })
        .then(response => response.json())
        .then(data => callback(data))
        .catch(err => console.log(err));
}

export default {
    getRequest,
    postRequest
}
    
