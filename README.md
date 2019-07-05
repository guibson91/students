# Students
Aplicativo que cadastra alunos e suas notas para que seja exibido o status de aprovação.

## Objetivo
O aplicativo foi criado com intuito de familiarização e entendimento dos principais conceitos do Ionic 1 (AngularJS), dos quais:

1) Organização e estrutura do modelo MVC.
2) Utilização de componentes próprios (alerts, toasts)
3) Módulos principais:

```
angular.module('starter.controllers', []) => Instancia os controllers de cada view (template html).
angular.module('starter.services', []) => Instancia as factories que servirão para compartilhar variáveis e funções com os controllers.

```
4) Conceito de $scope: Nos controllers são declarados o param $scope, responsável pela comunicação com sua respectiva view, tanto para variáveis, quanto para funções.

5) Forma genérica de acessar qualquer $scope de um controller em outro:

```
  //Para compartilhar conteúdo entre controllers
  .factory('Scopes', function ($rootScope) {
    var mem = {};

    return {
      store: function (key, value) {
        mem[key] = value;
      },
      get: function (key) {
        return mem[key];
      }
    };
  })
```

6) Elementos análogos ao Angular4+ de controles e iterações na VIEW.

```
ng-model="x" ===> [(ngModel)]="x"
ng-if="x" ===> *ngIf="x"
ng-repeat="element in array" ===> *ngFor="element in array"
```
  
## Extras

Foi utilizado o [Materialize](https://materializecss.com/) para estilização.

