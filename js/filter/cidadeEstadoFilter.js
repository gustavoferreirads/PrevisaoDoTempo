angular.module("previsaoDoTempo").filter("cidadeEstado",function(){
	return function(input, estado ){
        if(input && estado)
            return input + " - " + estado ;
    return input
    }
});