import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
// import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function createItem(delivery,pizza, topping,quantity) {
  return { delivery, pizza, topping,quantity };
}
const items = [
  createItem('https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_63e36f58-0e6a-43cf-bf5d-721f0cc6bb98.jpg', 'hawaianパラダイス', 'タコス','1'),
  createItem('https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_63e36f58-0e6a-43cf-bf5d-721f0cc6bb98.jpg', 'hawaianパラダイス', 'タコス','1'),
  createItem('https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_63e36f58-0e6a-43cf-bf5d-721f0cc6bb98.jpg', 'hawaianパラダイス', 'タコス','1'),
];

const OrderHistory = () => {
  return (
    <React.Fragment>
    <TableContainer >
<Table aria-label="spanning table" >
  <TableHead>
    <TableRow>
      <TableCell colSpan="4">
        <h1 align="center">注文履歴</h1>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell align="left">配達日</TableCell>
      <TableCell align="left">商品名</TableCell>
      <TableCell align="left">トッピング</TableCell>
      <TableCell align="left">数量</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {items.date}
{items.map((item)=>(
  <TableRow key={item.delivery}>
    <TableCell>{item.delivery}</TableCell>
    <TableCell>{item.pizza}</TableCell>
    <TableCell>{item.topping}</TableCell>
    <TableCell>{item.quantity}</TableCell>
    <TableCell>
    <Button
        variant="contained"
        color="secondary"
        startIcon={<ShoppingCartIcon />}
      >
        もう一度注文する
      </Button>
    </TableCell>
  </TableRow>
))}
<TableRow>
  <TableCell colSpan={4} align="right">合計金額：{}円
  </TableCell>
  <TableCell>
  <Button
        variant="contained"
        color="primary"
        endIcon={<RemoveShoppingCartIcon />}
      >
        キャンセル
      </Button>
  </TableCell>
</TableRow>

  </TableBody>
</Table>

    </TableContainer>
    {/* <Button variant="contained" align="center" style={{color:"white"}}>
      メニューに戻る
      </Button> */}
</React.Fragment>
  );
};

export default OrderHistory;
