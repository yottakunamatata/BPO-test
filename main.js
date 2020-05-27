var send = document.querySelector('.send');
send.addEventListener('click', run, false);

function run() {
    var arrival_rate = document.querySelector('.Arrival_rate').value;
    var start_time = document.querySelector('.Start_time').value;
    var service_rate = document.querySelector('.Service_rate').value;
    console.log(arrival_rate);
    console.log(start_time);
    console.log(service_rate);

    var str = '<table border="1"> <tr><td >arrival_rate</td> <td>service_rate</td><tr><td >' + arrival_rate + '</td> <td>' + service_rate + '</td>';
    var str2 = 'yyyyyyy'
    document.getElementById("output").innerHTML = str;




}

var student = {
    name: [],
    id: [],
    age: []
};

for (var i = 1; i < 5; i++) {
    student.name.push("name" + i);
    student.id.push("id" + i);
    student.age.push('age' + i);
}

var addq = document.querySelector('.addq');
var addm = document.querySelector('.addm');
var addf = document.querySelector('.addf');

addq.addEventListener('click', r_addq, false);
addm.addEventListener('click', r_addm, false);
addf.addEventListener('click', r_addf, false);


var q = 0;
var m = 0;
var f = 0;

function r_addq() {
    q++;
    var str3 = ''
    for (var i = 0; i < q; i++) {
        str3 += "<img src='sss.png' alt='' class='img'>"
    }
    document.getElementById("queue").innerHTML = str3;
}

function r_addm() {
    q--;
    m++;
    var str3 = ''
    for (var i = 0; i < q; i++) {
        str3 += "<img src='sss.png' alt='' class='img'>"
    }
    document.getElementById("queue").innerHTML = str3;
    var str4 = ''
    for (var i = 0; i < m; i++) {
        str4 += "<img src='sss.png' alt='' class='img'>"
    }
    document.getElementById("making").innerHTML = str4;
}

function r_addf() {
    m--;
    f++;
    var str4 = ''
    for (var i = 0; i < m; i++) {
        str4 += "<img src='sss.png' alt='' class='img'>"
    }
    document.getElementById("making").innerHTML = str4;
    var str5 = ''
    for (var i = 0; i < f; i++) {
        str5 += "<img src='sss.png' alt='' class='img'>"
    }
    document.getElementById("finish").innerHTML = str5;


}