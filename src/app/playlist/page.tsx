import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, playlist, person } from "@/resources";
import MusicPlaylists from "@/components/playlist/MusicPlaylists";

export async function generateMetadata() {
  return Meta.generate({
    title: playlist.title,
    description: playlist.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(playlist.title)}`,
    path: playlist.path,
  });
}

export default function Playlist() {
  return (
    <>
      <Schema
        as="musicPlaylist"
        baseURL={baseURL}
        title={playlist.title}
        description={playlist.description}
        path={playlist.path}
        image={`/api/og/generate?title=${encodeURIComponent(playlist.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/playlist`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Main Content */}
      <MusicPlaylists showSupport={true} />
    </>
  );
}