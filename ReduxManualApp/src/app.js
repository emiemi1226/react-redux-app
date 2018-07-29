/**
 * アプリケーション構築用のファイル
 */
import React, { Component } from 'react';

//React-Reduxのインポート宣言
// → ProviderタグでラップすることでReactコンポーネント内でStoreにアクセスできるようにする
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
//Routerコンポーネントのインポート宣言
import Router from './router';

//アプリの画面の組み立て
class App extends Component {

  //コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {
    //初期化処理
  }

  //見た目データのレンダリングを行う
  render() {
    //Redux本来のdispatch処理が実行される前にMiddlewareの処理を実行する
    //※ 非同期処理でアクションを起こすような関数をdispatchに渡せるようにするReduxThunkを仕込む形にする
    const store = createStore(reducers);

    //  }
    //アプリの画面の組み立て
    return (
      <Provider store={store}>
        <Router />     
      </Provider>
    );
  }
}

//アプリの画面本体となるこのファイルのエクスポート宣言
export default App;
