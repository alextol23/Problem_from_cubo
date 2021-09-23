import React, { useContext, useEffect, useRef } from "react";

import { addData } from "../../../../utils/ChartUtils";

import { Chart, registerables } from "chart.js";
import UiContext from "../../../../store/ui-context";

import Axios from "axios";

Chart.register(...registerables);
//nota intente crear un enlace para que insertara los años
function Data(){
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
 
        Axios.get('http://localhost:3001/api/get').then((response) => {
            //console.log(response.data)
        var data = response.data;
        var i ;
        for(i=0; i < data.length; i++){
        switch(data[i].Year){
            case '2008.03':
                arr[0] = arr[0] + 1;
            break;
            case '2009.03':
                arr[1] = arr[1] + 1;
            break;
            case '2010.03':
                arr[2] = arr[2] + 1;
            break;
            case '2011.03':
                arr[3] = arr[3] + 1;
            break;
            case '2012.03':
                arr[4] = arr[4] + 1;
            break;
            case '2013.03':
                arr[5] = arr[5] + 1;
            break;
            case '2014.03':
                arr[6] = arr[6] + 1;
            break;
            case '2015.03':
                arr[7] = arr[7] + 1;
            break;
            case '2016.03':
                arr[8] = arr[8] + 1;
            break;
            case '2017.03':
                arr[9] = arr[9] + 1;
            break;
            default: break;
            
        }
        
    }
    console.log(arr)
    
    return arr;
    //console.log(arr);
    });
    
}

const labels = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "Sales",
            backgroundColor: "rgba(51, 200, 99, .1)",
            fill: true,
            borderColor: "#33c863",
            data: Data(),
            tension: 0.2,
        },
        /*{
            label: "Profit",
            backgroundColor: "rgba(242, 153, 74, .1)",
            fill: true,
            borderColor: "#f2994a",
            data: addData(12),
            tension: 0.2,
        },*/
    ],
};

const ChartContainer = () => {
    const uiCtx = useContext(UiContext);
    const chartRef = useRef();

    useEffect(() => {
        const canvasId = document.getElementById("myCanvas");
        chartRef.current = new Chart(canvasId, {
            type: "line",
            data,
            options: {
                maintainAspectRatio: false,
                interaction: {
                    mode: "index",
                    intersect: false,
                    axis: "x",
                },
                plugins: {
                    tooltip: {
                        enabled: true,
                    },
                    legend: false,
                },
                scales: {
                    y: {
                        display: false,
                    },
                    x: {
                        grid: {
                            drawBorder: false,
                            borderDash: [6],
                            color: uiCtx.theme === "light" ? "#dddfe5" : "#26323f",
                            border: false,
                        },
                        ticks: {
                            color: uiCtx.theme === "light" ? "#929292" : "#fff",
                            font: {
                                family: "'Mulish', sans-serif",
                                size: "16px",
                            },
                        },
                    },
                },
            },
        });

        return () => chartRef.current.destroy();
    }, [uiCtx.theme]);

    return <canvas id="myCanvas"></canvas>;
};

export default ChartContainer;
