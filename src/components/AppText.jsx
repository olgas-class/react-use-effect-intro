import { useEffect } from "react";

function AppText() {
  const unmountedFunction = () => {
    console.log("Componente è morto :'(");
  }

  // La funzione che sarà eseguita al mounted
  useEffect(() => {
    console.log("Componente creato :D");

    return unmountedFunction
  }, []);



  return (
    <div className="alert alert-primary">Ciao sono testo nel componente</div>
  );
}

export default AppText;
