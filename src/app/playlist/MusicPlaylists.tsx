import { Column, Grid, Row, Text, Button } from "@once-ui-system/core";
import MusicCard from "./MusicCard";

interface PlaylistData {
  title: string;
  description: string;
  platform: "spotify" | "youtube" | "apple";
  url: string;
  featured?: boolean;
}

// Datos de ejemplo - puedes mover esto a un archivo de configuración
const playlists: PlaylistData[] = [
  {
    title: "Music to lobby hotel",
    description: "Set the perfect tone for your hotel lobby — click to explore a curated soundtrack designed to welcome, relax, and impress.",
    platform: "spotify",
    url: "https://open.spotify.com/playlist/your-playlist-id",
    featured: true,
  },
  {
    title: "Afternoon at the restaurant",
    description: "Play the perfect afternoon vibe — a warm, peaceful soundtrack designed to elevate your restaurant's midday experience.",
    platform: "youtube",
    url: "https://music.youtube.com/playlist?list=your-playlist-id",
    featured: true,
  },
  {
    title: "A little bit of Jazz",
    description: "Brew the perfect mood — click to enjoy smooth jazz curated for coffee and conversation.",
    platform: "apple",
    url: "https://music.apple.com/playlist/your-playlist-id",
  },
  {
    title: "Catalog",
    description: "Discover my full catalog of royalty-free music — crafted to set the perfect atmosphere for any business.",
    platform: "youtube",
    url: "https://music.youtube.com/channel/your-channel-id",
  },
  {
    title: "The best music for a fashion store",
    description: "Click to set the trend — the ultimate music playlist tailored for fashion-forward retail spaces.",
    platform: "spotify",
    url: "https://open.spotify.com/playlist/your-playlist-id-2",
  },
];

interface MusicPlaylistsProps {
  showSupport?: boolean;
}

export default function MusicPlaylists({ showSupport = true }: MusicPlaylistsProps) {
  const featuredPlaylists = playlists.filter(playlist => playlist.featured);
  const regularPlaylists = playlists.filter(playlist => !playlist.featured);

  return (
    <Column fillWidth gap="40" paddingX="24">
      {/* Header */}
      <Column gap="16" maxWidth="800px">
        <Text variant="heading-strong-xl" onBackground="neutral-strong">
          Music that I have created in order to set the mood for a point of sale.
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Each playlist is carefully crafted to enhance the customer experience in commercial environments. 
          All tracks are original and 100% royalty-free, ensuring smooth and legal use across your point of sale. 
          Explore the different moods and styles available on your favorite platform.
        </Text>
      </Column>

      {/* Featured Playlists - Top row with 2 large cards */}
      {featuredPlaylists.length > 0 && (
        <Grid columns="2" s={{ columns: "1" }} fillWidth gap="24">
          {featuredPlaylists.map((playlist, index) => (
            <MusicCard
              key={index}
              title={playlist.title}
              description={playlist.description}
              platform={playlist.platform}
              url={playlist.url}
              size="large"
            />
          ))}
        </Grid>
      )}

      {/* Regular Playlists - Responsive grid */}
      {regularPlaylists.length > 0 && (
        <Grid 
          columns="3" 
          l={{ columns: "2" }} 
          s={{ columns: "1" }} 
          fillWidth 
          gap="24"
        >
          {regularPlaylists.map((playlist, index) => (
            <MusicCard
              key={index}
              title={playlist.title}
              description={playlist.description}
              platform={playlist.platform}
              url={playlist.url}
              size="medium"
            />
          ))}
        </Grid>
      )}

      {/* Support Section */}
      {showSupport && (
        <Column 
          fillWidth 
          gap="16" 
          paddingTop="40" 
          paddingBottom="40"
          style={{
            textAlign: "center",
            borderTop: "1px solid var(--neutral-border-weak)",
          }}
        >
          <Text variant="heading-strong-l" onBackground="neutral-strong">
            Support Ricardo
          </Text>
          <Text 
            variant="body-default-m" 
            onBackground="neutral-weak"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            Your contribution helps us keep creating music tailored for businesses 
            around the world. Every donation fuels the mission to make music 
            accessible, legal, and brand-focused for restaurants, hotels, cafés, and more.
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Thank you for your support!
          </Text>
          
          <Row gap="16" justifyContent="center" marginTop="16">
            <Button
              variant="primary"
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate via PayPal
            </Button>
            <Button
              variant="secondary"
              href="https://ko-fi.com/ricardoaya"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support on Ko-fi
            </Button>
          </Row>
        </Column>
      )}
    </Column>
  );
}