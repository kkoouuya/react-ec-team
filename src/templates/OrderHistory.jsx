import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../reducks/products/selectors';
//import { FetchCart } from '../reducks/products/operations';
import { getOrders } from '../reducks/users/selector';
import { getTopping } from '../reducks/topping/selectors';
import { fetchTopping } from '../reducks/topping/operations';
import { fetchProducts } from '../reducks/products/operations';
import { fetchOrders, fetchOrderHistory } from '../reducks/users/operations';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { DeleteOrdersInfo } from '../reducks/topping/operations';
import { getUserId, getOrderHIstory } from '../reducks/users/selector';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

//export default function CartList()
const OrderHistory = () => {
  const history = useHistory();
  const selector = useSelector((state) => state);
  const selecter2 = useSelector((state) => state);
  const topping = getTopping(selecter2);
  const orders = getOrders(selector);
  const uid = getUserId(selector);
  // const orderHistory = getOrderHistory(selector);
  const dispatch = useDispatch();

  const [total, setTotalPrice] = useState(0);

  const createTotalPrice = () => {
    let totalPrice = 0;
    const filterOrder = orders.filter((order) => order.status === 0);
    filterOrder.forEach((item) => {
      item.itemInfo.forEach((el) => {
        if (products) {
          const selectProducts = products.filter(
            (product) => product.id === el.itemId
          );
          selectProducts.forEach((select) => {
            if (el.itemSize === 0) {
              totalPrice = totalPrice + select.Mprice * el.itemNum;
            } else {
              totalPrice = totalPrice + select.Lprice * el.itemNum;
            }
          });
        }
        el.toppings.forEach((el1) => {
          if (topping) {
            const selectTopping = topping.filter(
              (top) => top.id === el1.toppingId
            );
            selectTopping.forEach((el5) => {
              if (el1.toppingSize === 0) {
                totalPrice = totalPrice + el5.Mprice * el.itemNum;
              } else {
                totalPrice = totalPrice + el5.Lprice * el.itemNum;
              }
            });
          }
        });
      });
    });
    setTotalPrice(totalPrice);
  };

  // useEffect(() => {
  //   dispatch(fetchOrderHistory());
  // }, [dispatch]);

  // useEffect(() => {
  //   createToppingPrice();
  // },[]);

  useEffect(() => {
    createTotalPrice();
  });

  const products = getProducts(selector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //cart-----------------------

  useEffect(() => {
    if (uid) {
      dispatch(fetchOrders(uid));
    }
  }, [dispatch, orders, uid]);

  useEffect(() => {
    dispatch(fetchTopping());
  }, [dispatch]);
  //------------------------------

  const classes = useStyles();

  let toppingPrice = 0;
  // const topPriceArray = []

  return (
    <div>
      <h1>hoge</h1>
    </div>
  );
};
export default OrderHistory;
