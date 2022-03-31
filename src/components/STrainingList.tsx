import { ChangeEvent, FC } from "react";
import styled from "styled-components";

type Props = {
    number: number | undefined;
    setNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
    menus: string[];
    Error: string;
    kcals: string[];
    foods: string[];
    hide: string;
    total: string;
    onClickAdd: () => void;
    onClickComplete: () => void;
};

export const STrainingList: FC<Props> = props => {
    const { number, setNumber, menus, Error, kcals, foods, hide, total, onClickAdd, onClickComplete } = props;
    const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => setNumber(e.target.valueAsNumber);

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
  padding: 0px 10px 20px 10px;
  background-image: url(${process.env.PUBLIC_URL}/image_1.jpg);
  background-size: cover;
  background-position: 0% 90%;
  text-align: center;
`;
const SHeader = styled.div`
  margin-bottom: 10px;
`;
const STitle = styled.h1`
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding: 20px 0px;
  color: black;
  font-size: 48px;
`;
const SBody = styled.div`
  display: block;
  justify-content: center;
`;
const SLeftBody = styled.div`
  margin: 0px auto 20px auto;
  border: solid 3px #00b3b3;
  border-radius: 5%;
`;
const SRightBody = styled.div`
  height: 350px;
  margin: 0px auto 20px auto;
  text-align: center;
  border: solid 3px #00b3b3;
  border-radius: 3%;
`;
const SBottomBody = styled.div`
  height: 710px;
  margin: 0px auto;
  border: solid 3px #00b3b3;
  border-radius: 2%;
`;
const SSubTitle = styled.h2`
  margin-block-start: 0;
  margin-top: 8px;
  color: white;
  font-size: 30px;
`;
const SOption = styled.ul`
  padding-inline-start: 0;
  list-style: none;
`;
const SInput = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  font-weight: bold;
`;
const SError = styled.p`
  margin : 0px;
  color: red;
  font-weight: bold;
`;
const SButton = styled.button`
  display: inline-block;
  padding: 2px 4px;
  background: #00b3b3;
  text-align: center;
  border: 2px solid #00b3b3;
  border-radius: 10%;
  color: #ffffff;
  font-size: 12pt;
  cursor: pointer;
  transition: .3s;
  box-shadow: 6px 6px 6px #666666;
  :hover {
    background: #ffffff;
    color: #00b3b3;
    box-shadow: none;
  }
`;
const SMenuList = styled.ul`
  width: 665px;
  margin: 0px auto;
  padding-inline-start: 0;
  list-style: none;
`;
const SMenu = styled.p`
  text-align: left;
  color: white;
  font-size: 32px;
`;
const SEffect = styled.div`
  display:block;
`;
const SKcalList = styled.ul`
  width: 390px;
  margin: 0px auto;
  padding-inline-start: 0;
  text-align: center;
  list-style: none;
`;
const SKcal = styled.p`
  text-align: center;
  color: red;
  font-size: 32px;
`;