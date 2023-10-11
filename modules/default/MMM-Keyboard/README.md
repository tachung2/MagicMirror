# MMM-Keyboard

![Example image](keyboard-example.jpg)

A module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) that creates a virtual keyboard to be used to send commands or text to other modules

## Features
 * Touch Support
 * Locale Support (en and de)

## Installing

### Step 1 - Install the module
```javascript
cd ~/MagicMirror/modules
git clone https://github.com/lavolp3/MMM-Keyboard.git
cd MMM-Keyboard
npm install
```

### Step 2 - Add module to `config.js`
Add this configuration into your `config.js` file
```javascript
{
    module: "MMM-Keyboard",
    position: "fullscreen_above",
    config: {
        startWithNumbers: false,
        startUppercase: true,
        debug: false
    }
}
```

## Dependencies

* [simple-keyboard](https://www.npmjs.com/package/simple-keyboard)
* [swipe-keyboard](https://www.npmjs.com/package/swipe-keyboard)

## Updating
Go to the module’s folder `/MagicMirror/modules/MMM-Keyboard` and pull the latest version from GitHub:
```
git pull
npm install
```

## Configuration options

| Option            | type   | default        | Description
|-------------------|--------|--------------- |-----------
| `language`        | string | config.language| The language. You can override the MM settings here.
| `swype`           | boolean| false          | Activate swipe mode (experimental!)  **(not implemented yet)**
| `alwaysShow`      | boolean| false          | Always show keyboard.  **(not implemented yet)**
| `startWithNumbers`| boolean| false          | Start keyboard with 'numbers' layout
| `startUppercase`  | boolean| true           | Always start with uppercase letters
| `debug`           | boolean| false          | Debug mode for additional console output. Will also create a keyboard button to activate the keyboard.


# Working with the Keyboard

## Opening the keyboard

The keyboard works with MagicMirror's notification system. You can broadcast notifications from another module using the following parameters
```
this.sendNotification("KEYBOARD", {
    key: "uniqueKey",
    style: "default",
    data: {},
});
```

The payload of the notification must be an object containing two parameters:  
`key`: You can use any unique key, it is advised to use the module name. MMM-Keyboard will take the key and send it back for the module to understand it.  
`style`: Use "default" or "numbers" here.  
`data`: Any data you want to transfer. E.g. if the keyboard input should be allocated to a certain element.  

## Receiving data

As soon as you hit the "SEND!"-Button the keyboard sends back the written content using the format

```
this.sendNotification("KEYBOARD_INPUT", {
    key: "uniqueKey",
    message: "test",
    data: {}
});
```

The data object is the same you have send with your notification.  
You can fetch the message by checking for the `key` component. Here an example:

```
notificationReceived : function (notification, payload) {
    if (notification == "KEYBOARD_INPUT" && payload.key === "uniqueKey") {
        console.log(payload.message);
    }
},
```

## Implemented modules

- [x] MMM-Bring

Planned:
- [ ] MMM-Todo
- [ ] an own Timer / Alarm module

For further implementations, contact me or send it as an issue here!


# ToDos

- [x] include locales ("de", "en")
- [ ] include styling options
- [x] use transition effect to draw keyboard up from bottom or top border


## THANKS

Thanks go to
- Francisco Hodge for his beautiful simple-keyboard npm module
- @jheyman for alpha testing :-)
