const url = "https://cosmic-backbone-386318.rj.r.appspot.com/hashCodeServer";
const data = {
  nome: "JoaoLucasMota",
  email: "joaolucasmmd@gmail.com",
  cpf: "701.400.561-81"
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log("Resposta:", data.resposta);
    console.log("Código hash:", data.hash);
    console.log("Pergunta:", data.pergunta);
  })
  .catch(error => {
    console.error("Erro ao realizar a requisição:", error);
  });