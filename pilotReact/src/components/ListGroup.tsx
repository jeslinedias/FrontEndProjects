import { useState } from "react";

interface Props {
  cities: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}

function ListGroup({ cities, heading, onSelectItem }: Props) {
  // const handleClick = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //let selectedIndex=1;
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
