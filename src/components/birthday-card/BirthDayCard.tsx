// BirthdayCard.tsx
import { useState } from 'react';
import s from './BirthdayCard.module.css'

interface Props {
  title: string;
  description: string;
  background: string;
  color: string;
  onAddToBasket: () => void;
  isDisabled: boolean;
}

export function BirthdayCard({ title, description, background, color, onAddToBasket, isDisabled }: Props) {

  const [isLiked, setLike] = useState(false)

  const putLike = () => {
    setLike(!isLiked)
  }
  return (
    <div className={s.birthday_card} style={{ background: `${background}`, color: `${color}` }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        
      </div>
      <button className={isDisabled ? s.disabled_button : s.button} onClick={onAddToBasket} disabled={isDisabled}>
        {isDisabled ? 'Добавлено' : 'Добавить'}
      </button>
      <div id="likeIcon" onClick={putLike} className={s.like_wrapper}>
      <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6H9V9H12V6ZM15 6H12V9H15V6ZM9 9H6V12H9V9ZM9 
  12H6V15H9V12ZM9 15H6V18H9V15ZM18 6H15V9H18V6ZM12 
  18H9V21H12V18ZM15 21H12V24H15V21ZM18 24H15V27H18V24ZM27 
  6H30V9H27V6ZM24 6H27V9H24V6ZM30 9H33V12H30V9ZM30 
  12H33V15H30V12ZM30 15H33V18H30V15ZM21 6H24V9H21V6ZM27 
  18H30V21H27V18ZM24 21H27V24H24V21ZM21 24H24V27H21V24ZM21 
  27H18V30H21V27ZM21 9H18V12H21V9Z" fill="black"/>

    {isLiked && (<path d="M12 9H9V12H12V9ZM15 12H12V15H15V12ZM18 
  9H15V12H18V9ZM12 15H9V18H12V15ZM15 15H12V18H15V15ZM15 
  18H12V21H15V18ZM18 12H15V15H18V12ZM18 21H15V24H18V21ZM18 
  18H15V21H18V18ZM27 9H30V12H27V9ZM24 9H27V12H24V9ZM27 
  12H30V15H27V12ZM24 12H27V15H24V12ZM21 9H24V12H21V9ZM27 
  15H30V18H27V15ZM24 15H27V18H24V15ZM24 18H27V21H24V18ZM21 
  12H24V15H21V12ZM21 21H24V24H21V21ZM21 18H24V21H21V18ZM21 
  21H18V24H21V21ZM21 24H18V27H21V24Z" fill="#FF0000" />
  )}
  {isLiked && (
    <path d="M18 15H15V18H18V15ZM21 15H24V18H21V15ZM21 
    15H18V18H21V15ZM21 12H18V15H21V12ZM21 18H18V21H21V18Z" 
    fill="white"/>
  )}
  {isLiked && (
    <path d="M36 13H39V16H36V13ZM27 27H30V30H27V27ZM18 
    33H21V36H18V33ZM9 27H12V30H9V27ZM24 0H27V3H24V0ZM33 
    3H36V6H33V3ZM3 3H6V6H3V3ZM12 0H15V3H12V0ZM0 13H3V16H0V13Z" 
    fill="#FF0000"/>
  )}
</svg>
    </div>
    </div>
  );
}