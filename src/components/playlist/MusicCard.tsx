"use client";

import { Card, Column, Row, Text } from "@once-ui-system/core";

interface MusicCardProps {
  title: string;
  description: string;
  platform: "spotify" | "youtube" | "apple";
  url: string;
  size?: "large" | "medium" | "small";
}

const platformConfig = {
  spotify: {
    name: "Spotify",
    color: "#1ed760",
    backgroundColor: "var(--neutral-background-medium)",
    borderColor: "var(--neutral-border-weak)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.42-1.02.599-1.561.3z"/>
      </svg>
    ),
  },
  youtube: {
    name: "YouTube Music",
    color: "#ff0000",
    backgroundColor: "var(--neutral-background-medium)",
    borderColor: "var(--neutral-border-weak)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  apple: {
    name: "Apple Music",
    color: "#fa3250",
    backgroundColor: "var(--neutral-background-medium)",
    borderColor: "var(--neutral-border-weak)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.001-.083-.005-.124-.005H5.988c-.041 0-.084.004-.124.005-.526.015-1.047.057-1.564.15-.673.121-1.303.353-1.877.727C1.301 1.624.556 2.624.24 3.934.065 4.654 0 5.386 0 6.124v11.752c0 .738.065 1.47.24 2.19.316 1.31 1.061 2.31 2.18 3.043.574.374 1.204.606 1.877.727.517.093 1.038.135 1.564.15.04.001.083.005.124.005h12.124c.041 0 .084-.004.124-.005.526-.015 1.047-.057 1.564-.15.673-.121 1.303-.353 1.877-.727 1.118-.734 1.863-1.734 2.18-3.043.175-.72.24-1.452.24-2.19V6.124zm-5.54 2.706c-.029.282-.092.563-.203.826-.204.482-.5.905-.875 1.263-.375.358-.822.638-1.315.826-.493.188-1.02.282-1.564.282-.544 0-1.071-.094-1.564-.282a3.919 3.919 0 0 1-1.315-.826 3.919 3.919 0 0 1-.875-1.263 3.919 3.919 0 0 1-.203-.826V6.947c0-.282.068-.563.203-.826.204-.482.5-.905.875-1.263.375-.358.822-.638 1.315-.826C12.429 3.844 12.956 3.75 13.5 3.75s1.071.094 1.564.282c.493.188.94.468 1.315.826.375.358.671.781.875 1.263.135.263.203.544.203.826v1.883z"/>
      </svg>
    ),
  },
};

export default function MusicCard({ title, description, platform, url, size = "medium" }: MusicCardProps) {
  const config = platformConfig[platform];
  
  return (
    <Card
      fillWidth
      href={url}
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
      gap="24"
      direction="column"
      s={{ direction: "column" }}
    >
      <Row fillWidth>
        <Column maxWidth={28} paddingY="24" paddingX="l" gap="20" vertical="center">
          {/* Platform Badge */}
          <Row gap="24" vertical="center">
            <Row vertical="center" gap="16">
              <div
                style={{
                  backgroundColor: config.color,
                  borderRadius: "50%",
                  padding: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  width: "32px",
                  height: "32px",
                }}
              >
                {config.icon}
              </div>
              <Text variant="label-default-s" style={{ color: config.color, fontWeight: "600" }}>
                {config.name}
              </Text>
            </Row>
          </Row>
          
          {/* Content */}
          <Text variant="heading-strong-l" wrap="balance">
            {title}
          </Text>
          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
            style={{ lineHeight: "1.4" }}
          >
            {description}
          </Text>
        </Column>
      </Row>
    </Card>
  );
}