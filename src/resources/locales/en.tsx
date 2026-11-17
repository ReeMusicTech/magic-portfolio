import { Line, Row, Text } from "@once-ui-system/core";
import {
  basePerson,
  calendarLink,
  featuredHref,
  playlistUrls,
  projectImages,
  socialLinks,
  type SiteContent,
} from "./shared";

const person = {
  ...basePerson,
  role: "Music Executive | Entrepreneur | Tech Innovator | Rights-Conscious Creator",
  languages: ["Spanish", "English"],
};

const en: SiteContent = {
  person,

  social: [
    { name: "GitHub", icon: "github", link: socialLinks.github },
    { name: "LinkedIn", icon: "linkedin", link: socialLinks.linkedin },
    { name: "WhatsApp", icon: "whatsapp", link: socialLinks.whatsapp },
    { name: "Email", icon: "email", link: socialLinks.email },
  ],

  newsletter: {
    display: true,
    title: <>Support {person.firstName}</>,
    description: (
      <>
        Your contribution helps us keep creating music tailored for businesses around the world.
        Every donation fuels the mission to make music accessible, legal, and brand-focused for
        restaurants, hotels, cafés, and more.
        <br />
        <br />
        Thank you for your support!
      </>
    ),
  },

  home: {
    path: "/",
    image: "/src/app/favicon.ico",
    label: "Home",
    title: `${person.name} | Music | Marketing | Tech`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>I create music that helps businesses sound unique, model car enthusiast</>,
    featured: {
      display: true,
      title: (
        <Row gap="12" vertical="center">
          <strong className="ml-4">Bido</strong>{" "}
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            Featured work
          </Text>
        </Row>
      ),
      href: featuredHref,
    },
    subline: (
      <>
        Hi, I’m Ricardo-most people call me Ree. Based in México City. I've been programming music
        for stores for many years, I’m also the founder and CEO of
        <a href="https://bido.app" target="_blank" rel="noopener noreferrer">
          {" "}
          Bido{" "}
        </a>
        , a platform that lets me share and sell my music worldwide. No Performing Rights
        Organization can claim royalties. On the flip side, I'm deep into the diecast scene. I
        shipped{" "}
        <a href="https://troly.club" target="_blank" rel="noopener noreferrer">
          Troly
        </a>{" "}
        to help collectors track their stash and trade 1:64 scale cars. My mission is to empower
        more creators to do the same and turn their passion into global opportunities.
        <br />
      </>
    ),
  },

  about: {
    path: "/about",
    label: "About",
    title: `About – ${person.name}`,
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: { display: true, subItems: false },
    avatar: { display: true },
    calendar: { display: true, link: calendarLink },
    intro: {
      display: true,
      title: "Introduction",
      description: (
        <>
          <h3>Professional Summary</h3>
          Forward-thinking executive who seamlessly integrates music, technology, and legal
          expertise to drive innovation in the commercial audio space. With a strategic focus on
          AI-supported music, intellectual property efficiency, and brand-aligned soundscapes,
          Ricardo consistently stays ahead of industry trends.
          <br />
          <br />
          Through Bido, he is building a scalable, rights-conscious music platform tailored for
          retail, hospitality, and commercial environments. His approach combines business acumen,
          legal precision, and creative insight—not merely delivering music, but redefining how it
          enhances customer experience and brand identity.
          <br />
          <br />
          Within the music industry, Ricardo is actively exploring the potential of leveraging
          APIs-based communication to bring greater transparency and efficiency to public
          performance royalties. He envisions developing an application that enables catalog owners
          to track which music is being played at each commercial establishment all the time. To
          achieve this, he is working to align a diverse set of stakeholders — including content
          owners, individual and collective rights managers, major labels, performance rights
          organizations (PROs), background music service providers, and businesses themselves. The
          goal is to build a system offering structured insights that could significantly improve
          the accuracy and fairness of royalty distribution.
        </>
      ),
    },
    work: {
      display: true,
      title: "Work Experience",
      experiences: [
        {
          company: "Bido",
          timeframe: "2017 - Present",
          role: "CEO",
          achievements: [
            <>
              Leading the development of a platform that makes music legal, affordable, and
              brand-tailored for businesses.
            </>,
            <>
              Pioneering a blanket licensing model with a curated catalog designed for restaurants,
              hotels, spas, gyms, and shopping centers.
            </>,
            <>
              Driving global scalability with a focus on copyright compliance and customer
              experience.
            </>,
          ],
          images: [{ src: projectImages.bido, alt: "Bido project", width: 16, height: 9 }],
        },
        {
          company: "Troly",
          timeframe: "2026 - Present",
          role: "Founder & Full-Stack Developer",
          achievements: [
            <>
              Built a marketplace and club where diecast collectors catalog their 1:64 scale cars,
              see what their collection is worth in their own currency, and list pieces for sale or
              trade.
            </>,
            <>
              Grew the community through an invite-only model with waitlist, referral campaigns, and
              automated email journeys.
            </>,
            <>
              Shipped the full stack: React PWA, Node.js + MongoDB backend, Stripe memberships and
              seller payouts, in Spanish, English, and Portuguese.
            </>,
          ],
          images: [{ src: projectImages.troly, alt: "Troly home", width: 16, height: 9 }],
        },
        {
          company: "Personal Music Catalog",
          timeframe: "2023 - Present",
          role: "Author & Composer",
          achievements: [
            <>
              Building an independent commercial-use catalog created for businesses with physical
              points of sale.
            </>,
            <>
              Composing across genres including Pop, Deep House, Bossa Nova, Jazz, Reggae, and
              Salsa.
            </>,
            <>
              Catalog is rights-cleared and independent of global Performing Rights Organizations
              (PROs).
            </>,
          ],
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: "Education",
      institutions: [
        {
          name: "Sergio Arboleda University",
          description: <>Software & Web Application Development.</>,
        },
        { name: "Politécnico Grancolombiano", description: <>Marketing & Growth.</> },
        {
          name: "National Copyright Directorate",
          description: <>Copyright in the Music Industry.</>,
        },
      ],
    },
    technical: {
      display: true,
      title: "Technical skills",
      skills: [
        {
          title: "Figma",
          description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
          tags: [{ name: "Figma", icon: "figma" }],
          images: [
            { src: projectImages.figma1, alt: "Project image", width: 16, height: 9 },
            { src: projectImages.figma2, alt: "Project image", width: 16, height: 9 },
          ],
        },
        {
          title: "Next.js",
          description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
          tags: [
            { name: "JavaScript", icon: "javascript" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Supabase", icon: "supabase" },
          ],
          images: [{ src: projectImages.next, alt: "Project image", width: 16, height: 9 }],
        },
      ],
    },
  },

  blog: {
    path: "/blog",
    label: "Blog",
    title: "Writing about music and tech...",
    description: `Read what ${person.name} has been up to recently`,
  },

  playlist: {
    path: "/playlist",
    id: "",
    name: "",
    label: "Playlist",
    title: "Music that I have created in order to set the mood for a point of sale.",
    description: `Playlists created by ${person.name} for businesses and points of sale`,
  },

  playlistPage: {
    intro:
      "Each playlist is carefully crafted to enhance the customer experience in commercial environments. All tracks are original and 100% royalty-free, ensuring smooth and legal use across your point of sale. Explore the different moods and styles available on your favorite platform.",
    supportTitle: `Support ${person.firstName}`,
    supportDescription:
      "Your contribution helps us keep creating music tailored for businesses around the world. Every donation fuels the mission to make music accessible, legal, and brand-focused for restaurants, hotels, cafés, and more.",
    supportThanks: "Thank you for your support!",
    items: [
      {
        title: "Music to lobby hotel",
        description:
          "Set the perfect tone for your hotel lobby — click to explore a curated soundtrack designed to welcome, relax, and impress.",
        platform: "spotify",
        url: playlistUrls.lobby,
        featured: true,
      },
      {
        title: "Afternoon at the restaurant",
        description:
          "Play the perfect afternoon vibe — a warm, peaceful soundtrack designed to elevate your restaurant's midday experience.",
        platform: "youtube",
        url: playlistUrls.restaurant,
        featured: true,
      },
      {
        title: "A little bit of Jazz",
        description:
          "Brew the perfect mood — click to enjoy smooth jazz curated for coffee and conversation.",
        platform: "apple",
        url: playlistUrls.jazz,
      },
      {
        title: "Catalog",
        description:
          "Discover my full catalog of royalty-free music — crafted to set the perfect atmosphere for any business.",
        platform: "youtube",
        url: playlistUrls.catalog,
      },
      {
        title: "The best music for a fashion store",
        description:
          "Click to set the trend — the ultimate music playlist tailored for fashion-forward retail spaces.",
        platform: "spotify",
        url: playlistUrls.fashion,
      },
      {
        title: "The best new Christmas music",
        description:
          "Celebrate the season with a fresh holiday soundtrack—new, original Christmas music crafted to bring warmth, joy, and a modern festive vibe to your space.",
        platform: "spotify",
        url: playlistUrls.christmas,
      },
    ],
  },

  work: {
    path: "/work",
    label: "Work",
    title: `Projects – ${person.name}`,
    description: `Design and dev projects by ${person.name}`,
  },
};

export default en;
