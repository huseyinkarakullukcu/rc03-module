import Buton from '../buton/Buton'
import CardStyle from './card.module.css'
//* module.css'de derleyici CSS class'larini alarak bunlari unique olacak
//* sekilde yeniden adlandirir. (Ornek: card_title__XaSde)
//* Bu durumda, global scope problemi ortadan kalktigi icin stillerin
//* baska class tarafindan ezilmesi (overriding) engellenir.
//* CCS module Webpack, Browsify gibi tool'lar ile kullanilabilir.
const Card = ({lang, img, btn})=>{
    return(
        <div>
            <h1 className={CardStyle.title}>{lang}</h1>
            <img src={img} className={CardStyle.images} alt="img" />
            <Buton btn={btn}/>
        </div>
    )
}
export default Card