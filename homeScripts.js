
function launchKhanApp() {
    const url = "intent://chromecast.com/#Intent;scheme=comgooglecast;package=com.google.android.apps.chromecast.app;end";

    if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
        window.location.href = url;
    }
    else {
        alert("You must be using an Android device to launch the app.");
    }
}