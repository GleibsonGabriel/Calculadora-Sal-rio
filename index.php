<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Calculadora de Salário</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <h1>Calculadora de Salário</h1>
<!-- Inicio form -->
    <form action="action.php" method="get">
      <table>
<!-- Campo salário bruto -->
        <tr>
          <th colspan="4" style="text-align: center;">Descubra o valor correto do seu salário líquido:</th>
        </tr>
        <tr>
          <th><label for="salario">Salário Bruto:</label></th>
          <td><input type="number" id="salario" name="salario" step="0.01" placeholder="R$" style="width: 60px" required></td>
          <br>
<!-- Campo desconto INSS -->
          <th><label for="inss">Desconto INSS:</label></th>
          <td><input type="number" id="inss" name="inss" step="0.01" style="width: 40px" required>%</td>
        </tr>
        <br>
<!-- Campo desconto VT -->
        <tr>
          <th><label for="vt">Desconta VT?</label></th>
          <td><input type="checkbox" id="vt" name="vt"></td>
          <br>
          <th><label for="descontoVT">Desconto VT(Se aplicável):</label></th>
          <td><input type="number" id="descontoVT" name="descontoVT" step="0.01" style="width: 40px">%</td>
          <br>
<!-- Campo desconto opcional -->
        <tr>
          <th><label for="outrosDescontos">Descontos adicionais:</label></th>
          <td><input type="number" id="outrosDescontos" name="outrosDescontos" step="0.01" style="width: 60px"></td>
      <th><h5>Outros descontos?</h5></th>
      <td><select name="outrosDescontos" id="outrosDescontos">
      <option value="nenhum">Nenhum</option>
      <option value="percentual">Percentual</option>
      <option value="fixo">Valor fixo</option>
      </select></td>
        </tr>
        <tr>
<!-- Campo opcional 2 -->
        <tr>
          <th><label for="outrosDescontos2">Descontos adicionais:</label></th>
          <td><input type="number" id="outrosDescontos2" name="outrosDescontos2" step="0.01" style="width: 60px"></td>
      <th><h5>Outros descontos?</h5></th>
      <td><select name="outrosDescontos2" id="outrosDescontos2">
      <option value="nenhum2">Nenhum</option>
      <option value="percentual2">Percentual</option>
      <option value="fixo2">Valor fixo</option>
      </select></td>
        </tr>
<!-- Botão calcular -->
          <td colspan="4" style="text-align: center;">
            <input type="submit" value="Calcular" style="width: 50%">
        </tr>
<!-- Fim do formulário -->
      </table>
    </form>
    <footer>Desenvolvido por Gleibson Gabriel.<footer>
  </body>
</html>