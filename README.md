<p align="center">
  <img src="./animb.png" alt="Animob Logo" width="200" style="border-radius: 50%;"/>
</p>

<h1 align="center">Animob</h1>

<p align="center">
  A Node.js library for streaming anime, reading manga, and accessing anime/manga metadata through multiple providers.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/animob">
    <img src="https://img.shields.io/npm/v/animob" alt="npm version">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  </a>
</p>

## Installation

```bash
npm install animob
```

or

```bash
yarn add animob
```

## Quick Start

### Anime Streaming

```typescript
import { ANIME } from 'animob';

// Search for anime
const animePahe = new ANIME.AnimePahe();
const results = await animePahe.search('Naruto');
console.log(results);

// Get anime details
const info = await animePahe.fetchAnimeInfo(results.results[0].id);
console.log(info);

// Get episode sources
const sources = await animePahe.fetchEpisodeSources(info.episodes[0].id);
console.log(sources);
```

### Manga Reading

```typescript
import { MANGA } from 'animob';

// Search for manga
const mangadex = new MANGA.MangaDex();
const results = await mangadex.search('One Piece');
console.log(results);

// Get manga details
const info = await mangadex.fetchMangaInfo(results.results[0].id);
console.log(info);

// Get chapter pages
const pages = await mangadex.fetchChapterPages(info.chapters[0].id);
console.log(pages);
```

### Anime/Manga Metadata

```typescript
import { META } from 'animob';

// Search anime/manga database
const anilist = new META.Anilist();
const results = await anilist.search('Demon Slayer');
console.log(results);

// Get detailed information
const info = await anilist.fetchAnimeInfo(results.results[0].id);
console.log(info);
```

## Available Providers

### Anime
- `AnimePahe` - Anime streaming with multiple quality options
- `Hianime` - High-quality anime streaming (uses anizen.tr mirror)
- `AnimeSaturn` - Italian anime provider with global access
- `AnimeKai` - Anime streaming provider
- `KickAssAnime` - Anime streaming with various sources
- `AnimeUnity` - Italian anime streaming
- `AnimeSama` - French anime streaming

### Manga
- `MangaDex` - Official manga reading platform
- `MangaKakalot` - Popular manga provider
- `MangaPill` - Manga reading with multiple sources
- `MangaReader` - Extensive manga library
- `Comick` - Comic and manga provider
- `AsuraScans` - Scanlation group provider
- `WeebCentral` - Manga aggregator
- `MangaHere` - Manga reading platform

### Movies & TV
- `FlixHQ` - Movies and TV shows
- `DramaCool` - Asian dramas
- `Goku` - Movie streaming
- `SFlix` - Movies and series

### Metadata
- `Anilist` - Comprehensive anime/manga database
- `MAL` - MyAnimeList integration
- `TMDB` - The Movie Database

## Usage Examples

### Get Trending Anime

```typescript
import { META } from 'animob';

const anilist = new META.Anilist();
const trending = await anilist.fetchTrendingAnime();
console.log(trending);
```

### Stream Anime Episode

```typescript
import { ANIME } from 'animob';

const hianime = new ANIME.Hianime();

// Search
const search = await hianime.search('One Piece');

// Get info
const info = await hianime.fetchAnimeInfo(search.results[0].id);

// Get episode sources
const episode = info.episodes[0];
const sources = await hianime.fetchEpisodeSources(episode.id);

console.log('Stream URL:', sources.sources[0].url);
```

### Read Manga Chapter

```typescript
import { MANGA } from 'animob';

const mangadex = new MANGA.MangaDex();

// Search
const search = await mangadex.search('Solo Leveling');

// Get info
const info = await mangadex.fetchMangaInfo(search.results[0].id);

// Get chapter pages
const chapter = info.chapters[0];
const pages = await mangadex.fetchChapterPages(chapter.id);

console.log('Pages:', pages);
```

## Provider Status

### Verified Working
- ✅ AnimePahe
- ✅ Hianime (anizen.tr)
- ✅ AnimeSaturn
- ✅ MangaDex
- ✅ Anilist

### Other Providers
Other providers are included but may have varying reliability depending on your location and network.

## Building from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/animob.git
cd animob

# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test
```

## API Reference

### Common Methods

All providers implement these base methods:

#### Anime Providers
- `search(query: string)` - Search for anime
- `fetchAnimeInfo(id: string)` - Get anime details
- `fetchEpisodeSources(episodeId: string)` - Get streaming sources

#### Manga Providers
- `search(query: string)` - Search for manga
- `fetchMangaInfo(id: string)` - Get manga details
- `fetchChapterPages(chapterId: string)` - Get chapter pages

#### Meta Providers
- `search(query: string)` - Search database
- `fetchAnimeInfo(id: string)` - Get anime information
- `fetchMangaInfo(id: string)` - Get manga information

## TypeScript Support

Animob is written in TypeScript and includes type definitions out of the box.

```typescript
import { ANIME, MANGA, META, IAnimeResult, IMangaResult } from 'animob';

const results: IAnimeResult[] = await new ANIME.AnimePahe().search('Naruto');
```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Credits

Built on top of [consumet.ts](https://github.com/consumet/consumet.ts) with improvements and verified providers.

## Disclaimer

This library is for educational purposes only. Please support official releases and respect copyright laws in your country.
