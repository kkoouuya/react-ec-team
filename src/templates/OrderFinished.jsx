import React from 'react';
import { Link } from 'react-router-dom'

const OrderFinished = () => {
  return (
    <div class="text-center">
      <h2>注文が完了しました！</h2>
        <p>この度はご注文いただきましてありがとうございます！</p>
        <p>お支払い先はお送りしたメールに記載してありますのでご確認ください</p>
        <p>メールが届かない場合は「注文履歴」からご確認ください。</p>
        <Link to="/">
          <Button variant="outlined">トップ画面に戻る</Button>
        </Link>
      </div>
  );
};

export default OrderFinished;
