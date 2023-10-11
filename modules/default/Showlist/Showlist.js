Module.register("Showlist", {
    defaults: {
        localStorageKey: "todolist_data", // 로컬 스토리지 키
    },

    getStyles: function() {
        return ["Showlist.css"];
    },

    start: function() {
        Log.info(`Starting module: ${this.name}`);
        this.tasks = []; // 할 일 목록 초기화
        this.loadData(); // 로컬 스토리지에서 데이터 불러오기
        this.updateDom(); // 초기 UI 업데이트
    },

    getDom: function() {
        const wrapper = document.createElement("div");
        wrapper.id = "showlist-wrapper";
        wrapper.className = "showlist-wrapper";

        if (this.tasks.length === 0) {
            const emptyMessage = document.createElement("div");
            emptyMessage.textContent = "No tasks found";
            wrapper.appendChild(emptyMessage);
        } else {
            const list = document.createElement("ul");
            list.className = "task-list";

            this.tasks.forEach((task, index) => {
                const listItem = document.createElement("li");

                const taskText = document.createElement("span");
                taskText.textContent = task;
                listItem.appendChild(taskText);

                const deleteButton = document.createElement("button");
                deleteButton.className = "delete-btn";
                deleteButton.textContent = "x";
                deleteButton.addEventListener("click", () => {
                    this.deleteTask(index);
                    this.saveData();
                    this.updateDom();
                });
                listItem.appendChild(deleteButton);

                list.appendChild(listItem);
            });

            wrapper.appendChild(list);
        }

        return wrapper;
    },

    notificationReceived: function(notification, payload) {
        if (notification === "UPDATE_TASK_LIST" && Array.isArray(payload)) {
            console.log("come")
            this.tasks = payload;
            this.updateDom();
        }
    },

    loadData: function() {
        const data = localStorage.getItem(this.config.localStorageKey);
        if (data) {
            this.tasks = JSON.parse(data);
        } else {
            this.tasks = [];
        }
    },

    saveData: function() {
        const data = JSON.stringify(this.tasks);
        localStorage.setItem(this.config.localStorageKey, data);
    },

    deleteTask: function(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    },
});