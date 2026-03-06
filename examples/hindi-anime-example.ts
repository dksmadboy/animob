import { ANIME } from "..";

const main = async () => {
  // Create a new instance of the AnimeDekho provider for Hindi dubbed anime
  const animeDekho = new ANIME.AnimeDekho();
  
  console.log('Searching for Hindi dubbed anime...\n');
  
  // Search for Hindi dubbed anime
  const searchResults = await animeDekho.search("Naruto Hindi");
  console.log('Search Results:', searchResults);
  
  // If results found, fetch anime info
  if (searchResults.results.length > 0) {
    const firstResult = searchResults.results[0];
    console.log('\nFetching anime info for:', firstResult.title);
    
    const animeInfo = await animeDekho.fetchAnimeInfo(firstResult.id);
    console.log('Anime Info:', animeInfo);
  }
};

main();
