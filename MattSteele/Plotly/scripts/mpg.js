// get auto mpg Data
Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/auto-mpg.csv', function (err, rows) {
  function unpack(rows, key) {
      
    return rows.map(function (row) { return row[key]; });
      
  }

  // Logging to understand 
  console.log(rows)
  
  // creating and arrary of objects
  var z_data = [{}]

// Taking the first 5 objects from the data
for (i = 0; i < 5; i++) {
         z_data[i] =  rows[i]      
   }

   // logging to see what it is like
  console.log(z_data)

/* Commenting Ricks Code before beginning Plot
  var data = [{
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

  var layout = {
    title: 'MPG',
    scene: { camera: { eye: { x: 1.87, y: 0.88, z: -0.64 } } },
    autosize: false,
    width: 500,
    height: 500,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  };

  Plotly.newPlot('mpg', data, layout, { showSendToCloud: true });
  */
});
