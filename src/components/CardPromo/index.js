import { DivStyled } from "./style";

export const CardPromo = ({
  produtoPromo: { id, name, price },
  promo,
  setCarrinho,
  carrinho,
}) => {
  const newPreco = (price - price * promo).toFixed(2);

  const addCart = () => {
    setCarrinho([...carrinho, { id: id, name: name, price: newPreco }]);
  };

  return (
    <div>
      {price && (
        <DivStyled>
          <span>{`Nome: ${name}`}</span>
          <span>{`Preço sem promo: ${price}`}</span>
          <span>{`Valor de desconto: ${Math.floor(promo * 100)}%`}</span>
          <span>{`Preço final:${newPreco}`}</span>
          <button onClick={addCart}>comprar</button>
        </DivStyled>
      )}
    </div>
  );
};
