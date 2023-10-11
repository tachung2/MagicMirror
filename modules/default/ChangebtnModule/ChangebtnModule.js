Module.register("ChangebtnModule", {
    defaults: {},

    // css 가져오는 부분
    getStyles: function() {
        return ["changebutton_styles.css"];
    },
    // 시작과 동시에 하는 것들
    start: function() {
        Log.info(`Start module: ${this.name}`);

    },
    getDom: function() {
        var self = this;

        const wrapper = document.createElement("div");


        // 파워버튼 부분
        const powerbutton = document.createElement("button");
        powerbutton.id = 'power';
        powerbutton.classList.add("change-btn");
        powerbutton.style.backgroundImage = `url(${this.data.path}image/powerbtn.svg)`;
        powerbutton.style.backgroundSize = "cover";
        powerbutton.style.width = "100px";
        powerbutton.style.height = "100px";
        powerbutton.style.display = "block";

        // 활동모드 때 버튼 부분
        const activebutton = document.createElement("button");
        activebutton.id = 'active';
        activebutton.classList.add("change-btn");
        activebutton.style.backgroundImage = `url(${this.data.path}image/activebtn.svg)`;
        activebutton.style.backgroundSize = "cover";
        activebutton.style.width = "610px";
        activebutton.style.height = "80px";
        activebutton.style.display = "none";

        // 거울모드 때 버튼 부분
        const mirrorbutton = document.createElement("button");
        mirrorbutton.id = 'mirror';
        mirrorbutton.classList.add("change-btn");
        mirrorbutton.style.backgroundImage = `url(${this.data.path}image/mirrorbtn.svg)`;
        mirrorbutton.style.backgroundSize = 'cover';
        mirrorbutton.style.width = "610px";
        mirrorbutton.style.height = "80px";
        mirrorbutton.style.display = "none";

        // 버튼 이벤트 부분	
        powerbutton.addEventListener("click", function() {
            powerbutton.style.display = "none";
            activebutton.style.display = "block";
            mirrorbutton.style.display = "none";
            self.sendNotification("SHOW_SCREEN");
            console.log("!!");
        });
        activebutton.addEventListener("click", function() {
            powerbutton.style.display = "none";
            activebutton.style.display = "none";
            mirrorbutton.style.display = "block";
            self.sendNotification("HIDE_SCREEN");
            console.log("!!");
        });
        mirrorbutton.addEventListener("click", function() {
            powerbutton.style.display = "none";
            activebutton.style.display = "block";
            mirrorbutton.style.display = "none";
            self.sendNotification("SHOW_SCREEN");
            console.log("!!");
        });

        // 버튼 wrapper에 자식요소로 추가
        wrapper.appendChild(powerbutton);
        wrapper.appendChild(activebutton);
        wrapper.appendChild(mirrorbutton);


        return wrapper;
    },

});