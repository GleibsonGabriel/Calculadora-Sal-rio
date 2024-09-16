function processar() {
    let formulario = document.getElementById('formulario');
    let salario = document.getElementById('salario').value;
    let inss = document.getElementById('inss').value;
    let vt = document.getElementById('vt').checked;
    let descontoVT = document.getElementById('descontoVT').value;
    let outros = document.getElementById('outros').value;
    let outrosDescontos = document.getElementById('outrosDescontos').value;
    let outros2 = document.getElementById('outros2').value;
    let outrosDescontos2 = document.getElementById('outrosDescontos2').value;
    
     let resultado = salario - (salario / 100 * inss);

      if(vt){
        resultado = resultado - (resultado / 100 * descontoVT);
        alert("Resultado: " + resultado);
      }
      else{
        alert("Resultado: " + resultado);
      }
    }