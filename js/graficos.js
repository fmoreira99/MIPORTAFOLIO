  const ctx = document.getElementById('myChart');
  const ctxLine = document.getElementById('myChartLine');

  const dataFrontend={
    labels: [
      'Java',
      'Spring boot',
      'Quarkus',
      'NodeJs',
      'Python', 
      'R', 
      'PHP', 
      'SQL', 
      'NOSQL',
      'CSS',
      'HTML',
      'Bootstrp 5',
      'React',
      'Angular'

    ],
    datasets: [{
      data: [80, 70, 80, 60, 60, 70, 60,80, 70, 90, 90, 90, 80, 60],
      borderColor: '#ebf5ef18', 
      barThickness: 20, 
      backgroundColor: [
        '#538C51',
        '#AFBF73',
        '#F5DE83',
        '#F2B84B',
        '#D95E32',
        '#F2CB05',
        '#F29F05',
        '#F28705',
        '#42A5F5',
        '#E44D26',
        '#7411F6',
        '#24ACF2',
        '#E21225'
      ]
    }]
  };
 
  const configBar ={
    type: 'bar',
    data: dataFrontend,
    options: {
        plugins: {
            legend: {display: false},
            title: {
            display: true,
            text: 'Backend Technologies',
            color:'#fff'
            ,
        }},
        responsive: true, 
        maintainAspectRatio: true, 
        width: 100,
        height: 250, 
       
      scales: {
        x: {
            beginAtZero: true
        }
      }
    },
  };

  new Chart(ctxLine, configBar);
let globarTrue=true;
  $("#btnMenu").click(function(evento){
    if(globarTrue){
      $('#menuBar').addClass("expan");
      $('#menuIco').addClass("bi bi-arrow-bar-left");
      $('#menuIco').removeClass("bi bi-list ");
      globarTrue=false;
    }else{
      $('#menuBar').removeClass("expan");
      
      $('#menuIco').removeClass("bi bi-arrow-bar-left");
      $('#menuIco').addClass("bi bi-list ");
      globarTrue=true;
    }
  
    
  });
  

