function _fetchData(url){
    return fetch(url).then(function(response) {
        var contentType = response.headers.get("content-type");
        if(contentType && contentType.indexOf("application/json") !== -1) {
          return response.json()
        } else {
          console.log("Oops, nous n'avons pas du JSON!");
        }
    });
}