import { useState, useEffect } from "react";

function Home() {
  const [carregando] = useState(true);
  const [tarefas, setTarefas] = useState([]);

  const carregarDados = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
   setTarefas([
      { id: 1, nome: "Fazer o trabalho", status: "pendente" },
      { id: 2, nome: "Estudar API REST", status: "concluida" },
      { id: 3, nome: "Entregar as praticas", status: "pendente" },
      { id: 4, nome: "Revisar conteudo", status: "pendente" },
      { id: 5, nome: "Assistir video aulas", status: "concluida" },
    ]); 
  };
useEffect( () => {
const disparar = async () => { await carregarDados();
setCarregando(false);
};
disparar();
 },[]);
  return (
    <>
      <h1>Página Inicial</h1>
      <h2>Minhas Tarefas do Dia</h2>
      {carregando ? (
        <p>Aguarde...</p>
      ) : (
        <table>
       <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Status</th>
       </tr>
        { 
          tarefas.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.status}</td>
            </tr>
          ))}
      </table>
      )}
    </>
  );
}

export default Home;
