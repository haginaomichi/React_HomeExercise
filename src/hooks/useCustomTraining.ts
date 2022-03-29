import { useCallback, useState } from "react";

export const useCustomTraining = () => {
    const [menus, setMenus] = useState<string[]>([]);
    const [Error, setError] = useState("");
    const [check, setCheck] = useState<number>();
    const [kcals, setKcals] = useState<string[]>([]);
    const [foods, setFoods] = useState<string[]>([]);
    const [hide, setHide] = useState('1');
    const [total, setTotal] = useState<string>("");

    const addMenu = useCallback((number) => {
        const newMenus = [...menus];
      if (menus !== []){
        newMenus.splice(0, 3);
      };
      setError("");
      setCheck(number);
      setKcals([]);
      setFoods([]);
      setHide("");
      setTotal("");
      if (number === 1){
        newMenus.push("ランニング", "エアロビクス", "縄跳び");
      } else if (number === 2){
        newMenus.push("サイクリング", "ランニング: ゆったり", "階段等で昇降運動");
      } else if (number === 3){
        newMenus.push("スクワット", "ウォーキング", "ラジオ体操");
      } else if (number === 4){
        newMenus.push("エアロビクス", "フラフープ", "階段等で昇降運動");
      } else if (number === 5){
        newMenus.push("ストレッチ", "ラジオ体操", "入浴");
      } else if (number === 6){
        newMenus.push("バランスボール", "ヨガ", "ウォーキング");
      } else {
        setMenus([]);
        setError("▲");
      }
      setMenus(newMenus);
    }, [menus]);

    const completeMenu = useCallback((number) => {
        if (check !== number) {
          setMenus([]);
          setKcals([]);
          setFoods([]);
          setTotal("");
          if (!number || number > 6 || number < 1) {
            setError("▲");
          } else {
            setError("OKタッチ!");
          }
        } else if (check === number) {
          const newKcals = [...kcals];
          if (kcals !== []){
            newKcals.splice(0, 3);
          };
          const newFoods = [...foods];
          if (foods !== []){
            newFoods.splice(0, 3);
          };
          setTotal("");
    
          if (number === 1){
            newKcals.push("330kcal", "292kcal", "370kcal");
            newFoods.push("かつ丼（893kcal）", "カルボナーラ（830kcal）", "ビーフカレー（954kcal）");
            setTotal("992kcal");
          } else if (number === 2){
            newKcals.push("230kcal", "283kcal", "179kcal");
            newFoods.push("サバみそ定食（687kcal）", "広島焼き（633kcal）", "麻婆豆腐（648kcal）");
            setTotal("692kcal");
          } else if (number === 3){
            newKcals.push("131kcal", "145kcal", "134kcal");
            newFoods.push("きつねうどん（382kcal）", "ハンバーガー（300kcal）", "春巻き（369kcal）");
            setTotal("410kcal");
          } else if (number === 4){
            newKcals.push("180kcal", "105kcal", "92kcal");
            newFoods.push("チーズバーガー（368kcal）", "チョコケーキ（352kcal）", "クリームあんみつ（353kcal）");
            setTotal("377kcal");
          } else if (number === 5){
            newKcals.push("61kcal", "108kcal", "43kcal");
            newFoods.push("肉まん（201kcal）", "シュークリーム（209kcal）", "たいやき（211kcal）");
            setTotal("212kcal");
          } else if (number === 6){
            newKcals.push("66kcal", "60kcal", "79kcal");
            newFoods.push("杏仁豆腐（125kcal）", "みたらし団子（118kcal）", "カフェオレ（71kcal）");
            setTotal("205kcal");
          }
          setKcals(newKcals);
          setFoods(newFoods);
        }
    }, [check, kcals, foods]);

    return{ menus, Error, kcals, foods, hide, total, addMenu, completeMenu};
}