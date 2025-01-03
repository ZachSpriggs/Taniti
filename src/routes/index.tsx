import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import Dining from '../pages/Dining/Dining';
import Lodging from '../pages/Lodging/Lodging';
import Entertainment from '../pages/Entertainment/Entertainment';
import FAQ from '../pages/FAQ/FAQ';
import Contact from '../pages/Contact/Contact';
import Transportation from '../pages/Transportation/Transportation';

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/dining", element: <Dining /> },
      { path: "/lodging", element: <Lodging /> },
      { path: "/entertainment", element: <Entertainment /> },
      { path: "/transportation", element: <Transportation /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];