import React from 'react';
import { 
    BrowserRouter, 
    Route, 
    Routes as ReactRouterDom,
} from "react-router-dom";
import Layout from '../components/layout/Layout';
import Wrapper from '../components/wrapper/Wrapper';
import Home from '../pages/home/Home';
import PokeApi from '../pages/pokeApi/PokeApi';
import { ToDoList } from '../pages/toDoList/ToDoList';


const Routes = () => {
  return (
    <>
        <BrowserRouter>
          <Layout>
            <Wrapper>
              <ReactRouterDom>
                  <Route path="/" element={<Home />} />
                  <Route path="/toDoList" element={<ToDoList />} />
                  <Route path="/pokeApi" element={<PokeApi />} />
              </ReactRouterDom>
            </Wrapper>
          </Layout>
        </BrowserRouter>
    </>
  )
}

export default Routes;