const inputNome = document.querySelector("#inicial_nome");
const inputEmail = document.querySelector("#inicial_email");
const inputSenha = document.querySelector("#inicial_senha");
const inputData = document.querySelector("#inicial_data");
const createBtn = document.querySelector("#inicial_registrar");
const erro = document.querySelector(".erro");

createBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const nome = inputNome.value;
  const email = inputEmail.value;
  const senha = inputSenha.value;
  const data = inputData.value;

  if (nome === "" || email === "" || senha === "" || data === ""){
    erro.classList.remove("invisivel");
  } else {
    erro.classList.add("invisivel");
    await criarRegistro(nome, email, senha, data);
  }
});

const criarRegistro = async (nome, email, senha, data) => {
  try {
    const resposta = fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: `${nome}`,
        email: `${email}`,
        senha: `${senha}`,
        data: `${data}`
      }),
    });

    const conteudo = await resposta.json();
    return conteudo;

  } catch (error) {
    
    console.log(error);
  }
}