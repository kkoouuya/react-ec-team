import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CancelIcon from '@material-ui/icons/Cancel';
import HistoryIcon from '@material-ui/icons/History';
// import IconButton from "@material-ui/core/IconButton";
import Card from '@material-ui/core/Card';
// import CardContent from "@material-ui/core/CardContent";
// import Link from "@material-ui/core/Link";
import { fetchOrders } from '../reducks/users/operations';
import { getOrders } from '../reducks/users/selector';
import { fetchProducts } from '../reducks/products/operations';
import { getProducts } from '../reducks/products/selectors';
import { fetchTopping } from '../reducks/topping/operations';
import { getTopping } from '../reducks/topping/selectors';
import { Link } from 'react-router-dom';
import { setCancel } from '../reducks/users/operations';
import Grid from '@material-ui/core/Grid';
import { getUserId } from '../reducks/users/selector';

// import ImportContactsIcon from "@material-ui/icons/ImportContacts";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

const OrderHistory = () => {
  const [double, setDouble] = useState(false);
  // const [show, setShow] = useState(false);
  // const [shows, setShows] = useState(true);
  // const [cancel, setCancel] = useState('キャンセル');
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const orders = getOrders(selector);
  const products = getProducts(selector);
  const topping = getTopping(selector);
  const uid = getUserId(selector);

  useEffect(() => {
    dispatch(fetchOrders(uid));
  }, [dispatch, uid]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchTopping());
  }, [dispatch]);
  // useEffect(()=>{
  //   const unsubscribe =db.collection("users").doc("1CiNypKuOkdRJL7KKGaV5w7QSKB3").collection("orders").onSnapshot(snapshots =>{

  //   })
  // })

  return (
    <div>
      <h1>hoge</h1>
    </div>
  );
};

export default OrderHistory;
