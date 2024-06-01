import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { DatabaseProvider } from './context/DatabaseContext';

function App() {
  return (
    <>
      <Header />
      <DatabaseProvider>
        <Outlet />
      </DatabaseProvider>
      <Footer />
    </>
  );
}

export default App;
