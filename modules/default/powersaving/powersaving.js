Module.register("powersaving", {
    start: function() {
        this.updateDom();
},

getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = "<h1>Hello, Powersaving!</h1>
    
    return wrapper;
}
});
