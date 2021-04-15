Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/auto-mpg.csv', function (rows) {
  // create empty Arrays 
  var horsePwrArray = []
  var mpgArray = []
  var weight = []

  // pushing data into arrays
for (i = 0; i < 397; i++) {
        mpgArray.push(rows[i].mpg)
        horsePwrArray.push(rows[i].horsepower)
        weight.push(rows[i].weight)

   }
   // making first graph cordinates
   var mpgToHP = {
    x: horsePwrArray,
    y: mpgArray,
    type: 'scatter',
    mode: 'markers'
  }


  var data = [mpgToHP]
  var layout = {
    title: 'HP to MPG',
    showlegend: false
  };

  Plotly.newPlot('hp-to-mpg', data, layout, { scrollZoom: false });

  // making second graph cordinates
  var mpgToWeight = {
    x: weight,
    y: mpgArray,
    type: 'bar',
    mode: 'markers'
  }
  layout = {
      title: 'Weight to MPG',
      showlegend: true
  };
  
  data = [mpgToWeight]

  Plotly.newPlot('weight-to-mpg', data, layout, { scrollZoom: false });

  z_data = [horsePwrArray,weight, mpgArray ]

  // making third graph cordinates
  var allThree = [{
    z: z_data,
    type: 'surface',
    contours: {
      z: {
        show: true,
        usecolormap: true,
        highlightcolor: "#42f462",
        project: { z: true }
      }
    }
  }];

  layout = {
    title: 'HP, Weight, MPG',
    scene: { camera: { eye: { x: 1.87, y: 0.88, z: -0.64 } } },
    autosize: true,
    width: 750,
    height: 750,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  };

  Plotly.newPlot('allThree', allThree, layout, { scrollZoom: false });
  
});
