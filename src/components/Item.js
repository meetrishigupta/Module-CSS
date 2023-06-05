import styleing from "./item.module.css";

export default function Item({ item }) {
  return (

      <div className={styleing.container}>
        <h3 className={styleing.title}>{item.title}</h3>
        <img src={item.image} alt={item.title} className={styleing.image} />
        <p>
          <strong className={styleing.price}>${item.price}</strong>
       </p>
        <p>{item.description}</p>
      </div>

  );
}
