
function launchKhanApp() {
    const url = "intent://clever.khanacademykids.org/#Intent;scheme=https;package=org.khankids.android;end";

    if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
        window.location.href = url;
    }
    else {
        alert("You must be using an Android device to launch the app.");
    }
}


function launchODKApp() {
    const url = "intent://clever.khanacademykids.org/#Intent;scheme=https;package=org.khankids.android;end";

    if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
        window.location.href = url;
    }
    else {
        alert("You must be using an Android device to launch the app.");
    }
}