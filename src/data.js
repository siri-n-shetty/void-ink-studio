// import images
import Logo from '../src/img/header/vis_logo.png';
import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.jfif';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.jfif';
import GalleryImg5 from '../src/img/gallery/5.jfif';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.jpg';
import GalleryImg8 from '../src/img/gallery/8.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '#home', name: 'Home' },
    { href: '#about', name: 'About' },
    { href: '#gallery', name: 'Gallery' },
    { href: '#interview', name: 'Interview' },
    { href: '#contact', name: 'Contact' },
  ],
};

export const socialData = [
  { href: 'https://www.facebook.com/', icon: <GrFacebookOption /> },
  { href: 'https://www.instagram.com/', icon: <IoLogoInstagram /> },
  { href: 'http://pinterest.com/', icon: <IoLogoPinterest /> },
  { href: 'https://x.com/', icon: <IoLogoTwitter /> },
  { href: 'https://www.youtube.com/', icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: 'Void Ink Studio',
  subtitle:
    'Tattoos are more than just art—they’re expressions of identity, stories etched into the canvas of your skin.',
  btnText: 'read more',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'My Story:',
  subtitle1:
    "Every tattoo tells a story — a moment in time, a memory, a piece of someone's soul etched onto their skin forever. My journey into the world of tattooing began with a simple realization: art is not confined to a canvas. It's alive, breathing, and walking in the world. This belief drives every design I create and every person I connect with.",
  subtitle2:
    'My craft isn’t just about ink and needles; it’s about listening to stories, understanding emotions, and turning them into timeless works of art. From intricate patterns to bold statements, each tattoo is a collaboration between the client’s vision and my hands.',
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Discover my work:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“Your body is a canvas, and every tattoo tells a story. Choose one that resonates with your soul.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The team at Void Ink Studio goes above and beyond. Their artistry is unmatched, and their care makes every client feel special. Highly recommend!",
    name: 'James Peterson',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'The experience was nothing short of incredible. The attention to detail, patience, and passion poured into my tattoo was beyond what I imagined!',
    name: 'Emily Carter',
    occupation: 'Photographer',
  },
];

export const contactData = {
  title: 'Let’s Connect',
  info: [
    {
      title: 'London Studio',
      subtitle:
        'Bringing artistry to life in the heart of London. Let’s connect and create something meaningful together.',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '22 Camden High Street, London, United Kingdom',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+44 20 7946 0123',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'london@voidinkstudio.com',
      },
      link: 'View Location',
    },
    {
      title: 'Tokyo Studio',
      subtitle:
        'A fusion of tradition and modern ink. Visit our Tokyo location and craft your story through tattoos.',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '15 Shibuya Crossing, Tokyo, Japan',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+81 3-1234-5678',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'tokyo@voidinkstudio.com',
      },
      link: 'View Location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Tell us about your tattoo idea!',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About Void Ink Studio',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '22 Camden High Street, London, United Kingdom',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+44 20 7946 0123',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'london@voidinkstudio.com',
    },
  },
  links: {
    title: 'Quick Links',
    items: [
      { href: '#about', name: 'About me' },
      { href: '#gallery', name: 'My gallery' },
      { href: '#services', name: 'My services' },
      { href: '#contact', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Studio Hours: Plan Your Appointment',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Fresh Stories, Bold Perspectives, All in One Place.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};
