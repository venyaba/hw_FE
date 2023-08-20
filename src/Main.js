import { menuBtns } from "./utils";
import ButtonUi from "./ButtonUi";


function Main(){
    return <div>{menuBtns.map(button=>(
    <ButtonUi key={button.id}
     title={button.title}
      onClick={button}
       render={button.render} 
       visible={button.visible}/>
    ))}</div>
}

export default Main;