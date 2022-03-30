import { useState, FC } from "react";
import { useCustomTraining } from "../hooks/useCustomTraining";
import { TrainingList } from "./TrainingList";

export const App: FC = () => {
    const [number, setNumber] = useState<number>();
    const { menus, Error, kcals, foods, hide, total, addMenu, completeMenu} = useCustomTraining();

    const onClickAdd = () => {
      addMenu(number);
    };

    const onClickComplete = () =>{
      completeMenu(number);
    }

    return (
      <TrainingList number = {number} setNumber = {setNumber} menus = {menus} Error = {Error} kcals = {kcals} foods = {foods} hide = {hide} total = {total} onClickAdd = {onClickAdd} onClickComplete = {onClickComplete}/> 
    );
};