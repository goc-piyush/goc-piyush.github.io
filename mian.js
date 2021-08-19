console.log('console log from github file');
this.callLwc();
window.postMessage(
            {
                message: "submited",
                type: "chasitor.sendMessage"
            },
            window.parent.location.href
    );
