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
import { fetchOrders } from '../reducks/users/operations';
import { CardMedia } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { DeleteOrdersInfo } from '../reducks/topping/operations';
import { getUserId } from '../reducks/users/selector';
import {Link} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CancelIcon from '@material-ui/icons/Cancel';
import { setCancel } from '../reducks/users/operations';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

//export default function CartList()
const CartList = () => {
  const history = useHistory();
  const selector = useSelector((state) => state);
  const selecter2 = useSelector((state) => state);
  const topping = getTopping(selecter2);
  const orders = getOrders(selector);
  const uid = getUserId(selector);

  const [total, setTotalPrice] = useState(0);
  const [priceTopping, setPriceTopping] = useState(0);

  const toppingArray = [];

  const createToppingPrice = () => {
    let toppingPrice = 0;
    const filterOrder = orders.filter((order) => order.status === 0);
    filterOrder.forEach((item) => {
      item.itemInfo.forEach((el) => {
        el.toppings.forEach((el1) => {
          if (topping) {
            const selectTopping = topping.filter(
              (top) => top.id === el1.toppingId
            );
            selectTopping.forEach((el5) => {
              if (el1.toppingSize === 0) {
                toppingPrice = toppingPrice + el5.Mprice;
                toppingArray.push(toppingPrice);
              } else {
                toppingPrice = toppingPrice + el5.Lprice;
                toppingArray.push(toppingPrice);
              }
            });
          }
        });
      });
    });
    setPriceTopping(toppingPrice);

    toppingArray.push(toppingPrice);
  };

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

  useEffect(() => {
    createToppingPrice();
  },[]);

  useEffect(() => {
    createTotalPrice();
  });

  const dispatch = useDispatch();

  const products = getProducts(selector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //cart-----------------------

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTopping());
  }, [dispatch]);
  //------------------------------

  const classes = useStyles();

  let toppingPrice = 0;
  const topPriceArray = []

  return (
    <div className="cartlist">
      <h2>ショッピングカート</h2>
      <div>
        {orders === undefined ? (
          ""
        ) : (
          <TableContainer component={Paper} key={orders.id}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>商品名</TableCell>
                  <TableCell align="right">数量/サイズ/価格（税抜）</TableCell>
                  <TableCell align="right">トッピング/価格（税抜）</TableCell>
                  <TableCell align="right">小計</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              {orders === undefined
                      ? ''
                      : orders
                          .filter((order) => order.status === 0)
                          .map((order) => {
                            
                            return (
                              <TableBody key={order.orderId}>
                                
                                {order.itemInfo.map((itemInfos) => {
                                  return products === undefined
                                    ? ''
                                    : products
                                        .filter(
                                          (product) =>
                                            product.id === itemInfos.itemId
                                        )
                                        .map((product) => {
                                          return (
                                            <TableRow key={product.id}>
                                              <TableCell align="center">
                                                <img
                                                  src={product.imagePath}
                                                  alt="アイコン"
                                                  height="100px"
                                                  align="center"
                                                />
                                                <p>{product.name}</p>
                                              </TableCell>
                                              <TableCell align="center">
                                                <p>{itemInfos.itemNum}個</p>
                                                <p>{itemInfos.itemSize === 0 ? 
                                                <div>Mサイズ</div> : <div>Lサイズ</div>}</p>
                                                <p>{itemInfos.itemSize === 0 ? 
                                                <div>{product.Mprice}円/個</div> : <div>{product.Lprice}円/個</div>}</p>
                                              </TableCell>
                                              <TableCell align="center">
                                              
                                                {itemInfos.toppings.length === 0 ? <p>なし</p> :
                                               <div>
                                                 
                                                 {itemInfos.toppings.map(
                                                  (topp) => {
                                                    return topping === undefined
                                                      ? ''
                                                      : topping
                                                          .filter(
                                                            (toppings) =>
                                                              toppings.id ===
                                                              topp.toppingId
                                                          )
                                                          .map((toppings) => {
                                                            if (topp.toppingSize === 0) {
                                                   
                                                              toppingPrice =
                                                                toppingPrice + toppings.Mprice;
                                                            } else {
                                                              
                                                              toppingPrice =
                                                                toppingPrice + toppings.Lprice;
                                                                console.log(toppingPrice);
                                                            }
                                                            return (
                                                              <>
                                                              <p
                                                                key={
                                                                  toppings.id
                                                                }
                                                              >
                                                              </p>
                                                              <div>
                                                                {topp.toppingSize === 0 ?
                                                                <><p>{toppings.name}/+1倍/+{toppings.Mprice}円</p></>:<><p>{toppings.name}/+2倍/+{toppings.Lprice}円</p></>
                                                              }
                                                              </div>
                                                              </>
                                                            );
                                                          });
                                                  }
                                                )}
                                                 </div>}
                                                
                                              </TableCell>
                                              <TableCell
                                                key={itemInfos.itemId}
                                                align="center"
                                              >
                                                {itemInfos.itemSize === 0 ? 
                                                <p>{(product.Mprice +
                                                    toppingPrice) *
                                                    itemInfos.itemNum}円</p> :
                                                     <p>{(product.Lprice +
                                                      toppingPrice) *
                                                      itemInfos.itemNum}円
                                                       </p>}
                                                       {itemInfos.toppings.map(el => {
                                                    toppingPrice = 0
                                                  })}
                                                
                                              </TableCell>
                                              <TableCell align="center">
                                              <div>
                                              <Button
                                               key={order.id}
                                                variant="contained"
                                                 color="primary"
                                              onClick={() => {
                                              dispatch(
                                                DeleteOrdersInfo(
                                                    uid,
                                                   itemInfos,
                                                 order.orderId
                                                     )
                                                   );
                                                 }}
                                               >
                                                削除
                                               </Button>
                                               </div>
                                              </TableCell>
                                            </TableRow>
                                          );
                                        });
                                })}
                                
                              </TableBody>
                            );
                          })}
              {/* <TableBody>
                {orders
                  .filter((order) => order.status === 0)
                  .map((order) => {

                    return (
                    order.itemInfo.map((itemInfos) => {

                      <TableRow key={order.id}>
                      
                      <TableCell>            
                              {products === undefined
                                ? ''
                                : products
                                    .filter(
                                      (product) =>
                                        product.id === itemInfos.itemId
                                    )
                                    .map((product) => {
                                      
                                      return (
                                        <>
                                          <CardMedia
                                            key={order.id}
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={product.imagePath}
                                            title="Contemplative Reptile"
                                          />
                                          <div key={product.id}>
                                            {product.name}
                                          </div>
                                        </>
                                      );
                                    })}
                      </TableCell>
                      <TableCell>
                              {itemInfos.itemNum}個
                              {products === undefined
                                ? ''
                                : products
                                    .filter(
                                      (product) =>
                                        product.id === itemInfos.itemId
                                    )
                                    .map((product) => {
                                      return itemInfos.itemSize === 0 ? (
                                        <div key={order.id}>
                                          <div>Mサイズ</div>{' '}
                                          <div>
                                            {product.Mprice.toLocaleString()}{' '}
                                            円/個
                                          </div>{' '}
                                        </div>
                                      ) : (
                                        <div>
                                          <div>Lサイズ</div>{' '}
                                          <div>
                                            {product.Lprice.toLocaleString()}{' '}
                                            円/個
                                          </div>{' '}
                                        </div>
                                      );
                                    })}
                        
                      </TableCell>
                      <TableCell>
                                  {itemInfos.toppings.length === 0 ? <p>なし</p> :
                                  <div>
                                    
                                    {itemInfos === undefined
                                    ? ''
                                    : itemInfos.toppings.map((top,index) => {
                                      
                                      
                                      return(
                                        
                                        <div  key={order.id}>
                                          
                                          {topping === undefined
                                            ? ''
                                            : topping
                                                .filter(
                                                  (to) =>
                                                    to.id === top.toppingId
                                                )
                                                .map((to) => {
                                                  {itemInfos.toppings.map(el => {
                                                    toppingPrice = 0
                                                  })}
                                                  if (top.toppingSize === 0) {
                                                   
                                                    toppingPrice =
                                                      toppingPrice + to.Mprice;
                                                  } else {
                                                    
                                                    toppingPrice =
                                                      toppingPrice + to.Lprice;
                                                  }

                                                  return top.toppingSize ===
                                                    0 ? (
                                                    <>
                                                      <div>{to.name}</div>
                                                      <div>
                                                        ＋１倍/{to.Mprice} 円
                                                      </div>
                                                    </>
                                                  ) : (
                                                    <>
                                                      <div>{to.name}</div>
                                                      <div>
                                                        ＋２倍/{to.Lprice}円
                                                      </div>
                                                    </>
                                                  );
                                                }
                                                
                                                )}
                                                
                                        </div>
                                      )  })}
                                    </div>}
                      </TableCell>
                      <TableCell>
                          
                          <>
 
                                  {products === undefined
                                    ? ''
                                    : products
                                        .filter(
                                          (product) =>
                                            product.id === itemInfos.itemId
                                        )
                                        .map((product) => {
                                          return itemInfos.itemSize === 0 ? (
                                            <>
                                              {(
                                                (product.Mprice +
                                                  toppingPrice) *
                                                itemInfos.itemNum
                                              ).toLocaleString()}
                                              円
                                              
                                            </>
                                          ) : (
                                            <>
                                              {(
                                                (product.Lprice +
                                                  toppingPrice) *
                                                itemInfos.itemNum
                                              ).toLocaleString()}
                                              円
                                              
                                            </>
                                          )
                                          
                                        })}
                          </>
                      
                      </TableCell>
                      <TableCell>
                        
                          <div>
                            <Button
                              key={order.id}
                              variant="contained"
                              color="primary"
                              onClick={() => {
                                dispatch(
                                  DeleteOrdersInfo(
                                    uid,
                                    itemInfos,
                                    order.orderId
                                  )
                                );
                              }}
                            >
                              削除
                            </Button>
                          </div>
                      </TableCell>
                    </TableRow>
                    })

                    
                    
                      )   } )}
              </TableBody> */}
            </Table>
          </TableContainer>
        )}
      </div>
      <h2>消費税：{Math.round(total * 0.1).toLocaleString()}円</h2>
      <h2>合計金額（税込）：{Math.round(total * 1.1).toLocaleString()}円</h2>
      <Button
        onClick={() => history.push('/orderconfirm')}
        variant="contained"
        color="primary"
      >
        注文確認ボタンに進む
      </Button>
    </div>
  );
};
export default CartList;
