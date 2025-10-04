// src/components/blog/DownloadLink.tsx
import { SmartLink, Text } from "@once-ui-system/core";

interface DownloadLinkProps {
  href: string;
  children: React.ReactNode;
}

export function DownloadLink({ href, children }: DownloadLinkProps) {
  return (
    <SmartLink 
      href={href} 
      download
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <Text variant="label-strong-m">{children}</Text>
    </SmartLink>
  );
}

// Luego en tu CustomMDX component, agrega:
// import { DownloadLink } from "./DownloadLink";
// 
// const components = {
//   ...otherComponents,
//   DownloadLink,
// };