<?php
// funcão para solicitar os dados novamente
function retry() {
    echo '<form action="index.php" method="get">
          <button type="submit">Voltar</button>
      </form>';
}
// validação dos campos do formulário
if (isset($_GET['vt'])) {
    // Verifica se o parâmetro 'descontoVT' está definido
    if (isset($_GET['descontoVT'])) {
        $salario = $_GET['salario'];
        $inss = $_GET['inss'];
        // Aqui você pode processar os dados como necessário
        echo "Salário: " . htmlspecialchars($salario) . "<br>";
        echo "INSS: " . htmlspecialchars($inss) . "<br>";
    } else {
        // Se o parâmetro 'descontoVT' não estiver definido
        echo "Erro: Desconto VT não informado.<br>";
        retry();
    }
} else {
    // Se o parâmetro 'vt' não estiver definido
    echo 'Teste: Checkbox VT não selecionado.<br>';
}
?>
