interface OrderProps {
  closeHour: number;
}

export default function Order({ closeHour }: OrderProps) {
  return (
    <div className="order">
      <p className="order__text">
        We&apos;re open until {closeHour}:00. Come visit us or order online.
      </p>
      <button type="button" className="order__button">
        Order
      </button>
    </div>
  );
}
