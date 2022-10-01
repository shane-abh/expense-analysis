import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';


const Purchase_expense_monthly = () => {

    const [data,setData] = React.useState(0);
    const url = 'http://192.168.1.103:8000/monthly_purchase';
    
  
  
    const apiData =  () =>{
      const res =  fetch(url)
      .then((response) => {
        // console.log(response)
        return response.json()
      })
      .then((data) => {
        // console.log(data)
        // setData(data.purchase)
        const d = JSON.parse(data.monthly_purchase);
        // console.log(d)
        const months = ['','Jan','Feb' ,'March' ,'Apr', 'May','June' ,'Jul' , 'Aug', 'Sept' ,'Oct']
        const sample = Object.keys(d).map(key => ({
          month: months[key],
          expense: d[key]

        }));

        console.log(sample);
        
        setData(sample)
        return data
      })
    }
    React.useEffect(() => {
        apiData();
    },[])
    
   
  
    // console.log(data)
    const d1 = []

    // console.log(Object.values(data))
    console.log(data)
    
    
   
  return (
    <div className="m-2 md:m-10 p-2 md:p-4 bg-white rounded-xl ">

    
    <ChartComponent id='charts' 
                    primaryXAxis={{valueType: 'Category', title: 'Months'}} 
                    primaryYAxis={{ title: 'Monthly Expenses'}} 
                    title='Montly expenses for purchase'
                    tooltip={{ enable: true, shared: false , header:'Purchases'}}>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='month' yName='expense' name='Expense' type='Column' >
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>
  </div>
  )
}

export default Purchase_expense_monthly