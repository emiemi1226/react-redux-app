/**
 * データ表示で使用するReducerの定義（アプリケーションのステート一覧に関するもの）
 * Reduxの原則の1つであるグローバルな状態ツリーがすべてのソースとなる。
 * → しかしながら一部を更新するような形がほとんどなので役割に応じてReducerを分割する。
 */

import { combineReducers } from 'redux';

//各々の要素に関するReducerのインポート宣言
import ManualReducer from './ManualReducer';

export default combineReducers({
  manual: ManualReducer
});
