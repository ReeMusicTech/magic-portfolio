"use client";

import { Column, Grid, Row, Text, Button } from "@once-ui-system/core";
import MusicCard from "./MusicCard";
import { useLocale } from "@/i18n/LocaleProvider";

interface MusicPlaylistsProps {
  showSupport?: boolean;
}

export default function MusicPlaylists({ showSupport = true }: MusicPlaylistsProps) {
  const { t, content } = useLocale();
  const { playlist, playlistPage } = content;
  const playlists = playlistPage.items;
  const featuredPlaylists = playlists.filter(playlist => playlist.featured);
  const regularPlaylists = playlists.filter(playlist => !playlist.featured);

  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Header */}
      <Column gap="16" marginBottom="l" marginLeft="24">
        <Text variant="heading-strong-xl" onBackground="neutral-strong">
          {playlist.title}
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {playlistPage.intro}
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
              {playlistPage.supportTitle}
            </Text>
            <Column gap="8" style={{ maxWidth: "600px", margin: "0 auto" }}>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {playlistPage.supportDescription}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {playlistPage.supportThanks}
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
                  {t.newsletter.donateNow}
                </Button>
              </Row>
            </Column>
          </Column>
        )}
      </Column>
    </Column>
  );
}