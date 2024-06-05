import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { StorageProvider } from './context/StorageContext';

function App() {
  return (
    <>
      <Header />
      <StorageProvider>
        <Outlet />
      </StorageProvider>
      <Footer />
    </>
  );
}

export default App;
