//  icons
import {
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiMail,
  FiPhone
} from 'react-icons/fi';


// projects images
import fashion1 from '../src/assets/img/projects/fashio-world-1.png';
import fashion2 from '../src/assets/img/projects/fashio-world-2.png';
import fashion3 from '../src/assets/img/projects/fashio-world-3.png';
import moment1 from '../src/assets/img/projects/moment1.png';
import moment2 from '../src/assets/img/projects/moment2.png';
import moment3 from '../src/assets/img/projects/moment3.png';
import cooky1 from '../src/assets/img/projects/cooky1.png';
import cooky2 from '../src/assets/img/projects/cooky2.png';
import cooky3 from '../src/assets/img/projects/cooky3.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/nishattasnim24',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/nishattasnim24/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/nishattasnim08',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/nishattasnim24/',
  },
];


// projects
export const projectsData = [
  {
    id: '1',
    image1: fashion1,
    image2: fashion2,
    image3: fashion3,
    name: 'Fashion World',
    shortDescription: "This is a Cloths' Warehouse Website",
    detailDescription: `This is a fashion warehouse
    This website content various kind of dresses
    This website allows to sell and restock product
    This website allows you to manage items
    This website contains some theoritical topics in blogs section`,
    technology: 'React JS, React Bootstrap, ',
    liveSite: 'https://fashion-world-60392.web.app/',
    clientSide: 'https://github.com/nishattasnim08/fashion-world-client-side',
    serverSide: 'https://github.com/nishattasnim08/fashion-world-server-side',
    category: 'web development',
  },
  
  {
    id: '2',
    image1: cooky1,
    image2: cooky2,
    image3: cooky3,
    name: 'Cooky',
    shortDescription: 'This is a manufacturing webside which includes Cooking Ware',
    detailDescription: `This is a manufacturing website
    This website allows user to post review
    This website allows user to order tools
    This website allows admin to manage orders
    This website contains protective routes`,
    liveSite: 'https://cooky-f12d4.web.app/',
    clientSide: 'https://github.com/nishattasnim08/cooky-client-side',
    serverSide: 'https://github.com/nishattasnim08/cooky-server-side',
    technology: 'react, tailwind, Daisy UI, react hook form, react firebase hook, nodeJS, mongoDB, express, crud operation',
    category: 'web development',
  },
  {
    id: '3',
    image1: moment1,
    image3: moment2,
    image2: moment3,
    name: 'Moments',
    shortDescription: 'This is an individual service provider webside who provide Photography Services',
    detailDescription: `Independent Service Provider
    Sign In/Sign Out
    Sign Up
    Create user with email and password (not working)
    Create user with Google
    CheckOte Route as Protected Route`,
    liveSite: 'https://moments-c202a.web.app/home',
    clientSide: 'https://github.com/nishattasnim08/moments',
    // serverSide: ,
    technology: 'React Bootstrap, React Router, React Hooks, Firebase Authentication',
    category: 'web development',
  },
 
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web development',
  },
  {
    name: 'graphics Design',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Graphics Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },

];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at tasnim24nishat@gmail.com',
  },
  {
    icon: <FiPhone />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Call me at +880 1303581057',
  },
];
