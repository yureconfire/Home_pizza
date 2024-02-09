import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import Sort from '../components/Sort';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://65c5d28ee5b94dfca2e05af2.mockapi.io/items')
      .then((res) => res.json())
      .then((pizzas) => {
        setItems(pizzas);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {' '}
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, i) => <PizzaBlockSkeleton key={i} />)
          : items.map((item) => (
              <PizzaBlock
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.imageUrl}
                sizes={item.sizes}
                types={item.types}
              />
            ))}
      </div>
    </>
  );
}

export default Home;
