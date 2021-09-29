import { DivStyled } from "./style";

export const CardPromo = ({
  produtoPromo: { id, name, price },
  setCarrinho,
  carrinho,
}) => {
  const desconto = (Math.floor(Math.random() * (90 - 40 + 1)) + 40) / 100;
  const newPreco = price - (price * desconto).toFixed(2);

  const addCart = () => {
    setCarrinho([...carrinho, { id: id, name: name, price: newPreco }]);
  };

  return (
    <div>
      {price && (
        <DivStyled>
          <span>{`Nome: ${name}`}</span>
          <span>{`Preço sem promo: ${price}`}</span>
          <span>{`Valor de desconto: ${Math.floor(desconto * 100)}%`}</span>
          <span>{`Preço final:${newPreco}`}</span>
          <button onClick={addCart}>comprar</button>
        </DivStyled>
      )}
    </div>
  );
};
