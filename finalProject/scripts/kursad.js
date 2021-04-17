
    $("#plott").html("This is <strong>the text</strong> for the plot id")
    let url = "https://api.covidtracking.com/v1/us/daily.json"


    $('#totalCases').hide();
    $('#dailyDeath').hide();
    $('#dailyCases').hide();
    $('#hosInc').hide();
    $('#incVen').hide();

    function hide(id) {

        console.log(id);
        $('#totalDeath').hide();
        $('#totalCases').hide();
        $('#dailyDeath').hide();
        $('#dailyCases').hide();
        $('#hosInc').hide();
        $('#incVen').hide();
        $('#' + id).show();

    }

    let date = [];
    let dateFirst = "2020-02-10";
    let dateLast = "2021-03-07";
    async function getUrl(ajaxurl, onSuccess, onFail) {
        let result;
        try {
            result = await $.ajax({
                url: ajaxurl,
                type: "GET"
            });
            onSuccess(result); //jquerySelector.html(JSON.stringify(result,null,2))
            return result;
        } catch (error) {
            if (onFail) onFail(error);
            console.error(error);
        }
    }
    getUrl(url,
        displayCovidData,
        (err) => console.error(err)
    )

    function setDate() {
            dateFirst = $('#dateFirst').val();
            dateLast = $('#dateLast').val();

            getUrl(url,
        displayCovidData,
        (err) => console.error(err)
    )
        }


    function displayCovidData(covidData) {
        let death = [];
        let cases = [];
        let dailyDeath = [];
        let dailyCases = [];
        let hosInc = [];
        let incVen = [];

        for (let i = 0; i < covidData.length; i++) {

            date.push(moment(covidData[i].date.toString()).toDate());
            death.push(covidData[i].death);
            cases.push(covidData[i].positive);
            dailyDeath.push(covidData[i].deathIncrease);
            dailyCases.push(covidData[i].positiveIncrease);
            hosInc.push(covidData[i].inIcuCurrently / covidData[i].hospitalizedCurrently);
            incVen.push(covidData[i].onVentilatorCurrently / covidData[i].inIcuCurrently);
        }

        makePlotly(date, death, cases, dailyDeath, dailyCases, hosInc, incVen);
    }


    function makePlotly(date, death, cases, dailyDeath, dailyCases, hosInc, incVen) {
        let totalDeath = "totalDeath";
        let totalCases = "totalCases";
        let dDeath = "dailyDeath";
        let dCases = "dailyCases";
        let hosIncRatio = "hosInc";
        let incVenRatio = "incVen";
        var tracesDeath = [
            {
                x: date,
                y: death,
                type: 'scatter',
                mode: 'lines',
                marker: {
                    color: '#E14ECA',
                }
            }
        ];
        var tracesCases = [
            {
                x: date,
                y: cases,
                type: 'scatter',
                mode: 'lines',
                marker: {
                    color: '#E14ECA',
                }
            }
        ];
        var tracesDailyDeath = [
            {
                x: date,
                y: dailyDeath,
                type: 'bar',
                marker: {
                    color: '#E14ECA',
                }
            }
        ];
        var tracesDailyCases = [
            {
                x: date,
                y: dailyCases,
                type: 'bar',
                marker: {
                    color: '#E14ECA',
                }
            }
        ];
        var tracesHosInc = [
            {
                x: date,
                y: hosInc,
                type: 'scatter',
                mode: 'lines',
                marker: {
                    color: '#E14ECA',
                }
            }
        ];
        var tracesIncVen = [
            {
                x: date,
                y: incVen,
                type: 'scatter',
                mode: 'lines',
                marker: {
                    color: '#E14ECA',
                }
            }
        ];
        var layoutDeath = {
            title: "Total Death",
            font: {
                family: "Courier New, monospace",
                size: 18,
                color: "#E14ECA"
            },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            xaxis: {
                showgrid: false,
                range: [dateFirst, dateLast],
                type: 'date'
            },
            yaxis: {
                showgrid: false,
                showline: true,
                autorange: true,
                type: 'linear'
            }

        };

        console.log(dateFirst+dateLast);
        var layoutCases = {
            title: "Total Cases",
            font: {
                family: "Courier New, monospace",
                size: 18,
                color: "#E14ECA"
            },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            xaxis: {
                showgrid: false,
                range: [dateFirst, dateLast],
                type: 'date'
            },
            yaxis: {
                showgrid: false,
                showline: true
            }

        };

        var layoutDailyDeath = {
            title: "Daily Death",
            font: {
                family: "Courier New, monospace",
                size: 18,
                color: "#E14ECA"
            },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            xaxis: {
                showgrid: false,
                range: [dateFirst, dateLast],
                type: 'date'
            },
            yaxis: {
                showgrid: false,
                showline: true
            }

        };

        var layoutDailyCases = {
            title: "Daily Cases",
            font: {
                family: "Courier New, monospace",
                size: 18,
                color: "#E14ECA"
            },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            xaxis: {
                showgrid: false,
                range: [dateFirst, dateLast],
                type: 'date'
            },
            yaxis: {
                showgrid: false,
                showline: true
            }

        };
        var layoutHosInc = {
            title: "Daily Hospitilized - Intensive Care Ratio",
            font: {
                family: "Courier New, monospace",
                size: 18,
                color: "#E14ECA"
            },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            xaxis: {
                showgrid: false,
                range: [dateFirst, dateLast],
                type: 'date'
            },
            yaxis: {
                showgrid: false,
                showline: true,
                tickformat: ',.0%'
            }

        };

        var layoutIncVen = {
            title: "Daily Intensive Care - On Ventilator Ratio",
            font: {
                family: "Courier New, monospace",
                size: 18,
                color: "#E14ECA"
            },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            xaxis: {
                showgrid: false,
                range: [dateFirst, dateLast],
                type: 'date'
            },
            yaxis: {
                showgrid: false,
                showline: true,
                tickformat: ',.0%'
            }

        };

        var config = { responsive: true }

        Plotly.newPlot(totalDeath, tracesDeath, layoutDeath, config);
        Plotly.newPlot(totalCases, tracesCases, layoutCases, config);
        Plotly.newPlot(dDeath, tracesDailyDeath, layoutDailyDeath, config);
        Plotly.newPlot(dCases, tracesDailyCases, layoutDailyCases, config);
        Plotly.newPlot(hosIncRatio, tracesHosInc, layoutHosInc, config);
        Plotly.newPlot(incVenRatio, tracesIncVen, layoutIncVen, config);

    }