$(document).ready(function () {
  // Adiciona uma tarefa
  $(".newTask").on("click", function () {
      var taskInput = $('<input class="nameOf" placeholder="Adicionar nova tarefa..." type="text" />');

      
      var modelTask = `<li class="taskBox">
                          <button class="priority higher">↑</button>
                          <button class="priority lower"> ↓</button>
                          <div class="taskName">${taskInput[0].outerHTML}</div>
                          <input class="checkBox" type="checkbox"></input>
                          <button class="removeTask">x</button>
                      </li>`;
      
      if ($(".tasksToDo").children().length < 10) {
          $(".tasksToDo").append(modelTask);
          taskInput.val(''); // Limpa o input após adicionar
      } else {
          alert("Limite de tarefas excedido!");
      }
  });

  // Remove uma tarefa
  $(document).on("click", ".removeTask", function () {
      $(this).closest(".taskBox").remove();
  });

  // Faz a tarefa passar de uma coluna para a outra
  $(document).on("change", ".checkBox", function () {
      var aux = $(this).closest(".taskBox").find(".nameOf").val();
      var modelTask;

      if ($(this).is(":checked")) {
          modelTask = `<li class="taskBox">
                          <div class="taskName"><input value="${aux}" class="nameOf" type="text" /></div>
                          <input class="checkBox" type="checkbox" checked></input>
                       </li>`;
          if (aux) {
              $(".tasksDone").append(modelTask);
              $(this).closest(".taskBox").remove();
          }
      } else {
          modelTask = `<li class="taskBox">
                          <button class="priority higher">↑</button>
                          <button class="priority lower"> ↓</button>
                          <div class="taskName"><input value="${aux}" class="nameOf" type="text" /></div>
                          <input class="checkBox" type="checkbox"></input>
                          <button class="removeTask">x</button>
                       </li>`;
          $(".tasksToDo").append(modelTask);
          $(this).closest(".taskBox").remove();
      }
  });

  // Sobe a tarefa
  $(document).on("click", ".higher", function () {
      var $taskBox = $(this).closest(".taskBox");
      var $lastBrother = $taskBox.prev();
      if ($lastBrother.length) {
          $taskBox.insertBefore($lastBrother);
      }
  });

  // Desce a tarefa
  $(document).on("click", ".lower", function () {
      var $taskBox = $(this).closest(".taskBox");
      var $nextBrother = $taskBox.next();
      if ($nextBrother.length) {
          $taskBox.insertAfter($nextBrother);
      }
  });

  // Salva as tarefas
  $(document).on("click", ".save", function() {
      $(".tasksToDo").children(".taskBox").each(function(index, element) {
          var taskContent = $(element).find(".nameOf").val();
          console.log('Índice:', index, 'Conteúdo:', taskContent);
          alert('Índice: ' + index + ', Conteúdo: ' + taskContent);
      });
  });
});
