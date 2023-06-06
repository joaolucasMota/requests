
const axios = require('axios');

const url = "https://cosmic-backbone-386318.rj.r.appspot.com/hashCodeServer";
const nome = "JoaoLucasMota";
const email = "joaolucasmmd@gmail.com";
const cpf = "701.400.561-81";

const params = {
  nome: nome,
  email: email,
  cpf: cpf,
};

axios.post(url, params)
  .then(response => {
    const data = response.data;
    console.log("Resposta:", data.resposta);
    console.log("Código hash:", data.hash);
    console.log("Pergunta:", data.pergunta);
  })
  .catch(error => {
    console.error("Erro ao realizar a requisição:", error);
  });
