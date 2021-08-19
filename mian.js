console.log('console log from github file');

window.postMessage(
            {
                message: "submited",
                type: "chasitor.sendMessage"
            },
           '*'
    );
