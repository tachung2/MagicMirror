Module.register("Todolist", {
    defaults: {
        localStorageKey: "todolist_data", // 로컬 스토리지 키
    },

    getStyles: function() {
        return ["Todolist.css"];
    },

    start: function() {
        Log.info(`Starting module: ${this.name}`);
        this.tasks = []; // 할 일 목록 초기화
    },

    getDom: function() {
        const wrapper = document.createElement("div");
        wrapper.id = "todolist-wrapper";
        wrapper.className = "todolist-wrapper";

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.className = "date-input";

        const taskInput = document.createElement("input");
        taskInput.type = "text";
        taskInput.placeholder = "Enter task...";
        taskInput.className = "task-input";
        taskInput.addEventListener("focus", () => {
            this.sendNotification("KEYBOARD");
        });

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.className = "save-button";
        saveButton.addEventListener("click", () => {
            const date = dateInput.value;
            const task = taskInput.value;

            if (date && task) {
                this.addTask(date, task);
                this.saveData();
                this.sendNotification("UPDATE_TASK_LIST", this.tasks);
                this.updateDom();

                dateInput.value = "";
                taskInput.value = "";
            }
        });

        wrapper.appendChild(dateInput);
        wrapper.appendChild(taskInput);
        wrapper.appendChild(saveButton);

        wrapper.style.display = "none";
        return wrapper;
    },

    notificationReceived: function(notification) {
        if (notification === "TODO_OPEN") {
            const wrapper = document.getElementById("todolist-wrapper");
            if (wrapper.style.display === "none") {
                wrapper.style.display = "block";
            } else {
                wrapper.style.display = "none";
            }
        }
    },

    addTask: function(date, task) {
        const formattedTask = `${date}: ${task}`;
        this.tasks.push(formattedTask);
    },

    saveData: function() {
        const data = JSON.stringify(this.tasks);
        localStorage.setItem(this.config.localStorageKey, data);
    },
});