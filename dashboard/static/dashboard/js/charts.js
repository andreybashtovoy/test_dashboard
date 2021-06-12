fetch('/static/dashboard/data/rating.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        let layout = {
            xaxis: {
                title: 'Дата'
            },
            yaxis: {
                title: 'Часов с пользой'
            }
        };

        Plotly.newPlot('chart_rating', data, layout, {responsive: true});
    });

fetch('/static/dashboard/data/pie.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        Plotly.newPlot('chart_pie', data, {}, {responsive: true});
    });

fetch('/static/dashboard/data/sleep.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let layout = {
            xaxis: {
                title: 'Продолжительность'
            }
        };

        Plotly.newPlot('chart_sleep', data, layout, {responsive: true});
    });

fetch('/static/dashboard/data/pie_activities.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        Plotly.newPlot('chart_activities', data, {responsive: true});
    });