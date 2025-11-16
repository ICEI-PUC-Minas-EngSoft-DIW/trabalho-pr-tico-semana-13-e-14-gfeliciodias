// ================== PEGAR OS DADOS DO LOCALSTORAGE ==================
const dados = JSON.parse(localStorage.getItem("gastos"));

if (!dados) {
  alert("Nenhum dado encontrado! Volte e preencha o formulário.");
}

// Labels e valores
const labels = ["Contas", "Alimentação", "Plano de Saúde", "Lazer", "Internet", "Outros"];
const valores = [
  dados.contas,
  dados.alimentacao,
  dados.planoSaude,
  dados.lazer,
  dados.internet,
  dados.outros
];

// ================== GERAR TEXTO DESCRITIVO ==================
const infoDiv = document.getElementById("info-texto");

let textoHTML = "<h2>Resumo dos Gastos:</h2><ul>";

labels.forEach((label, i) => {
  textoHTML += `<li><strong>${label}:</strong> R$ ${valores[i].toFixed(2)}</li>`;
});

textoHTML += "</ul>";

infoDiv.innerHTML = textoHTML;

// ================== GERAR GRÁFICO CHART.JS ==================
const ctx = document.getElementById("meuGrafico").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [{
      label: "Gastos (R$)",
      data: valores,
      backgroundColor: [
        "#00b894", "#00cec9", "#0984e3",
        "#6c5ce7", "#74b9ff", "#a29bfe"
      ],
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#000" }
      }
    },
    scales: {
      x: {
        ticks: { color: "#000" }
      },
      y: {
        ticks: { color: "#000" }
      }
    }
  }
});
