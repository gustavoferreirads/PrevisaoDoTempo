angular.module("previsaoDoTempo").factory("previsaoAPI", function ($http, config) {

    var _carregaPrevisoes = function (cidade) {
        return  $http.get(config.baseUrl + cidade);
    };

    return {
        carregaPrevisoes: _carregaPrevisoes
    };
});
