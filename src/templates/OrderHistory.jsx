import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CancelIcon from '@material-ui/icons/Cancel';
import HistoryIcon from '@material-ui/icons/History';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import { fetchOrders } from '../reducks/users/operations';
import { getOrders } from '../reducks/users/selector';
import { fetchProducts } from '../reducks/products/operations';
import { getProducts } from '../reducks/products/selectors';
import { fetchTopping } from '../reducks/topping/operations';
import { getTopping } from '../reducks/topping/selectors';
import { getUserId } from '../reducks/users/selector';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

// const orders = [
//   {
//     id: "",
//     orderDate: "2021-5-21",
//     item_imagePath:
//       "https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_63e36f58-0e6a-43cf-bf5d-721f0cc6bb98.jpg",
//     item_name: "hawaianパラダイス",
//     topping_name: "タコス",
//     item_num: "1",
//     status: "1",
//   },
//   {
//     id: "",
//     orderDate: "2021-6-2",
//     item_imagePath:
//       "https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_63e36f58-0e6a-43cf-bf5d-721f0cc6bb98.jpg",
//     item_name: "hawaianパラダイス",
//     topping_name: "タコス",
//     item_num: "1",
//     status: "1",
//   },
//   {
//     id: "",
//     orderDate: "2021-8-2",
//     item_imagePath:
//       "https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_63e36f58-0e6a-43cf-bf5d-721f0cc6bb98.jpg",
//     item_name: "hawaianパラダイス",
//     topping_name: "タコス",
//     item_num: "1",
//     status: "1",
//   },
// ];

//export default function CartList()
const OrderHistory = () => {
  const [double, setDouble] = useState(false);
  const [cancel, setCancel] = useState('キャンセル');
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const selecter2 = useSelector((state) => state);
  const topping = getTopping(selecter2);
  const orders = getOrders(selector);
  const products = getProducts(selector);
  const uid = getUserId(selector);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
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

  return (
    <div>
      <h1>hoge</h1>
    </div>
  );
};

export default OrderHistory;
