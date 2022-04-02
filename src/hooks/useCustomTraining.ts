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
        newMenus.splice(0, 6);
      };
      setError("");
      setCheck(number);
      setKcals([]);
      setFoods([]);
      setHide("");
      setTotal("");
      if (number === 1){
        newMenus.push("ランニング", "30分・少し速めを意識!", "エアロビクス", "体を大きく動かす!", "縄跳び", "15分・細かくステップ!");
      } else if (number === 2){
        newMenus.push("サイクリング", "30分・一定速度に保つ!", "ランニング", "30分・ゆったりペース!", "階段等で昇降運動", "1～3階を5往復目安!");
      } else if (number === 3){
        newMenus.push("スクワット", "10回を5セット目安!", "ウォーキング", "30分・軽く汗ばむ程度!", "ラジオ体操", "1つの動作を大きく!");
      } else if (number === 4){
        newMenus.push("エアロビクス", "少し息が上がるくらい!", "フラフープ", "30分・まわす⇔休憩!", "階段等で昇降運動", "1～2階を5往復目安!");
      } else if (number === 5){
        newMenus.push("ストレッチ", "20分・全身を伸ばす!", "ラジオ体操", "体の動きを大きく!", "入浴", "入浴・上がるを反復で!");
      } else if (number === 6){
        newMenus.push("バランスボール", "20分・全身運動!", "ヨガ", "20分・体幹を意識して!", "ウォーキング", "20分・散歩する感覚で!");
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