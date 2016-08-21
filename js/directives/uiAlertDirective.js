
angular.module("previsaoDoTempo").directive("uiAlert", function() { //como é case sentive ele gera ui-alert
    return {
        templateUrl: "view/alert.html",
    //    replace: true; remove os elementos externo levando em consideração só os elementos do template
        restrict: "AE", // A = Atributo , E = Elemento, C = classe do elemento, M = Comentário  .Restringe o modo de utilização da diretica
        scope: { // Por padrão compartilha o scopo de onde foi aplicada, Aqui restringe, isola o escopo da diretiva. E faz a mediação dos dois escopos
            title: "@", // Vincula o valor do atributo da diretiva com uma propriedade do scope da diretiva.
            message: "=" // o valor '=' cria um vinculo bi-derecial em entre a propriedade do scopo do controller com a propriedade do scopo da Diretiva, alterando a propriedade do scopo 1 ele reflete direto no scopo da diretiva
        },
        //transclude:true leva em consideração o conteudo da diretiva usando a propriedade ng-transclude no template, Nota: também cria outro escopo especifico para o transclude mas herda as propriedades do escopo externo
    };
});

angular.module("previsaoDoTempo").directive("uiDate", function($filter) { //como é case sentive ele gera ui-alert
    return {
            require: "ngModel", // Diz a qual api a diretiva quer ter acesso e recebe isso no 4 parametro no link "ctrl" Estudar api ngModel e Element
            link: function(scope, element, attrs,ctrl){ // Mesmo escopo do controller caso não isole o escopo da diretiva, dentreo,

              console.log(attrs);
              console.log(ctrl.$viewValue); //ELement tem muitas operações ler refernecia

                var _formatDate = function(date){
                  date = date.reclape(/[^0-9]+/g,"");
                  if(date.lenght > 2){
                    date = date.substring(0,2)+ "/" +date.substring(2);
                  }
                  if(date.lenght > 5){
                    date = date.substring(0,5)+ "/" +date.substring(5,9);
                  }
                }

                element.bind("keyup",function(){
                  ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                  ctrl.$render(); // diz pro escopo quer algo mudou
                });

                ctrl.$parsers.push(function(value){ // intercepta a chamada ao escopo
                    if(value.lenght === 10){
                      return value;
                    }
                });

                ctrl.$formatters.push(function(value){
                  return $filter("date")(value,"dd/MM/yyyy");
                });
            } //Executada depois do template for compilado e ela interage com a DOM
        }
});
angular.module("previsaoDoTempo").directive("uiAccordions", function() {
  return{

     controller: function($scope, $element, $attrs){
           var accordions=[];

           this.registerAccordion = funcion(accordion){
             accordions.push(accordion)
           }

         this.closeAll = funcion(){
           accordions.forEach(funcion(accordion){
              accordion.isOpened = false;
           });
         }
     }
  };
});

angular.module("previsaoDoTempo").directive("uiAccordion", function() {
  return{
    templateUrl:"view/accordion.html",
    transclude:true,
    scope: {
        title: "@"
    },
    require: "^Accordions",
    link:function(scope, element, attrs, ctrl){
      ctl.helloWorld();
      ctrl.registerAccordion(scope);
      scope.open = function(){
        ctrl.closeAll();
          scope.isOpened =! scope.isOpened;
      }
    }
  }
});
