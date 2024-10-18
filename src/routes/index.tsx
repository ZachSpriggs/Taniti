import React from 'react';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Cuisine from '../pages/Cuisine';
import Lodging from '../pages/Lodging';
import Entertainment from '../pages/Entertainment';
import About from '../pages/About';

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/cuisine", element: <Cuisine /> },
      { path: "/lodging", element: <Lodging /> },
      { path: "/entertainment", element: <Entertainment /> },
      { path: "/about", element: <About /> },
    ],
  },
];