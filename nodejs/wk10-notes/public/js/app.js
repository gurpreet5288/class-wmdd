// console.log('js is connected to the index file');

const sendReq = document.getElementById("sendReq");

sendReq.addEventListener('click', () => {
    let baseUrl = 'http://localhost:3000/test';
    let myTst1 = parm1.value;
    let myTst2 = parm2.value;

    baseUrl += `?tst1=${myTst1}&tst2=${myTst2}`;
    // alert(baseUrl);

    fetch(baseUrl).then((res) => {
        res.json().then((data) => {
            // console.log(data);
            parm1.value = `Sent and Received back: ${data.recParm1}`;
            parm2.value = `Sent and Received back: ${data.recParm2}`;
        })
    })
})