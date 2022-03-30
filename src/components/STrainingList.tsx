export const STrainingList = () => {
    return(
        <p>スマホバージョン</p>
    );
}


// import { ChangeEvent } from 'react';
// import { FC } from 'react';
// import styled from 'styled-components';

// type Props = {
//     number: number | undefined;
//     setNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
//     menus: string[];
//     Error: string;
//     kcals: string[];
//     foods: string[];
//     hide: string;
//     total: string;
//     onClickAdd: () => void;
//     onClickComplete: () => void;
// };

// export const STrainingList: FC<Props> = props => {
//     const { number, setNumber, menus, Error, kcals, foods, hide, total, onClickAdd, onClickComplete } = props;
//     const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => setNumber(e.target.valueAsNumber);

//     return (
//         <SContainer>
    
//           <SHeader>
//             <STitle>Home Exercise</STitle>
//           </SHeader>
    
//           <SBody>
//             <SLeftBody>
//               <SSubTitle>【Choise Menu】</SSubTitle>
//               <h2>- Men -</h2>
//               <SOption>
//                 <li>1. ハードワーク</li>
//                 <li>2. ミドルワーク</li>
//                 <li>3. ライトワーク</li>
//               </SOption>
//               <h2>- Women -</h2>
//               <SOption>
//                 <li>4. ハードワーク</li>
//                 <li>5. ミドルワーク</li>
//                 <li>6. ライトワーク</li>
//               </SOption>
//               <SInput>
//                 <label>Training No.
//                 <input type = "number" name = "number" value = {number} onChange = {onChangeNumber} /></label>
//                 {Error && <SError>{Error}</SError>}<br></br>
//               </SInput>
//               <SButton onClick = {onClickAdd}>OK</SButton>
//             </SLeftBody>
    
//             <SRightBody>
//               <SSubTitle>【Today's Exercise】</SSubTitle>
//               <SMenuList>
//                 {menus.map((menu, index) => (
//                   <li key = {menu}>
//                     <SMenu>{index + 1}.{menu}</SMenu>
//                   </li>
//                 ))}
//               </SMenuList>
//               {!Error && !hide && <SButton onClick = {onClickComplete}>COMPLETE!</SButton>}
//             </SRightBody>
//           </SBody>
    
//           <SBottomBody>
//             <SSubTitle>【Exercise Effect】</SSubTitle>
//             <SEffect>
//               <SKcalList>
//                 {total && <li>合計{total}消費!!</li>}
//                 {kcals.map((kcal, index) => (
//                   <li key = {kcal}>
//                     <SKcal>{index + 1}.{kcal}</SKcal>
//                   </li>
//                 ))}
//               </SKcalList>
//               <SKcalList>
//                 {foods.map((food, index) => (
//                   <li key = {food}>
//                     <SKcal>★{food}</SKcal>
//                   </li>
//                 ))}
//               </SKcalList>
//             </SEffect>
//           </SBottomBody>
//         </SContainer>
//       );
// };

// const SContainer = styled.div`
//   background-image: url(${process.env.PUBLIC_URL}/image_1.jpg);
//   background-size: cover;
//   text-align: center;
//   padding-bottom: 40px;
// `;
// const SHeader = styled.div`
//   margin-bottom: 10px;
// `;
// const STitle = styled.h1`
//   color: black;
//   font-size: 48px;
//   margin-block-start: 0em;
//   margin-block-end: 0em;
//   padding: 20px 0px;
// `;
// const SBody = styled.div`
//   display: flex;
//   justify-content: center;
// `;
// const SLeftBody = styled.div`
//   border: solid 3px #00b3b3;
//   width: 365px;
//   margin-bottom: 20px;
//   margin-right: 10px;
//   border-radius: 5%;
// `;
// const SRightBody = styled.div`
//   width: 715px;
//   text-align: center;
//   border: solid 3px #00b3b3;
//   margin-bottom: 20px;
//   margin-left: 10px;
//   border-radius: 3%;
// `;
// const SBottomBody = styled.div`
//   border: solid 3px #00b3b3;
//   height: 350px;
//   width: 1100px;
//   margin: 0px auto;
//   border-radius: 2%;
// `;
// const SSubTitle = styled.h2`
//   color: white;
//   font-size: 30px;
//   margin-block-start: 0;
//   margin-top: 8px;
// `;
// const SOption = styled.ul`
//   list-style: none;
//   padding-inline-start: 0;
// `;
// const SInput = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 20px 0;
//   font-weight: bold;
// `;
// const SError = styled.p`
//   margin : 0;
//   color: red;
//   font-weight: bold;
// `;
// const SButton = styled.button`
// display: inline-block;
// border-radius: 10%;          
// font-size: 12pt;   
// text-align: center;      
// cursor: pointer;     
// padding: 2px 4px; 
// background: #00b3b3;     
// color: #ffffff;     
// line-height: 1em;        
// transition: .3s;         
// box-shadow: 6px 6px 6px #666666;  
// border: 2px solid #00b3b3;    
// :hover {
//   box-shadow: none;        
//   color: #00b3b3;    
//   background: #ffffff;     
// }
// `;
// const SMenuList = styled.ul`
//   width: 665px;
//   list-style: none;
//   padding-inline-start: 0;
//   margin: 0 auto;
// `;
// const SMenu = styled.p`
//   color: white;
//   font-size: 32px;
//   text-align: left;
// `;
// const SEffect = styled.div`
//   display:flex;
// `;
// const SKcalList = styled.ul`
//   width: 550px;
//   list-style: none;
//   padding-inline-start: 0;
//   margin: 0 auto;
//   text-align: center;
// `;
// const SKcal = styled.p`
//   color: red;
//   font-size: 32px;
//   text-align: center;
// `;