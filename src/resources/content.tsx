import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ricardo",
  lastName: "Aya",
  name: `Ricardo Aya`,
  role: "Music curator",
  avatar: "/images/avatar.jpg",
  email: "ricardo.aya@bido.app",
  location: "America/Mexico_City", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My quarterly newsletter about music in stores.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ReeMusicTech",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ricardo-aya-47715520/",
  },
  {
    name: "WhatsApp",
    icon: "WhatsApp",
    link: "https://goo.su/UddDG22",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Music | Marketing | Tech`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Music creator, developer, solopreneur & model car lover.</>,
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
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Ricardo, my nickname is Ree. I've been programming music in stores
       for many years, based in México City. I’m the founder and CEO at {"Bido"}
      , a platform that allows me to sell the music I make. I want to
       empower more people to do the same.
      <br /> 
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://meetings.hubspot.com/ricardo-aya1",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        He is a forward-thinking executive who seamlessly integrates music, technology,
        and legal expertise to drive innovation in the commercial audio space. With a
        strategic focus on AI-generated music, intellectual property efficiency,
        and brand-aligned soundscapes, he consistently stays ahead of industry trends. 
        Through Bido, he is building a scalable, rights-conscious music platform tailored
        for retail, hospitality, and commercial environments. His approach combines
        business acumen, legal precision, and creative insight — not merely delivering
        music, but shaping how it enhances customer experience and brand identity.
      </>
      
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Bido",
        timeframe: "2017 - Present",
        role: "CEO",
        achievements: [
          <>
            Leading the project to make music legal and easy for businesses, reducing costs
            for commercial use of music that fits brands.
          </>,
          <>
            Creating a catalog under a blanket licensing model, designed to improve the
            experience in restaurants, hotels, spas, gyms, and shopping centers.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Catalog",
        timeframe: "2023 - Present",
        role: "Author and Composer",
        achievements: [
          <>
            Owner of a personal catalog created with the aim of providing musical atmosphere
            to business that have points of sale..
          </>,
          <>
            This music catalog includes genres such as Pop, Deep House, Bossa Nova, Jazz,
            Reggae, Salsa and is not managed by any global Performing Rights Organization.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
     {
        name: "Sergio Arboleda University",
        description: <>Software and web application development.</>,
      },
      {
        name: "Politecnico Grancolombiano",
        description: <>Studied marketing and growth.</>,
      },
      {
        name: "National Copyright Directorate",
        description: <>Copyright for the music industry.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about music and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
