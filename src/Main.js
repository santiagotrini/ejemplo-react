import Saludo from './Saludo';
import Contador from './Contador';

const Main = props => {

    const { title, user } = props;

    return (
       <main>
         <h1>{title}</h1>
         <h2>Subtitulo</h2>
         <Saludo user={user} />
         <Contador />  
       </main>        
    );  
  };
  
  export default Main;