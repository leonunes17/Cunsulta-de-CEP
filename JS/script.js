function limpa_formulário_cep() {

    document.getElementById('rua').value=("");
    document.getElementById('complemento').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
    document.getElementById('siafi').value=("");
    document.getElementById('ddd').value=("");
    document.getElementById('gia').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {

        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('complemento').value=(conteudo.complemento);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        document.getElementById('ibge').value=(conteudo.ibge);
        document.getElementById('siafi').value=(conteudo.siafi);
        document.getElementById('ddd').value=(conteudo.ddd);
        document.getElementById('gia').value=(conteudo.gia);
    
    } else {
        limpa_formulário_cep();
         alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {   

var cep = valor.replace(/\D/g, '');

if (cep != "") {

    var validacep = /^[0-9]{8}$/;
   
    if(validacep.test(cep)) {

        var script = document.createElement('script');

        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        document.body.appendChild(script);

        let btn = document.querySelector("#button");
        let listform = document.querySelector(".listform");
        btn.addEventListener("click", function () {
        if (listform.style.display === "block") {
            listform.style.display = "none";
        } else {
            listform.style.display = "block";
   }
});
             
    } else {
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
        
    }
} else {
    limpa_formulário_cep();
    alert("Digite um CEP para fazer a consulta.");  
    }
};