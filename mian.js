console.log('console log from github file');

window.postMessage(
            {
                message: "submited",
                type: "chasitor.sendMessage"
            },
           window.parent.location.href
    );
