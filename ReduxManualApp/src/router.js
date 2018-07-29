/**
 * ルーティングの構築用ロジック
 */
import React from 'react';

//react-native-router-fluxライブラリのインポート宣言
// (ライブラリ概要)このライブラリのGithubリポジトリ
// https://github.com/aksonov/react-native-router-flux
// 基本的な用法：
// Routerタグで各々のSceneを囲む → Sceneにはkeyが設定されており「Actions.key_name()」で遷移する
import { Scene, Router, Actions } from 'react-native-router-flux';

//それぞれの表示用のコンポーネントのインポート宣言
import ManualList from './Components/ManualList';
import ManualDetail from './Components/ManualDetail';

//ルーティングロジック構築用のコンポーネントの内容を定義する
const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="manualList" component={ManualList} title="マニュアル一覧" />
      <Scene key="manualDetail" component={ManualDetail} title="マニュアル詳細" />
    </Router>

  );
};

//インポート可能にする宣言
export default RouterComponent;
