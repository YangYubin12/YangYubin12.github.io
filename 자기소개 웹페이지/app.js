function openCity(seltab, cityName) {
    let i, $tabcontent, $tablinks;
    $tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < $tabcontent.length; i++) {
        $tabcontent[i].style.display = "none";
    }
    $tablinks = document.getElementsByClassName("tablinks");
    for (let value of $tablinks) {
        value.style.backgroundColor = "inherit";
    }
    document.getElementById(cityName).style.display = "block";
    seltab.style.backgroundColor = "dodgerblue";
}
let descDivEl = document.getElementById('desc');
let openBtnEl = document.getElementById('open');
let closeBtnEl = document.getElementById('close');

function showDetail() {
    descDivEl.style.display = "block";
    openBtnEl.style.display = "none";
}

function hideDetail() {
    descDivEl.style.display = "none";
    openBtnEl.style.display = "block";
}

closeBtnEl.addEventListener("click", function () {
    descDivEl.style.display = "none";
    openBtnEl.style.display = "block";
});


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['취업', 5],
  ['독일', 2],
  ['잠', 2],
  ['쇼핑', 1],
  ['필라테스', 0.6],
  ['넷플릭스', 0.4]
]);

  var options = {'width':1000, 'height':400};

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}