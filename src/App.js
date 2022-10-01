import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useStateContext } from './ContextProvider';
import Sidebar from './components/SideBar.jsx';
import NavBar from './components/NavBar';
import {divs_back} from './components/divs_back';
import Dashboard from './pages/Dashboard'
import Purchase from './pages/Purchase';
import Goals from './pages/Goals';
import P2P from './pages/P2P';
import ATM from './pages/ATM';
import OtherAcc from './pages/OtherAcc';
import Main_page from './pages/Main_page';



function App() {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text 3xl p-3  hover:drop-shadow-x1  hover:bg-light-gray text-white" 
                      style={{ background: currentColor, borderRadius: '50%' }} onClick={() => setThemeSettings(true)}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div className={ activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '}>

            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <NavBar />
            </div>

            <div>
              {/* {themeSettings && <ThemeSettings/>} */}

              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Main_page />}  />
                <Route path="/overall" element={<Dashboard /> } />

                {/* pages  */}
                <Route path="/purchase" element={<Purchase/>} />
                <Route path="/goals" element={<Goals/> } />
                <Route path="/P2P" element={<P2P/> } />

                {/* apps  */}
                <Route path="/OtherAccounts" element={<OtherAcc/> } />
                <Route path="/atm" element={<ATM/> } />
                {/* <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} /> */}

                {/* charts  */}
                {/* <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );  
    
  
}

export default App;
