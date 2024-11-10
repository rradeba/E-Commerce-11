import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import ProductForm from './components/ProductForm';
import OrderForm from './components/OrderForm';
import CustomerList from './components/CustomerList';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/customer/new" component={CustomerForm} />
        <Route path="/customer/edit/:id" component={CustomerForm} />
        <Route path="/customers" component={CustomerList} />
        
        <Route path="/product/new" component={ProductForm} />
        <Route path="/product/edit/:id" component={ProductForm} />
        <Route path="/products" component={ProductList} />

        <Route path="/order/new" component={OrderForm} />
        <Route path="/order/edit/:id" component={OrderForm} />
        <Route path="/orders" component={OrderList} />
      </Switch>
    </Router>
  );
};

export default App;
