import { useEffect, useState, useRef } from 'react';
import './Header.css';
import BasketModal from '../basket-modal/BasketModal';

interface BasketItem {
  id: number;
  title: string;
  description?: string;
  background?: string;
  color?: string;
}

interface Props {
  count: number;
  basket: BasketItem[];
  onDelete: (item: BasketItem) => void;
  clearList: () => void
}

export default function Header({ count, basket, onDelete, clearList }: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setTimeout(() => {
          setModalOpen(false);
        },100)
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, modalRef]);


  return (
    <div className="header">
      <div className="logo">
        <img src="/birthday_cake.png" alt=""/>
      </div>
      <button className="basket_button" onClick={()=> clearList()}>Очистить список</button>
      <div className="basket">
        <button className="basket_button" onClick={openModal}>
          {isModalOpen ? 'Закрыть' : 'Желания'}
        </button>
        {isModalOpen && (
          <div className="modal" ref={modalRef}>
            <BasketModal basket={basket} onDelete={onDelete} clearList={clearList}/>
          </div>
        )}
        <p className="basket_counter">{count}</p>
      </div>
    </div>
  );
}