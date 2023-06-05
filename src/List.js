import Item from "./components/Item";
import { data } from "./data";
import stylelist from "./list.module.css";

export default function List() {
  return (
    <>
      <h1 className={stylelist.title}>Items Listed for Sale</h1>
      <div className={stylelist.container}>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
