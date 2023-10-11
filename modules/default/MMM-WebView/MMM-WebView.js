Module.register('MMM-WebView', {

    start: function() {
        this.windows = []; // 열린 창을 저장할 배열
    },

    notificationReceived: function(notification, payload) {
        if (notification === 'POPUP_WINDOW_OPEN') {
            const url = payload.url;
            this.openWindow(url); // 창 열기 함수 호출
        }
    },

    getDom: function() {
        const wrapper = document.createElement('div');
        wrapper.id = 'my-module';
        wrapper.style.position = 'absolute';
        wrapper.style.zIndex = 9999;
        wrapper.style.width = '1200px';
        wrapper.style.height = '800px';
        wrapper.style.display = "none";

        const header = document.createElement('div');
        header.className = 'header';
        header.style.width = '100%';
        header.style.height = '30px';
        header.style.backgroundColor = 'lightgray';
        header.style.cursor = 'move';

        const closeButton = document.createElement('div');
        closeButton.className = 'close-button';
        closeButton.innerHTML = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '5px';
        closeButton.addEventListener('click', () => {
            const index = this.windows.indexOf(wrapper);
            if (index !== -1) {
                this.windows.splice(index, 1); // 배열에서 창 제거
            }
            wrapper.parentNode.removeChild(wrapper); // 창을 MagicMirror에서 제거
        });

        const iframe = document.createElement('iframe');
        iframe.id = 'my-iframe';
        iframe.style.width = '100%';
        iframe.style.height = 'calc(100% - 30px)';
        iframe.style.border = 'none';
        iframe.style.opacity = '1';

        header.appendChild(closeButton);
        wrapper.appendChild(header);
        wrapper.appendChild(iframe);

        wrapper.addEventListener('mousedown', (event) => {
            this.startDrag(wrapper, event); // 개별 창에 대한 드래그 시작 함수 호출
        });

        return wrapper;
    },

    openWindow: function(url) {
        const newWindow = this.getDom();

        newWindow.querySelector('#my-iframe').src = url;


        this.windows.push(newWindow); // 배열에 창 추가
        newWindow.querySelector('#my-module').style.display = "block";
        document.body.appendChild(newWindow); // 창을 MagicMirror에 추가
    },

    startDrag: function(wrapper, event) {
        event.preventDefault();
        const offsetX = event.clientX - wrapper.offsetLeft;
        const offsetY = event.clientY - wrapper.offsetTop;

        const moveHandler = (moveEvent) => {
            moveEvent.preventDefault();
            wrapper.style.left = moveEvent.clientX - offsetX + 'px';
            wrapper.style.top = moveEvent.clientY - offsetY + 'px';
        };

        const stopHandler = (stopEvent) => {
            stopEvent.preventDefault();
            document.removeEventListener('mousemove', moveHandler);
            document.removeEventListener('mouseup', stopHandler);
        };

        document.addEventListener('mousemove', moveHandler);
        document.addEventListener('mouseup', stopHandler);
    },
});