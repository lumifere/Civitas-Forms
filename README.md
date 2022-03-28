# **Registro na Landing Page da Civitas**

## **Introdução**

Seja bem-vinde à página de cadastro do marketplace da Civitas! Nela você consegue realizar o cadastro de sua conta através da inserção de seus dados. Para o cadastro e visualização dos dados oferecidos, siga as instruções abaixo.

<br>

## **Clone o Repositório**

Para que seja possível a execução dos arquivos deste repositório, o usuário deve clonar através da ferramenta **[git](https://git-scm.com/downloads)**. Abrindo o terminal do seu sistema operacional ou o GitBash, insira o seguinte comando na pasta desejada:
```
git clone https://gitlab.com/lumifere/civitas-form.git
```

<br>

## **Instale o Node**

De forma a prosseguir com o processo, você deve ter instalado já o **[Node](https://nodejs.org/en/download/)**. Com isso, referencie a pasta **`civitas-form`** no terminal e digite o comando:
```
npm install
```
Esse comando tem como objetivo inserir a pasta **`node_modules`** dentro da pasta **`civitas-form`**.

<br>

## **Instale o JSON Server**

É necessário também fazer a instalação da biblioteca **[JSON Server](https://www.npmjs.com/package/json-server)**, bibliteca essa que simula uma API para cadastro das informações do site. Digite os seguintes comandos em ordem:

```
npm install -g json-server
json-server --watch db.json
``` 
Caso os comandos acima não funcionem, tente: 

```
npx json-server --watch db.json
json-server --watch db.json
```

A saída esperada deve ser 
```
  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/user

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

<br>

## **Instale o VSC e o Live Server**

A seguir é necessário que o usuário utilize o **[VSC](https://code.visualstudio.com/)** para visualização e edição dos arquivos do repositório. Essa necessidade se dá devido o uso da extensão **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**, que nos permitirá visualizar em tempo real as modificações feitas nos arquivos do repositório. 

<br>

## **Execução**

Com a extensão já instalada e com a fake API do JSON Server executando, abra o arquivo **`homepage.html`** no VSC e execute o Live Server através da opção **Go Live** no canto inferior direito do programa, ou pressione a tecla **`F5`**.

Ao abrir a página do site no browser, insira os dados necessários e clique no botão **Registrar** logo abaixo. A página irá atualizar, evidenciando que os dados informados foram inseridos no arquivo **`db.json`**, bastando que você o abra no VSC para visualizar as informações cadastradas.