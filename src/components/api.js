let rootURL = 'https://api.themoviedb.org/3/search/movie';
let detailURL = 'https://api.themoviedb.org/3/movie/';
let api_key ='5e767c352c4fd16889f931fca446aca0';
exports.search = function(q){
    let url = `${rootURL}?api_key=${api_key}&query=${q}`;
    return fetch(url)
        .then((responce)=>responce.json())
        .then((responceJson)=>{
            return responceJson.results;
        });
};

exports.view = function(id){
    let url = `${detailURL}${id}?api_key=${api_key}`;
    return fetch(url)
        .then((responce)=>responce.json()).then((responceJson)=> { return responceJson});
};
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
//https://api.themoviedb.org/3/search/movie?api_key=5e767c352c4fd16889f931fca446aca0&query=batman
//https://api.themoviedb.org/3/movie/268?api_key=5e767c352c4fd16889f931fca446aca0