/**
 * 任意のオブジェクトからクエリパラメータ用の文字列配列を作成する
 * eg. { a: "aaa", b: null, c : 1} ===> ["a=aaa", "c=1"]
 */
export const createParamArray = (obj) => {
  if (!obj) return [];
  return Object.keys(obj).reduce((acc, cur) => {
    if (obj[cur]) {
      acc.push(`${cur}=${obj[cur]}`);
    }
    return acc;
  }, []);
};
