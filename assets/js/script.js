//Permite apenas números ao digitar no CEP
document.getElementById("cep").addEventListener("input", function () {
  var i = document.getElementById("cep").value.length;
  var str = document.getElementById("cep").value;
  if (isNaN(Number(str.charAt(i - 1)))) {
    document.getElementById("cep").value = str.substr(0, i - 1);
  }
});

//Aplica máscara de CEP
document.getElementById("cep").addEventListener("keydown", function (event) {
  if (event.keyCode != 46 && event.keyCode != 8) {
    var i = document.getElementById("cep").value.length;
    if (i === 5)
      document.getElementById("cep").value =
        document.getElementById("cep").value + "-";
  }
});

//Integração com a API Via Cep
const preencherCampos = (endereco) => {
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
};

const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const dados = await fetch(url);
  const endereco = await dados.json();
  if (endereco.hasOwnProperty("erro")) {
    alert("CEP não localizado!");
  } else {
    preencherCampos(endereco);
  }
};

function procurarEndereco() {
  var cep = document.getElementById("cep").value;
  var botao = document.getElementById("botao");
  if (!cep) {
    alert("Por gentileza, informe um CEP válido.");
  } else {
    pesquisarCep();
  }
}

function limparCampos() {
  document.getElementById("cep").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
}
