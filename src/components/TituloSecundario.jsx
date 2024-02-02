const TituloSecundario = ({comision, anioActualProps}) => {
  return (
    <article>
      <h2>Practica con React {anioActualProps}</h2>
      <p>
        React es una biblioteca de JavaScript utilizada para construir
        interfaces de usuario interactivas y eficientes. Desarrollada y
        mantenida por Facebook, React se centra en la creación de componentes
        reutilizables que representan diferentes partes de la interfaz de
        usuario. Su principal característica es el modelo de programación
        declarativo, que permite a los desarrolladores describir cómo debería
        verse la interfaz en un estado particular y React se encarga de
        actualizar automáticamente la vista cuando cambian los datos. Además,
        React facilita la construcción de aplicaciones escalables al dividir la
        interfaz de usuario en componentes independientes y gestionar
        eficientemente la manipulación del DOM a través de su enfoque de
        reconciliación virtual.
        <br></br>
        Comision: {comision}
      </p>
    </article>
  );
};

export default TituloSecundario;
