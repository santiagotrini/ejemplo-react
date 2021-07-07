import { useState } from 'react';
const Contador = () => {
  // hook
  const [numero, setNumero] = useState(0); 

  const handleClick = () => {
    console.log('me clickeaste');
    setNumero(numero + 1);
    console.log(numero);  
  };  

  return (
    <>
      <h1 style={{textAlign: 'center'}}>{numero}</h1>
      <button onClick={handleClick}>Clickeame</button>
    </>  
  );  
};

export default Contador;