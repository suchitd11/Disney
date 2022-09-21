import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { useSession, getSession } from "next-auth/client";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Brands from "../components/Brands";
import MoviesCollection from "../components/MoviesCollection";
import ShowsCollection from "../components/ShowsCollection";

export default function Home({
  nowPlayingMovies,
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}) {
  // console.log(nowPlayingMovies)
  const [session] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Disney+</title>
        <meta name="google-site-verification" content="VqwDclJth8roz78CORjsqBenbsbaAOXtV5T_qPcSzQ4" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Brands />
          <MoviesCollection results={nowPlayingMovies} title="Now Playing Movies"/>
          <MoviesCollection results={popularMovies} title="Popular Movies"/>
          <ShowsCollection results={popularShows} title="Popular Shows"/>
          <MoviesCollection results={top_ratedMovies} title="Top Rated Movies"/>
          <ShowsCollection results={top_ratedShows} title="Top Rated Shows"/>
        </main>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [
    nowPlayingMoviesRes,
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(`
    https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`),
  ]);

  const [
    nowPlayingMovies,
    popularMovies,
    popularShows,
    top_ratedMovies,
    top_ratedShows,
  ] = await Promise.all([
    nowPlayingMoviesRes.json(),
    popularMoviesRes.json(),
    popularShowsRes.json(),
    top_ratedMoviesRes.json(),
    top_ratedShowsRes.json(),
  ]);

  return {
    props: {
      session,
      nowPlayingMovies: nowPlayingMovies.results,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
}
