Module.register("Alarm", {
    start: function() {
        Log.info(`Starting module: ${this.name}`);
        this.displaySettingsWindow = false;
        this.alarmConfig = {
            time: "",
            days: [],
            title: "",
            message: ""
        };
    },
    getStyles: function() {
        return ["Alarm.css"];
    },
    getDom: function() {
        const wrapper = document.createElement("div");
        wrapper.classList.add('alarm-wrapper');

        // ALARM_OPEN 신호를 받으면 설정 창을 표시합니다.
        if (this.displaySettingsWindow) {
            wrapper.style.display = "block";
        } else {
            wrapper.style.display = "none";
        }

        // 시간 설정 입력란
        const timeInput = document.createElement("input");
        timeInput.type = "text";
        timeInput.placeholder = "Enter time (HH:MM)...";
        timeInput.addEventListener("input", (event) => {
            this.alarmConfig.time = event.target.value;
        });
        wrapper.appendChild(timeInput);

        // 요일 설정 입력란
        const daysInput = document.createElement("input");
        daysInput.type = "text";
        daysInput.placeholder = "Enter days (0-6)...";
        daysInput.addEventListener("input", (event) => {
            this.alarmConfig.days = event.target.value.split(",").map(day => parseInt(day));
        });
        wrapper.appendChild(daysInput);

        // 제목 설정 입력란
        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.placeholder = "Enter title...";
        titleInput.addEventListener("input", (event) => {
            this.alarmConfig.title = event.target.value;
        });
        wrapper.appendChild(titleInput);

        // 메시지 설정 입력란
        const messageInput = document.createElement("input");
        messageInput.type = "text";
        messageInput.placeholder = "Enter message...";
        messageInput.addEventListener("input", (event) => {
            this.alarmConfig.message = event.target.value;
        });
        wrapper.appendChild(messageInput);

        // 저장 버튼
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", () => {
            this.sendNotification("ADD_ALARM", this.alarmConfig);
            this.displaySettingsWindow = false;
            wrapper.style.display = "none";
        });
        wrapper.appendChild(saveButton);

        return wrapper;
    },

    notificationReceived: function(notification) {
        if (notification === "ALARM_OPEN") {
            if (this.displaySettingsWindow === false) {
                console.log("!!");
                this.displaySettingsWindow = true;
                this.updateDom();
            } else {
                this.displaySettingsWindow = false;
                this.updateDom();
            }
        }
    }
});