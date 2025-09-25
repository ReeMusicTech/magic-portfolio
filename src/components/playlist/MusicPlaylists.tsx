"use client";

import { Column, Grid, Row, Text, Button } from "@once-ui-system/core";
import MusicCard from "./MusicCard"; // Esta importación debe apuntar al archivo correcto

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
    url: "https://open.spotify.com/playlist/1eCz0Dd3pNvFVBlgpHx8Zm",
    featured: true,
  },
  {
    title: "Afternoon at the restaurant",
    description: "Play the perfect afternoon vibe — a warm, peaceful soundtrack designed to elevate your restaurant's midday experience.",
    platform: "youtube",
    url: "https://music.youtube.com/playlist?list=PL9oikhlzCWtmiN7kmdVxusq_EHAcz1Ot2",
    featured: true,
  },
  {
    title: "A little bit of Jazz",
    description: "Brew the perfect mood — click to enjoy smooth jazz curated for coffee and conversation.",
    platform: "apple",
    url: "https://music.apple.com/mx/album/data-driven-dreams-vol-2/1822592670",
  },
  {
    title: "Catalog",
    description: "Discover my full catalog of royalty-free music — crafted to set the perfect atmosphere for any business.",
    platform: "youtube",
    url: "https://music.youtube.com/browse/MPADUCujl0XxYFeJo6xqaGBe5Zdw",
  },
  {
    title: "The best music for a fashion store",
    description: "Click to set the trend — the ultimate music playlist tailored for fashion-forward retail spaces.",
    platform: "spotify",
    url: "https://open.spotify.com/playlist/5wPaFaBKUL0rjEUa52Ybfj",
  },
];

interface MusicPlaylistsProps {
  showSupport?: boolean;
}

export default function MusicPlaylists({ showSupport = true }: MusicPlaylistsProps) {
  const featuredPlaylists = playlists.filter(playlist => playlist.featured);
  const regularPlaylists = playlists.filter(playlist => !playlist.featured);

  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Header */}
      <Column gap="16" marginBottom="l" marginLeft="24">
        <Text variant="heading-strong-xl" onBackground="neutral-strong">
          Music that I have created in order to set the mood for a point of sale.
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Each playlist is carefully crafted to enhance the customer experience in commercial environments. 
          All tracks are original and 100% royalty-free, ensuring smooth and legal use across your point of sale. 
          Explore the different moods and styles available on your favorite platform.
        </Text>
      </Column>

      <Column fillWidth flex={1} gap="40">
        {/* Featured Playlists - Top row with 2 large cards */}
        {featuredPlaylists.length > 0 && (
          <Grid columns="2" s={{ columns: "1" }} fillWidth gap="16">
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
            gap="16"
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
            paddingX="24"
            style={{
              textAlign: "center",
              borderTop: "1px solid var(--neutral-border-weak)",
            }}
          >
            <Text variant="heading-strong-l" onBackground="neutral-strong">
              Support Ricardo
            </Text>
            <Column gap="8" style={{ maxWidth: "600px", margin: "0 auto" }}>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Your contribution helps us keep creating music tailored for businesses 
                around the world. Every donation fuels the mission to make music 
                accessible, legal, and brand-focused for restaurants, hotels, cafés, and more.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Thank you for your support!
              </Text>
            </Column>
            
            <Column gap="16" marginTop="16">
              <Row gap="16" fillWidth style={{ justifyContent: "center" }}>
                <Button
                  variant="primary"
                  href="https://www.paypal.com/donate/?business=D9TH8CRYQ52ZL&no_recurring=0&item_name=Thank+you+for+your+donation%2C+this+helps+us+continue+creating+music+for+businesses.&currency_code=USD"
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
          </Column>
        )}
      </Column>
    </Column>
  );
}