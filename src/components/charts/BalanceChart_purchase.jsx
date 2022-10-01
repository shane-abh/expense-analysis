import React from 'react';
import '../../App.css';
import { useEffect, useState } from 'react';
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Inject, DateTime,Legend,Tooltip, Zoom } from '@syncfusion/ej2-react-charts'

const BalanceChart = () => {
    const [data,setData] = useState(0);
    const url = 'http://192.168.1.103:8000/purchase';
    
  
  
    const apiData =  () =>{
      const res =  fetch(url)
      .then((response) => {
        // console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data)
        // setData(data.purchase)
        const d = JSON.parse(data.purchase);
        console.log(d)
        const date = d['DATE']
        const balance = d['BALANCE']
  
        console.log(date)
  
        const sample =   Object.keys(balance).map(key => ({'balance': balance[key], 'date': new Date(parseInt(date[key]))}));
        setData(sample)
        return data
      })
    }
    useEffect(() => {
        apiData();
    },[])
    
   
  
    console.log(data)
  
  
  
  
    
  
    
   
    return (
      <div className='"m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        
        <ChartComponent 
          width='100%' 
          primaryXAxis={{valueType: 'DateTime', title: 'Balance Across Years', labelFormat: 'MMM y'} } 
          primaryYAxis={{ title: '', labelFormat: 'AED {value}' }}
          tooltip={{ enable: true, shared: false , header:'Balance'}}
          chartArea={{ border: { width: 0 } }}
          
          >
          <Inject services={[LineSeries, DateTime,Legend, Tooltip]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="Line" dataSource={data} xName='date' yName='balance' marker={{visible:true}}></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    );
}

export default BalanceChart