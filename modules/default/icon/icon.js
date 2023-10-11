Module.register("icon", {
	defaults: {},
	start: function () {
		Log.info(`Starting module: ${this.name}`);
	},
	getDom: function () {
		var self = this;
		
		var p_color = document.getElementById('p_color');
		var alarm = document.getElementById('alarm');
		var chrome = document.getElementById('chrome');
		var todo = document.getElementById('todo');
		
		
		
		p_color.addEventListener("click", function () {
			console.log("!!");
			self.sendNotification("HTMLDOX_OPEN", {
			content: `
				<div>
					<h1>성공!</h1>
				</div>
				`,
				width: "500px",
				height: "300px"
			});
		});
	},
});
