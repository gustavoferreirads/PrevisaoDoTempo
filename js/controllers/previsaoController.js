angular.module('previsaoDoTempo').controller('previsaoController', function (previsaoAPI) {
  this.titulo = 'Previsão do Tempo';
  this.error = 'Cidade não encontrada!';

  var contato = {
    data: 1034218800000
  };

  const that = this;
  this.buscaPrevisao = function (nomeDaCidade) {
    previsaoAPI.carregaPrevisoes(nomeDaCidade).success(function (data, status) {
      that.cidadeSelecionada = data;
      that.showError = data.cod === '404';
    });
  };
});
