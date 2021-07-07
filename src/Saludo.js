const Saludo = props => {

  const { user } = props;  

  return (
    <h4>Hola de nuevo, {user.nombre} {user.apellido}</h4>  
  );  
};

export default Saludo;