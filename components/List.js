import uuid from "react-uuid";


const List = ({ coins }) => {

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  


  return (
    <>
      {coins.map((coin) => {
        const { id, name, market_cap, image,current_price,price_change_percentage_24h} = coin;
        return (
          <article key={uuid()} className='person' id={id.value}>
            <img src={image} alt={name} />
            <div>
              <h4>{name} {name.last}</h4>
              <p>price {formatter.format(current_price)} </p>
              <p style={{color: Math.sign(price_change_percentage_24h) === -1 ? "red" : "green"}}> change {Number(price_change_percentage_24h).toFixed(2)}{"%"} </p>
              <p> market Cap {formatter.format(market_cap)} </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;