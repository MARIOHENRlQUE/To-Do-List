$(document).ready(function () {
  var tasks = [];
  var taskTodo = "";
  var taskDone = "";

  //Adiciona uma tarefa
  $(".newTask").on("click", function () {
    var modelTask = `<div class="taskBox">
                            <button class="priority higher">↑</button>
                            <button class="priority lower"> ↓</button>
                            <div class="taskName" ><input class="nameOf"placeholder="Adicionar nova tarefa..." type="text" /></div>
                            <input class="checkBox" type="checkbox"></input>
                            <button class="removeTask">x</button>
                        </div>`;
    if ($(".tasksToDo").children().length <= 10) {
      $(".tasksToDo").append(modelTask);
    } else {
      alert("Limite de tarefas excedido!");
    }
  });

  //Remove uma tarefa
  $(document).on("click", ".removeTask", function () {
    $(this).closest(".taskBox").remove();
  });

  //Faz a tarefa passar de uma coluna para a outra
  $(document).on("change", ".checkBox", function () {
    if ($(this).is(":checked")) {
      var aux = $(this).closest(".taskBox").find(".nameOf").val();
      var modelTask = `<div class="taskBox">
                                <div class="taskName" ><input value="${aux}" class="nameOf"placeholder="Adicionar nova tarefa..." type="text" /></div>
                                <input class="checkBox" type="checkbox" checked></input>
                             </div>`;
      if (aux) {
        $(".tasksDone").append(modelTask);
        $(this).closest(".taskBox").remove();
      }
    } else if (!$(this).is(":checked")) {
      var aux = $(this).closest(".taskBox").find(".nameOf").val();
      var modelTask = `<div class="taskBox">
                                <button class="priority higher">↑</button>
                                <button class="priority lower"> ↓</button>
                                <div class="taskName" ><input value="${aux}" class="nameOf"placeholder="Adicionar nova tarefa..." type="text" /></div>
                                <input class="checkBox" type="checkbox"></input>
                                <button class="removeTask">x</button>
                            </div>`;
      $(".tasksToDo").append(modelTask);
      $(this).closest(".taskBox").remove();
    }
  });

  //Sobe a tarefa
  $(document).on("click", ".higher", function () {
    var lastBrother = $(this).closest(".taskBox").prev();
    if (lastBrother.length) {
      $(this).closest(".taskBox").insertBefore(lastBrother);
    }
  });

  //Desce a tarefa
  $(document).on("click", ".lower", function () {
    var nextBrother = $(this).closest(".taskBox").next();
    if (nextBrother.length) {
      $(this).closest(".taskBox").insertAfter(nextBrother);
    }
  });
});
