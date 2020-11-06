export function requestProducts(page, callback) {    
    var target_url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`
    var request = new XMLHttpRequest();

    request.open("GET", target_url);

    request.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            callback(this);
        }
    };

    request.send();
}