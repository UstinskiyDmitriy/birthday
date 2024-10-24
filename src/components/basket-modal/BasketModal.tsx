import { useState } from 'react';
import s from './BasketModal.module.css'
import SubmitModal from '../submit-modal/SubmitModal';

type SubmitStage = null | 'processing' | 'completed';

interface BasketItem {
  id: number;
  title: string;
  description?: string;
  background?: string;
  color?: string;
}

interface Props {
  basket: BasketItem[];
  onDelete: (item: BasketItem) => void;
  clearList: () => void;
}

export default function BasketModal({basket, onDelete, clearList}:Props) {
  const [submitStage, setSubmitStage] = useState<SubmitStage>(null)
 
  const submitForm = () => {
    setSubmitStage('processing')
    clearList()

    setTimeout(() => {
      setSubmitStage('completed')

      setTimeout(() => {
        setSubmitStage(null)
      },3000)
    },3000)
  }

  return (
    <div className={s.main}>
      {basket.length === 0 && (<div style={{color:'#fff', fontSize:'1.3rem'}}>Желания пока не добавлены!</div>)}
      {basket.map((item) => (
        <div key={item.id}
        className={s.card_wrapper} 
        style={{background:`${item.background}`}}>
        <h2 style={{color:`${item.color}`}}>{item.title}</h2>
        <button className={s.delete_button} onClick={() => onDelete(item)}>Удалить</button>
      </div>
      ))}
      {basket.length !== 0 && (
        <button className={s.submit} onClick={submitForm}>Отправить во вселенную</button>
      )
      }
      {submitStage=== 'processing' && (
        <div>
          <SubmitModal message={'Твои желания в процессе обработки...'}/>
        </div>
      )}
      {submitStage === 'completed' && (
        <div>
        <SubmitModal message={'Твои желания начинают исполняться!'}/>
      </div>
      )}
      
    </div>
  )
}
