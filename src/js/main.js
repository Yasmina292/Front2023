function removeTask(event) {
  // Функция для удаления задачи из списка
  let listItem = event.target.closest(".todoList__li");
  if (listItem) {
    listItem.remove();
  }
}

function KeyDown(event) {
  // Функция, которая реагирует на нажатие клавиши Enter в поле ввода задачи
  if (event.keyCode === 13) {
    event.preventDefault();
    add(); // Вызываем функцию добавления задачи
  }
}

function updateCounter() {
  // Функция для обновления счетчиков задач
  let totalCounter = document.querySelector(".todoList__counter.total span");
  let doneCounter = document.querySelector(".todoList__counter.done span");
  let taskList = document.getElementById("taskList");

  // Получаем общее количество задач
  let totalTasks = taskList.children.length;
  // Получаем количество выполненных задач
  let doneTasks = taskList.getElementsByClassName("done").length;

  // Обновляем текст счетчиков
  totalCounter.textContent = totalTasks;
  doneCounter.textContent = doneTasks;
}

function add() {
  // Функция для добавления задачи в список
  let input = document.querySelector(".todo__input-text");

  if (input.value.trim() == '') {
    alert("Введите задачу!");
    return;
  }

  let taskList = document.getElementById("taskList");
  let li = document.createElement("li");
  let taskText = document.createElement("p");
  let deleteIcon = document.createElement("img");
  let text = input.value.trim();

  li.classList.add("todoList__li");
  taskText.textContent = text;

  deleteIcon.src = "./src/img/delete-svgrepo-com.svg";
  deleteIcon.alt = "";
  deleteIcon.classList.add("todoList__li-cart");
  deleteIcon.addEventListener("click", removeTask);

  li.appendChild(taskText);
  li.appendChild(deleteIcon);
  taskList.appendChild(li);

  input.value = "";
}

// Инициализация счетчиков при загрузке страницы
window.addEventListener("load", updateCounter);




