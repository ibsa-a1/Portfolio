import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.svg";
import profile_img from "./profile_img.webp";
import github_icon from "./github_icon.svg";
import linkedin_icon from "./linkedin_icon.svg";
import about_image from "./about_image.jpg";
import dev_img from "./dev_img.png";
import resume from "./resume.pdf"
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import vite_logo from "./vite_logo.svg";


export const assets = {
    menu_icon,
    cross_icon,
    profile_img,
    github_icon,
    linkedin_icon,
    about_image,
    dev_img,
    resume,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    vite_logo,
};

export const projectsData = [
    {
        id: 1,
        title: "My-Estate",
        description: "A fully responsive real estate landing page designed for property selling. Built with React and Tailwind CSS, it features smooth animations with Framer Motion, interactive image sliders, Toastify notifications, and a Web3-powered form for easy user submissions. This project demonstrates modern UI/UX design and responsiveness for real estate platforms.",
        image: project_img_1,
        code: "https://github.com/ibsa-a1/My-Estate.git",
        demo: "https://my-estate-black.vercel.app/",
    },
    {
        id: 2,
        title: "Online Code Editor",
        description: "A responsive online code editor supporting six programming languages. Built with React and Chakra UI V3 and uses Toastify notifications for internal errors, it provides users with ready-to-use code snippets for each language and executes code perfectly using the Piston API. This project showcases dynamic frontend development and real-time code execution in a clean, user-friendly interface.",
        image: project_img_2,
        code: "https://github.com/ibsa-a1/Online-Code-Editor.git",
        demo: "https://onlinecoder.vercel.app/",
    },
    {
        id: 3,
        title: "Movie App",
        description: "A fully responsive movie listing app fetching data from TMDB API. Built with React and CSS, it displays movie posters, titles, release dates, ratings, overviews, and trailers. Users can search for movies and save favorites using local storage and watch Trailors. This project highlights API integration, dynamic rendering, and state management in React.",
        image: project_img_3,
        code: "https://github.com/ibsa-a1/React-Movie-App.git",
        demo: "https://ibsa-movie-app.vercel.app/",
    },
    {
        id: 4,
        title: "Addis Ababa Centered Map",
        description: "A responsive map application centered on Addis Ababa, Ethiopia, built with React, React Leaflet, and OpenStreetMap. It allows users to search for places and is tailored specifically for Ethiopian locations. This project serves as a foundation for feature planned startup idea of mine, demonstrating interactive maps and geolocation-focused UI.",
        image: project_img_4,
        code: "https://github.com/ibsa-a1/Addis-Ababa-Centered-React-Leaflet.git",
        demo: "https://addis-ababa-map.vercel.app/",
    },
];