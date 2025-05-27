import Button from "./Button";
import { btnList } from "../data/buttons";

const ButtonList = () => {
  return (
    <div className="flex">
      {
        btnList.map(btn => <Button name={btn}/>)
      }
      
    </div>
  )
}

export default ButtonList