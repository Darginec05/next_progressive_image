import { ProgressiveImage } from '../components/ProgressiveImage';

const images: string[] = [
  '/assets/cover.png',
  '/assets/colors.jpg',
  '/assets/feed_2.png',
  '/assets/feed.png',
  '/assets/federico-di.jpg',
  '/assets/caroline.jpg',
  '/assets/guillaume-marques.jpg',
  '/assets/luchuxue1997.jpg',
  '/assets/nick-fewings.jpg',
  '/assets/omid-armin.jpg',
  '/assets/peter-eisenhaure.jpg',
  '/assets/gaspar-uhas.jpg',
];

const Home = () => (
  <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '5% 0 50px 0',
    }}
  >
    {images.map((src) => (
      <ProgressiveImage key={src} src={src} width={600} height={400} />
    ))}
  </div>
);

export default Home;
