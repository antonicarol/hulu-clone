const apiKey = `dea7ad90bdc7521c7a8bd528724567aa`;
const base_url = 'https://api.themoviedb.org/3'
export default{
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en.US`,
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchMisteryMovies: `/discover/movie?api_key=${apiKey}&with_genres=9648`,
    fetchSciFiMovies: `/discover/movie?api_key=${apiKey}&with_genres=878`,
    fetchWesternMovies: `/discover/movie?api_key=${apiKey}&with_genres=37`,
    fetchAnimationMovies: `/discover/movie?api_key=${apiKey}&with_genres=16`,
    fetchTVMovies: `/discover/movie?api_key=${apiKey}&with_genres=10770`,
};
//https://api.themoviedb.org/3/discover/movie?api_key=dea7ad90bdc7521c7a8bd528724567aa&with_genres=28