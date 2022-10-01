import React from 'react';
import '../../App.css';
import { useEffect, useState } from 'react';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

const Atm_deposit_table = () => {
    const [data,setData] = useState(0);
    const url = 'http://192.168.1.103:8000/atm_dep';
    
  
  
    const apiData =  () =>{
      const res =  fetch(url)
      .then((response) => {
        // console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data)
        // setData(data.purchase)
        const d = JSON.parse(data.deposits);
        console.log(d)
        // const date = d['DATE']
        // const balance = d['BALANCE']
  
        // console.log(date)
  
        const sample =   Object.keys(d.BALANCE).map(key => ({ 'Date': new Date(parseInt(d.DATE[key])).toDateString() , 
                                                              'Description': d.DESCRIPTION[key],  
                                                              'Balance': d.BALANCE[key],
                                                              'Amount': d['AMOUNT (AED)'][key]
                                                            }));
        // console.log(sample)
        setData(sample)
        return data
      })
    }
    useEffect(() => {
        apiData();
    },[])
    
   
  
    console.log(data)  
    
  
    
   
    return (
      <div className='m-1 md:m-10 p-2 md:p-5 bg-white rounded-xl'>
        
       <h1 className='m-2'>ATM Deposit</h1>
        <GridComponent dataSource={data} allowPaging={true} allowSorting={true}>
          <ColumnsDirective>
              <ColumnDirective field='Date' width='70' textAlign="Left"/>
              <ColumnDirective field='Description' width='100'/>
              <ColumnDirective field='Balance' width='60'/>
              <ColumnDirective field='Amount' width='60'/>
              
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group]}/>
      </GridComponent>
      </div>
    );
}

export default Atm_deposit_table