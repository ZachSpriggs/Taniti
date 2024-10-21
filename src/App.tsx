import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import { useRoutes } from 'react-router-dom';
import './styles/main.scss'

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

const AppRoutes: React.FC = () => {
  const routeElements = useRoutes(routes);
  return <>{routeElements}</>;
};

export default App;