Module.register("activityMode", {
    defaults: {},
    getStyles: function() {
        return ["active_styles.css"];
    },
    start: function() {
        Log.info(`Starting module: ${this.name}`);
    },
    getDom: function() {
        var self = this;
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        var showScreen = document.createElement("div");
        showScreen.classList.add("showscreen");
        var icon = new Array();
        const next = document.createElement("br");
        icon[0] = document.createElement("div");
        icon[1] = document.createElement("div");
        icon[2] = document.createElement("div");
        icon[3] = document.createElement("div");
        icon[4] = document.createElement("div");
        icon[5] = document.createElement("div");
        icon[6] = document.createElement("div");
        icon[7] = document.createElement("div");
        icon[0].id = 'p_color';
        icon[1].id = 'alarm';
        icon[2].id = 'chrome';
        icon[3].id = 'todo';
        icon[4].id = 'map';
        icon[5].id = 'youtube';
        icon[6].id = 'music';
        icon[7].id = 'weather';
        icon[0].style.backgroundImage = `url(${this.data.path}icon/f_color.png)`;
        icon[1].style.backgroundImage = `url(${this.data.path}icon/alarm.png)`;
        icon[2].style.backgroundImage = `url(${this.data.path}icon/Chrome.png)`;
        icon[3].style.backgroundImage = `url(${this.data.path}icon/todo.png)`;
        icon[4].style.backgroundImage = `url(${this.data.path}icon/map.png)`;
        icon[5].style.backgroundImage = `url(${this.data.path}icon/youtube.png)`;
        icon[6].style.backgroundImage = `url(${this.data.path}icon/music.png)`;
        icon[7].style.backgroundImage = `url(${this.data.path}icon/weather.png)`;

        for (var i = 0; i < icon.length; i++) {
            icon[i].classList.add("icon");
            icon[i].style.backgroundSize = "cover";
            icon[i].style.width = "70px";
            icon[i].style.height = "70px";
            showScreen.append(icon[i]);
        }

        icon[0].addEventListener("click", function() {
            console.log("!!");
            window.open('https://mycolor.kr/', '_blank', 'toolbar=no', 'menubar=no');
        });
        icon[1].addEventListener("click", function() {
            console.log("!!");
            self.sendNotification('ALARM_OPEN');
        });
        icon[2].addEventListener("click", function() {
            console.log("!!");
            window.open('https://www.google.com/', '_blank', 'menubar=no');
        });
        icon[3].addEventListener("click", function() {
            self.sendNotification('TODO_OPEN');
        });
        icon[4].addEventListener("click", function() {
            console.log("!!");
            window.open('https://www.google.co.kr/maps/?hl=ko', '_blank', 'menubar=no');
        });
        icon[5].addEventListener("click", function() {
            console.log("!!");
            window.open('https://youtube.com', '_blank', 'menubar=no');
        });
        icon[6].addEventListener("click", function() {
            console.log("!!");
            window.open('https://www.music.youtube.com', '_blank', 'menubar=no');
        });
        icon[7].addEventListener("click", function() {
            console.log("!!");
            window.open('https://www.weather.go.kr/w/weather/forecast/short-term.do#dong/1114055000', '_blank', 'menubar=no');
        });

        showScreen.id = 'main';
        showScreen.classList.add("main_container");
        showScreen.style.display = "none";

        wrapper.appendChild(showScreen);

        return wrapper;
    },
    startIdleTimer: function() {
        this.idleTimer = null;
        this.sleepModeTimer = null;

        // 이벤트 리스너를 등록합니다.
        document.addEventListener("mousemove", this.resetIdleTimer.bind(this));
        document.addEventListener("touchstart", this.resetIdleTimer.bind(this));
        document.addEventListener("keypress", this.resetIdleTimer.bind(this));

        // 초기화 타이머를 시작합니다.
        this.idleTimer = setTimeout(this.enterSleepMode.bind(this), this.config.idleTime * 1000);
    },
    notificationReceived: function(notification, payload) {
        if (notification === "SHOW_SCREEN") {
            console.log(payload);
            var showScreen = document.getElementById('main');
            showScreen.style.display = "grid";
        } else if (notification === "HIDE_SCREEN") {
            console.log(payload);
            var showScreen = document.getElementById('main');
            showScreen.style.display = "none";
        }
    },
});