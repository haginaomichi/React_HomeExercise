import { useState, FC } from "react";
import { PTrainingList } from "./PTrainingList";
import { STrainingList } from "./STrainingList";
import { useCustomTraining } from "../hooks/useCustomTraining";
import MediaQuery from "react-responsive";

export const App: FC = () => {
    const [number, setNumber] = useState<number>();
    const { menus, Error, kcals, foods, hide, total, addMenu, completeMenu} = useCustomTraining();

    const onClickAdd = () => {
      addMenu(number);
    };
    const onClickComplete = () =>{
      completeMenu(number);
    };

    return (
      <div>
        <MediaQuery query="(min-width: 767px)">
          <PTrainingList number = {number} setNumber = {setNumber} menus = {menus} Error = {Error} kcals = {kcals} foods = {foods} hide = {hide} total = {total} onClickAdd = {onClickAdd} onClickComplete = {onClickComplete}/> 
        </MediaQuery>
        <MediaQuery query="(max-width: 767px)">
          <STrainingList number = {number} setNumber = {setNumber} menus = {menus} Error = {Error} kcals = {kcals} foods = {foods} hide = {hide} total = {total} onClickAdd = {onClickAdd} onClickComplete = {onClickComplete}/>
        </MediaQuery>
      </div>
    );
};