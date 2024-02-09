function Categories({ activeCategory, setActiveCategory }) {
  const categories = ['Всі', "М'ясні", 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті'];

  return (
    <div className="categories">
      <ul>
        {categories.map((pizza, index) => (
          <li
            onClick={() => setActiveCategory(index)}
            className={activeCategory === index ? 'active' : ''}
            key={pizza}>
            {pizza}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
