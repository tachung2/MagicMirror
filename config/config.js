/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
var config = {
    language: "ko",
    locale: "ko-KR",
    logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
    timeFormat: 24,
    units: "metric",
    debug: "true",
    electronOptions: {
        webPreferences: {
            webviewTag: true,
        },
    },
    modules: [{
            module: "alert",
        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "Showlist",
            position: "top_left"
        },
        {
            module: "Todolist",
            position: "upper_third"
        },
        {
            module: "MMM-WebView",
            position: "top_center"
        },
        {
            module: 'MMM-AlarmClock',
            position: 'top_right',
            config: {
                alarms: [{ time: "18:30", days: [2, 4], title: "Soccer", message: "Get ready for soccer training!", sound: "alarm.mp3" }, ]
            }
        },
        {
            module: "MMM-Keyboard",
            position: "top_left",
            config: {
                startWithNumbers: false,
                startUppercase: true,
                debug: false,
                alwaysShow: true,
            }
        },
        {
            module: "weather",
            position: "top_right",
            config: {
                weatherProvider: "openweathermap",
                type: "current",
                location: "Iksan",
                locationID: "1843491",
                apiKey: "ad599c5df2644275cbf362c6588847e8"
            }
        },
        {
            module: "weather",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                weatherProvider: "openweathermap",
                type: "forecast",
                location: "Iksan",
                locationID: "1843491",
                apiKey: "ad599c5df2644275cbf362c6588847e8"
            }
        },
        {
            module: "ChangebtnModule",
            position: "bottom_center"
        },
        {
            module: "activityMode",
            position: "middle_center"
        },
        {
            module: "Alarm",
            position: "upper_third"
        },
        {
            module: "MMM-GoogleAssistant",
            configDeepMerge: true,
            config: {
                assistantConfig: {
                    lang: "ko-KR",
                    latitude: 37.3460,
                    longitude: 126.550,
                },
            }
        },
        {
            module: 'Gateway',
            config: {
                debug: false,
                username: "mirror",
                password: "root",
                usePM2: false,
                PM2Id: 0,
                CLIENT_ID: null
            }
        },
        {
            module: "EXT-Detector",
            position: "top_left",
            configDeepMerge: true,
            config: {
                porcupineAccessKey: "dcORSiR2InadVXcqHrFb2rfYCaqsWzRHCM0D/XZ4ZyYJIWGvsoT0EA==",
            }
        },
        {
            module: 'EXT-Alert',
            config: {
                debug: false,
                ignore: []
            }
        },
    ]
};




/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; } else {
    window.config = config;
}