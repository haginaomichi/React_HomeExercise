import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";
import { useCustomTraining } from "../hooks/useCustomTraining";

export const App: FC = () => {
    const [number, setNumber] = useState<number>();
    // const [menus, setMenus] = useState<string[]>([]);
    // const [Error, setError] = useState("");
    // const [check, setCheck] = useState<number>();
    // const [kcals, setKcals] = useState<string[]>([]);
    // const [foods, setFoods] = useState<string[]>([]);
    // const [hide, setHide] = useState('1');
    // const [total, setTotal] = useState<string>("");

    const { menus, Error, kcals, foods, hide, total, addMenu, completeMenu} = useCustomTraining();

    const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => setNumber(e.target.valueAsNumber);

    const onClickAdd = () => {
      addMenu(number);
      // const newMenus = [...menus];
      // if (menus !== []){
      //   newMenus.splice(0, 3);
      // };
      // setError("");
      // setCheck(number);
      // setKcals([]);
      // setFoods([]);
      // setHide("");
      // setTotal("");
      // if (number === 1){
      //   newMenus.push("ランニング", "エアロビクス", "縄跳び");
      // } else if (number === 2){
      //   newMenus.push("サイクリング", "ランニング: ゆったり", "階段等で昇降運動");
      // } else if (number === 3){
      //   newMenus.push("スクワット", "ウォーキング", "ラジオ体操");
      // } else if (number === 4){
      //   newMenus.push("エアロビクス", "フラフープ", "階段等で昇降運動");
      // } else if (number === 5){
      //   newMenus.push("ストレッチ", "ラジオ体操", "入浴");
      // } else if (number === 6){
      //   newMenus.push("バランスボール", "ヨガ", "ウォーキング");
      // } else {
      //   setMenus([]);
      //   setError("▲");
      // }
      // setMenus(newMenus);
    };

    const onClickComplete = () =>{
      completeMenu(number);
      // if (check !== number) {
      //   setMenus([]);
      //   setKcals([]);
      //   setFoods([]);
      //   setTotal("");
      //   if (!number || number > 6 || number < 1) {
      //     setError("▲");
      //   } else {
      //     setError("OKタッチ!");
      //   }
      // } else if (check === number) {
      //   const newKcals = [...kcals];
      //   if (kcals !== []){
      //     newKcals.splice(0, 3);
      //   };
      //   const newFoods = [...foods];
      //   if (foods !== []){
      //     newFoods.splice(0, 3);
      //   };
      //   setTotal("");

      //   if (number === 1){
      //     newKcals.push("330kcal", "292kcal", "370kcal");
      //     newFoods.push("かつ丼（893kcal）", "カルボナーラ（830kcal）", "ビーフカレー（954kcal）");
      //     setTotal("992kcal");
      //   } else if (number === 2){
      //     newKcals.push("230kcal", "283kcal", "179kcal");
      //     newFoods.push("サバみそ定食（687kcal）", "広島焼き（633kcal）", "麻婆豆腐（648kcal）");
      //     setTotal("692kcal");
      //   } else if (number === 3){
      //     newKcals.push("131kcal", "145kcal", "134kcal");
      //     newFoods.push("きつねうどん（382kcal）", "ハンバーガー（300kcal）", "春巻き（369kcal）");
      //     setTotal("410kcal");
      //   } else if (number === 4){
      //     newKcals.push("180kcal", "105kcal", "92kcal");
      //     newFoods.push("チーズバーガー（368kcal）", "チョコケーキ（352kcal）", "クリームあんみつ（353kcal）");
      //     setTotal("377kcal");
      //   } else if (number === 5){
      //     newKcals.push("61kcal", "108kcal", "43kcal");
      //     newFoods.push("肉まん（201kcal）", "シュークリーム（209kcal）", "たいやき（211kcal）");
      //     setTotal("212kcal");
      //   } else if (number === 6){
      //     newKcals.push("66kcal", "60kcal", "79kcal");
      //     newFoods.push("杏仁豆腐（125kcal）", "みたらし団子（118kcal）", "カフェオレ（71kcal）");
      //     setTotal("205kcal");
      //   }
      //   setKcals(newKcals);
      //   setFoods(newFoods);
      // }
    }

  return (
    <SContainer>

      <SHeader>
        <STitle>Home Exercise</STitle>
      </SHeader>

      <SBody>
        <SLeftBody>
          <SSubTitle>【Choise Menu】</SSubTitle>
          <h2>- Men -</h2>
          <SOption>
            <li>1. ハードワーク</li>
            <li>2. ミドルワーク</li>
            <li>3. ライトワーク</li>
          </SOption>
          <h2>- Women -</h2>
          <SOption>
            <li>4. ハードワーク</li>
            <li>5. ミドルワーク</li>
            <li>6. ライトワーク</li>
          </SOption>
          <SInput>
            <label>Training No.
            <input type = "number" name = "number" value = {number} onChange = {onChangeNumber} /></label>
            {Error && <SError>{Error}</SError>}<br></br>
          </SInput>
          <SButton onClick = {onClickAdd}>OK</SButton>
        </SLeftBody>

        <SRightBody>
          <SSubTitle>【Today's Exercise】</SSubTitle>
          <SMenuList>
            {menus.map((menu, index) => (
              <li key = {menu}>
                <SMenu>{index + 1}.{menu}</SMenu>
              </li>
            ))}
          </SMenuList>
          {!Error && !hide && <SButton onClick = {onClickComplete}>COMPLETE!</SButton>}
        </SRightBody>
      </SBody>

      <SBottomBody>
        <SSubTitle>【Exercise Effect】</SSubTitle>
        <SEffect>
          <SKcalList>
            {total && <li>合計{total}消費!!</li>}
            {kcals.map((kcal, index) => (
              <li key = {kcal}>
                <SKcal>{index + 1}.{kcal}</SKcal>
              </li>
            ))}
          </SKcalList>
          <SKcalList>
            {foods.map((food, index) => (
              <li key = {food}>
                <SKcal>★{food}</SKcal>
              </li>
            ))}
          </SKcalList>
        </SEffect>
      </SBottomBody>
    </SContainer>
  );
};

const SContainer = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/image_1.jpg);
  background-size: cover;
  text-align: center;
  padding-bottom: 40px;
`;
const SHeader = styled.div`
  margin-bottom: 10px;
`;
const STitle = styled.h1`
  color: black;
  font-size: 48px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding: 20px 0px;
`;
const SBody = styled.div`
  display: flex;
  justify-content: center;
`;
const SLeftBody = styled.div`
  border: solid 3px #00b3b3;
  width: 365px;
  margin-bottom: 20px;
  margin-right: 10px;
  border-radius: 5%;
`;
const SRightBody = styled.div`
  width: 715px;
  text-align: center;
  border: solid 3px #00b3b3;
  margin-bottom: 20px;
  margin-left: 10px;
  border-radius: 3%;
`;
const SBottomBody = styled.div`
  border: solid 3px #00b3b3;
  height: 350px;
  width: 1100px;
  margin: 0px auto;
  border-radius: 2%;
`;
const SSubTitle = styled.h2`
  color: white;
  font-size: 30px;
  margin-block-start: 0;
  margin-top: 8px;
`;
const SOption = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;
const SInput = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  font-weight: bold;
`;
const SError = styled.p`
  margin : 0;
  color: red;
  font-weight: bold;
`;
const SButton = styled.button`
display: inline-block;
border-radius: 10%;          
font-size: 12pt;   
text-align: center;      
cursor: pointer;     
padding: 2px 4px; 
background: #00b3b3;     
color: #ffffff;     
line-height: 1em;        
transition: .3s;         
box-shadow: 6px 6px 6px #666666;  
border: 2px solid #00b3b3;    
:hover {
  box-shadow: none;        
  color: #00b3b3;    
  background: #ffffff;     
}
`;
const SMenuList = styled.ul`
  width: 665px;
  list-style: none;
  padding-inline-start: 0;
  margin: 0 auto;
`;
const SMenu = styled.p`
  color: white;
  font-size: 32px;
  text-align: left;
`;
const SEffect = styled.div`
  display:flex;
`;
const SKcalList = styled.ul`
  width: 550px;
  list-style: none;
  padding-inline-start: 0;
  margin: 0 auto;
  text-align: center;
`;
const SKcal = styled.p`
  color: red;
  font-size: 32px;
  text-align: center;
`;