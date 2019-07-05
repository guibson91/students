angular.module('starter.controllers', [])

  //CONTROLLER DA TAB ALUNOS
  .controller('AlunosCtrl', function ($scope, Alunos, $ionicPopup) {

    $scope.aluno = {};

    // An alert dialog
    $scope.showAlert = function () {
      var alertPopup = $ionicPopup.alert({
        title: 'Formulário inválido',
        template: 'Por favor, preencha todos os campos obrigatórios.'
      });
      alertPopup.then(function (res) {
        console.log('Confirmado!');
      });
    };

    //EXECUTA sempre que a página se tornar ativa
    $scope.$on('$ionicView.enter', function (e) {
      console.log("Tab Alunos ativada!");
    });

    $scope.add = function (aluno) {
      console.log("Vamos adicionar o aluno: ", aluno);
      if (!aluno.nome || !aluno.email || !aluno.nota1 || !aluno.nota2) {
        $scope.showAlert();
      }
      else {
        var media = (aluno.nota1 + aluno.nota2) / 2
        aluno.media = media.toFixed(2);
        Alunos.add(aluno);
        M.toast({ html: `${aluno.nome} foi adicionado(a)`, inDuration: 400, outDuration: 350 })
        setTimeout(function () {
          M.Toast.dismissAll();
        }, 1100)
        $scope.aluno = {};
      }

    }

  })


  //CONTROLLER DA TAB RESULTADOS
  .controller('ResultadosCtrl', function ($scope, Alunos, Scopes) {

    $scope.settings = {
      aprovados: true,
      reprovados: true
    };

    $scope.$on('$ionicView.enter', function (e) {
      console.log("Tab resultados!!");
      if (Scopes.get('settings')) {
        $scope.settings = Scopes.get('settings');
        console.log("settings: ", $scope.settings);
      }
    });

    $scope.mostrarAluno = function (aluno) {
      if ($scope.settings.aprovados == true && aluno.media >= 7) {
        return true;
      }
      else if ($scope.settings.reprovados == true && aluno.media < 7) {
        return true;
      }
      else {
        return false;
      }
    }

    $scope.busca;

    $scope.alunos = Alunos.all();

    $scope.remove = function (aluno) {
      Alunos.remove(aluno);
    };

  })

  //CONTROLLER DA TAB FILTROS
  .controller('FiltrosCtrl', function ($scope, Scopes) {
    $scope.settings = {
      aprovados: true,
      reprovados: true
    };
    Scopes.store('settings', $scope.settings);

  });
