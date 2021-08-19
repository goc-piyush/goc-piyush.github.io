console.log('console log from github file');

window.postMessage(
            {
                message: "submited",
                type: "chasitor.sendMessage"
            },
           window.parent.location.href
    );
var myCustomData = { foo: 'submited' };
var event = new CustomEvent('myEvent', { detail: myCustomData });
window.parent.document.dispatchEvent(event)
