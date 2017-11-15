
const FACEBOOK_URL = "https://facebook.github.io/react-native"

export const getFacebookMovie = () => {
    console.log("Gettiing Facebook Movies info!")
    const facebookMovieURI = FACEBOOK_URL + "/movies.json"
    return fetch(facebookMovieURI).then(res => res.json())
                           .then(jsonResponse => jsonResponse.movies)
                           .catch(error => console.error(error));
}
