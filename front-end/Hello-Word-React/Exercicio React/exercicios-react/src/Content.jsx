import React from "react";

class content extends React.Component{
  
  render(){
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return(
      conteudos.map(({ conteudo, bloco, status }, i) => {
        return (
        <>
          <p key={i}>O conteúdo é: {conteudo}</p>
          <p key={i}>Status: {status}</p>
          <p key={i}>Bloco:{bloco}</p>
        </>
        )
      })
    )
  }
}

export default content;