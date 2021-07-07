import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

const App = () => {

  let user = {
    nombre: 'Ezequiel',
    apellido: 'Caceres',
    cumple: new Date(2005, 5, 17)
  };

  // render
  return (
    <>
      <Navbar />
      <Main title="Mi app que buena" user={user} />
      <Footer />
    </>
  );
}

export default App;
