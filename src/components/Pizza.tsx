interface PizzaProps {
  pizzaObj: {
    name: string;
    ingredients: string;
    photoName: string;
    price: number;
    soldOut: boolean;
  };
}

export default function Pizza(props: PizzaProps) {
  const { pizzaObj } = props;
  const { name, ingredients, photoName, price, soldOut } = pizzaObj;

  return (
    <li className={`pizza ${soldOut ? 'pizza_sold-out' : ''}`}>
      <img className="pizza__image" src={photoName} alt={name} />
      <div className="pizza__content">
        <h3 className="pizza__title">{name}</h3>
        <p className="pizza__description">{ingredients}</p>
        <span className="pizza__price">{soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </li>
  );
}
