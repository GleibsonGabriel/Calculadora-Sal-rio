function processar() {
    let formulario = document.getElementById('formulario');
    let salario = parseFloat(document.getElementById('salario').value);
    let inss = parseFloat(document.getElementById('inss').value);
    let vt = document.getElementById('vt').checked;
    let descontoVT = parseFloat(document.getElementById('descontoVT').value);
    let outros = parseFloat(document.getElementById('outros').value);
    let outrosDescontos = document.getElementById('outrosDescontos').value;
    let outros2 = parseFloat(document.getElementById('outros2').value);
    let outrosDescontos2 = document.getElementById('outrosDescontos2').value;

    // Inicializa a variável resultado e debita porcentagem do INSS
    let resultado = salario - (salario / 100 * inss);
    // Função para desconto opcional
    function descontoOpcional(resultado){
        switch (outrosDescontos){
            case "percentual":
            resultado -= (resultado * outros / 100);
            return resultado;
            break;
            case "fixo":
            resultado -= outros;
            return resultado;
            break;
        }
        return resultado;
    }
    // Função para desconto opcional 2
    function descontoOpcional2(resultado){
        switch (outrosDescontos2){
            case "percentual2":
            resultado -= (resultado * outros2 / 100);
            return resultado;
            break;
            case "fixo2":
            resultado -= outros2;
            return resultado;
            break;
        }
        return resultado;
    }
    // Verificação do campo de desconto opcional 1
    function verificarCampoOpcional(){
        if (outrosDescontos === "percentual"){
            if(isNaN(outros)){
                alert("Preencha os campos de desconto opcional ou selecione 'nenhum'.");
                return false;
            }
        }
        else if (outrosDescontos === "fixo"){
            if(isNaN(outros)){
                alert("Preencha os campos de desconto opcional ou selecione 'Nenhum'.");
                return false;
            }
        }
        return true;
    }
    //Verificação do campo de desconto opcional 1
    function verificarCampoOpcional2(){
        if (outrosDescontos2 === "percentual2"){
            if(isNaN(outros2)){
                alert("Preencha os campos de desconto opcional ou selecione 'Nenhum'.");
                return false;
            }
        }
        else if (outrosDescontos2 === "fixo2"){
            if(isNaN(outros2)){
                alert("Preencha os campos de desconto opcional ou selecione 'Nenhum'.");
                return false;
            }
        }
        return true;
    }
    // Verifica se os campos salário bruto e INSS estão preenchidos
    if (isNaN(resultado)){
        alert("Preencha todos os campos obrigatórios!")
    }
    else {
        // Inicialização da função de verificação dos campos opcionais
        if(!verificarCampoOpcional()){
            return;
        }
        if(!verificarCampoOpcional2()){
            return;
        }
        // Inicialização das funçōes de desconto
        resultado = descontoOpcional(resultado);
        resultado = descontoOpcional2(resultado);
        // Verificação da seleção de desconto do VT  e aplicação do desconto
        if (vt){
            resultado -= (resultado * descontoVT /100);
        }
        // Função para formatar resultado
        function formatarValor(valor) {
            return Math.floor(valor * 100) / 100;
        }
        //Exibição de resultados
        let valorAbatidoVT = (salario * descontoVT / 100);
        let valorAbatidoINSS = (salario * inss / 100);
        let valorAbatidoOpc1 = 0;
        let valorAbatidoOpc2 = 0;
        if (isNaN(valorAbatidoVT)){
            valorAbatidoVT = 0;
        }
        if (outrosDescontos === "percentual") {
            valorAbatidoOpc1 = (salario * outros / 100);
        }
        if (outrosDescontos2 === "percentual2") {
            valorAbatidoOpc2 = (salario * outros / 100);
        }
        alert("Desconto VT: R$" + formatarValor(valorAbatidoVT) +
        "\nDesconto INSS: R$" + formatarValor(valorAbatidoINSS) +
        "\nOutros descontos: R$" + formatarValor(valorAbatidoOpc1) +
        "\nOutros descontos: R$" + formatarValor(valorAbatidoOpc2));
        alert("Seu salário final: R$" + formatarValor(resultado));
    }
}