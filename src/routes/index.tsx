import React from 'react';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import Cuisine from '../pages/Cuisine/Cuisine';
import Lodging from '../pages/Lodging/Lodging';
import Entertainment from '../pages/Entertainment/Entertainment';
import About from '../pages/About/About';
import FAQ from '../pages/FAQ/FAQ';
import Contact from '../pages/Contact/Contact';

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/dining", element: <Cuisine /> },
      { path: "/lodging", element: <Lodging /> },
      { path: "/entertainment", element: <Entertainment /> },
      { path: "/about", element: <About /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];