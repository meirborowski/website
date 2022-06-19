
function launchAgrioApp() {
    const url = "intent://www.saillog.co/#Intent;scheme=https;package=com.agrio;end";

    if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
        window.location.href = url;
    }
    else {
        alert("You must be using an Android device to launch the app.");
    }
}