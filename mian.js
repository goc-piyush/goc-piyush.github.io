console.log('console log from github file');
var myCustomData = { foo: 'submited' };
var event = new CustomEvent('myEvent', { detail: myCustomData });
parent.postMessage("form submitted", "*");
// window.postMessage(
//             {
//                 message: "submited",
//                 type: "chasitor.sendMessage"
//             },
//            window.parent.location.href
//     );

