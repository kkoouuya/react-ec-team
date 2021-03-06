import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  ItemList,
  ItemDetail,
  CartList,
  OrderConfirm,
  OrderFinished,
  OrderHistory,
  Login,
} from './templates';
import { Header } from './components/index';
import SignUp from './templates/SignUp';
import PaymentForm from './reducks/payment/PaymentForm';
import Auth from './Auth';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />

        <Auth>
          <Route exact path="/" component={ItemList} />
          <Route exact path="/itemdetail" component={ItemDetail} />
          <Route exact path="/cartlist" component={CartList} />
          <Route exact path="/orderconfirm" component={OrderConfirm} />
          <Route exact path="/ordercomplete" component={OrderFinished} />
          <Route exact path="/orderhistory" component={OrderHistory} />
          <Route exact path="/paymentform" component={PaymentForm} />
        </Auth>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
