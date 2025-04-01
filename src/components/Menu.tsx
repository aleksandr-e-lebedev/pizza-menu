import Pizza from './Pizza';
import { pizzaData } from '../../public/data';

export default function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2 className="menu__title">Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p className="menu__subtitle">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="menu__pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p className="menu__subtitle">
          We&apos;re still working on our menu. Please come back later :)
        </p>
      )}
    </main>
  );
}
