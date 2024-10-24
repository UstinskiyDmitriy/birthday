import { useState } from 'react';
import s from './App.module.css'
import { BirthdayCard } from "./components/birthday-card/BirthDayCard";
import Header from './components/header/Header';
import { CONGRATS } from "./data/CONGRATS";
import Welcome from './components/welcome-card/Welcome';
import Footer from './components/footer/Footer';


interface BasketItem {
  id: number;
  title: string;
  description?: string;
  background?: string;
  color?: string;
}

function App() {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [disabledButtons, setDisabledButtons] = useState<number[]>([]);

  const handleAddToBasket = (item: BasketItem) => {
    if (!basket.includes(item)) {
      setBasket([...basket, item]);
      setDisabledButtons([...disabledButtons, item.id]);
    }
  };

  const clearList = () => {
    basket.length = 0;
    setDisabledButtons(disabledButtons.splice(0,-1));
  }

  const deleteFromBasket = (itemToDelete: BasketItem) => {
    setBasket(basket.filter(item => item.id !== itemToDelete.id));
    setDisabledButtons(disabledButtons.filter(id => id !== itemToDelete.id));
  };

  return (
    <div className={s.main}>
      <header>
        <Header 
        count={basket.length} 
        basket={basket}
        onDelete={deleteFromBasket}
        clearList={clearList}
        />
        </header>
      <section><Welcome/></section>
      <div className={s.card_container}>
        {CONGRATS.map((item) => (
          <BirthdayCard
            key={item.id}
            title={item.title}
            description={item.description}
            background={item.background}
            color={item.color}
            onAddToBasket={() => handleAddToBasket(item)}
            isDisabled={disabledButtons.includes(item.id)}
          />
        ))}
      </div>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;