import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import Sort from '../components/Sort';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({ name: 'Популярності', listValue: 'rating' });
  console.log(activeSort);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://65c5d28ee5b94dfca2e05af2.mockapi.io/items?${
        activeCategory > 0 ? `category=${activeCategory}` : ''
      }&sortBy=${activeSort.listValue}&order=desc`,
    )
      .then((res) => res.json())
      .then((pizzas) => {
        setItems(pizzas);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, activeSort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
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
    </div>
  );
}

export default Home;
