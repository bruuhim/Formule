const InputTitle = document.getElementById("title");
const InputDes = document.getElementById("description");
const InputStatus = document.getElementById("status");
const taskSubmit = document.getElementById("task-submit");
const taskList = document.createElement("task-list");

function AddTask() {
  taskSubmit.addEventListener("click", function submitTask(e) {
    e.preventDefault();
    let taskObj = {
      title: InputTitle.value.trim(),
      description: InputDes.value.trim(),
      status: InputStatus.value.trim(),
    };
    let temp = `        <li
          class="bg-white rounded-lg shadow p-4 flex items-start justify-between gap-4"
        >
          <div>
            <h3 class="font-semibold">${taskObj.title}</h3>
            <p class="text-sm text-slate-600 mt-1">
              ${taskObj.description}
            </p>
            <span
              class="inline-block text-xs bg-slate-200 rounded-full px-2 py-1 mt-2"
              >${taskObj.status}</span
            >
          </div>
          <div class="flex flex-col items-end gap-2">
            <select
              class="border border-slate-300 rounded px-2 py-1 text-xs bg-white"
            >
              <option value="To do">To do</option>
              <option value="In progress" selected>In progress</option>
              <option value="Done">Done</option>
            </select>
            <button class="text-sm text-red-600 hover:text-red-800 font-medium">
              Delete
            </button>
          </div>
        </li>`;
    console.log(temp);
    taskList.appendChild(temp);
  });
}
