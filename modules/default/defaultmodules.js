/* MagicMirror² Default Modules List
 * Modules listed below can be loaded without the 'default/' prefix. Omitting the default folder name.
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */
const defaultModules = ["alert", "calendar", "clock", "compliments", "helloworld", "newsfeed", "updatenotification", "weather", "ChangebtnModule", "activityMode", "powersaving", "icon", "MMM-HTMLBox", "MMM-Keyboard", "MMM-WebView", "Todolist", "Showlist", "Alarm", "MMM-AlarmClock", "MMM-GoogleAssistant", "Gateway", "EXT-Detector", "EXT-Alert"];

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = defaultModules;
}