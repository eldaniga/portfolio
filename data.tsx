import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://linkedin.com/in/eldanyga",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/eldaniga",
    },
    {
        id: 4,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer & Junior Full Stack Developer",
        subtitle: "SAT",
        description: "Creación de proyectos basados en React y Next.js. Destaca un Software que estoy desarrollando para profesores de Universidad",
        date: "May 2024 ",
    },
    {
        id: 3,
        title: "Especialista en Redes Cisco",
        subtitle: "Cisco",
        description: "Obtención de las 3 Certificaciones de Cisco CCNA1, CCNA2, CCNA3",
        date: "May 2024",
    },
    {
        id: 4,
        title: "Ganador de Beca Talento",
        subtitle: "Universidad de Jaen",
        description: "Merecedor de una dotación económica valorada en casi 3000 euros anuales para comenzar y completar mis estudios en Ingeniería en Telecomunicaciones",
        date: "Sep 2022",
    },
    {
        id: 2,
        title: "Comienzo en el Mundo de la Programación",
        subtitle: "Autodidacta",
        description: "Comienzo en mundo de la programación, que siempre me apasionó, programando por primera vez en Python ",
        date: "May 2018",
    }
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 2,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 12,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 1,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Tic-Tac-Toe",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/eldaniga/tic-tac-toe",
        urlDemo: "https://eldanyga-tictactoe.netlify.app/",
    }
   
];