angular.module('starter.services', [])

  //Para compartilhar escopos entre controllers
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

  .factory('Alunos', function () {

    // Might use a resource here that returns a JSON array

    var alunos = [];

    return {
      all: function () {
        return alunos;
      },
      remove: function (aluno) {
        alunos.splice(alunos.indexOf(aluno), 1);
      },

      add: function (aluno) {
        alunos.push(aluno);
        aluno = {};
      },

      get: function (alunoId) {
        for (var i = 0; i < alunos.length; i++) {
          if (alunos[i].id === parseInt(alunoId)) {
            return alunos[i];
          }
        }
        return null;
      },
      update: function (newAluno) {
        return alunos.map(function (aluno) {
          if (aluno.id === parseInt(newAluno.id)) {
            return newAluno;
          }
          return aluno;
        })
      }
    };
  })