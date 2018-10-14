// // import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ReactDOM from 'react-dom'
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
//
//
//
//
//
// var React = require('react');
// var Component = React.Component;
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
//
// class App extends Component {
//     render() {
//         const options = {
//             animationEnabled: true,
//             exportEnabled: true,
//             theme: "dark2", // "light1", "dark1", "dark2"
//             title:{
//                 text: "Trip Expenses"
//             },
//             data: [{
//                 type: "pie",
//                 indexLabel: "{label}: {y}%",
//                 startAngle: -90,
//                 dataPoints: [
//                     { y: 20, label: "Airfare" },
//                     { y: 24, label: "Food & Drinks" },
//                     { y: 20, label: "Accomodation" },
//                     { y: 14, label: "Transportation" },
//                     { y: 12, label: "Activities" },
//                     { y: 10, label: "Misc" }
//                 ]
//             }]
//         }
//
//         return (
//             <div>
//                 <CanvasJSChart options = {options}
//                     /* onRef={ref => this.chart = ref} */
//                 />
//                 {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//             </div>
//         );
//     }
// }
//
// module.exports = App;
//
//
//
// // class App extends Component {
// //   render() {
// //     return (
// //       <div className="App">
// //         <header className="App-header">
// //           <img src={logo} className="App-logo" alt="logo" />
// //           <p>
// //             Edit <code>src/App.js</code> and save to reload.
// //           </p>
// //           <a
// //             className="App-link"
// //             href="https://reactjs.org"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Learn React
// //           </a>
// //         </header>
// //       </div>
// //     );
// //   }
// // }
//
// export default App;


import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
    HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries
} from 'react-jsx-highcharts';

const plotOptions = {
    series: {
        pointStart: 2010
    }
};

const App = () => (
    <div className="app">
        <HighchartsChart plotOptions={plotOptions}>
            <Chart />

            <Title>Solar Employment Growth by Sector, 2010-2016</Title>

            <Subtitle>Source: thesolarfoundation.com</Subtitle>

            <Legend layout="vertical" align="right" verticalAlign="middle" />

            <XAxis>
                <XAxis.Title>Time</XAxis.Title>
            </XAxis>

            <YAxis>
                <YAxis.Title>Number of employees</YAxis.Title>
                <LineSeries name="Installation" data={[43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]} />
                <LineSeries name="Manufacturing" data={[24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]} />
                <LineSeries name="Sales & Distribution" data={[11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]} />
                <LineSeries name="Project Development" data={[null, null, 7988, 12169, 15112, 22452, 34400, 34227]} />
                <LineSeries name="Other" data={[12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]} />
            </YAxis>
        </HighchartsChart>
    </div>
);

export default withHighcharts(App, Highcharts);