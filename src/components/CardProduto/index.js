export const CardProduto = ({
  item,
  compravel = false,
  carrinho,
  setCarrinho,
}) => {
  const addCart = () => {
    setCarrinho([...carrinho, item]);
  };

  return (
    <>
      <span>{`${item.name}      `}</span>
      <div>
        <span>{item.price}</span>
        {compravel && <button onClick={addCart}>adicionar</button>}
      </div>
    </>
  );
};
