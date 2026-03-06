import { MOVIES } from "..";

const main = async () => {
  // Create a new instance of the Bollyflix provider
  const bollyflix = new MOVIES.Bollyflix();
  
  console.log('Searching for Bollywood movies...\n');
  
  // Search for a Bollywood movie
  const searchResults = await bollyflix.search("Pathaan");
  console.log('Search Results:', searchResults);
  
  // If results found, fetch movie info
  if (searchResults.results.length > 0) {
    const firstResult = searchResults.results[0];
    console.log('\nFetching movie info for:', firstResult.title);
    
    const movieInfo = await bollyflix.fetchMediaInfo(firstResult.id);
    console.log('Movie Info:', movieInfo);
  }
};

main();
