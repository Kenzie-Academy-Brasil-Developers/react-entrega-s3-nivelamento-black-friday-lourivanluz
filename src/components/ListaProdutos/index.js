import { CardProduto } from "../CardProduto";
import { UlStyled } from "./style";
export const ListaProdutos = ({ list, setCarrinho, carrinho, compravel }) => {
  return (
    <UlStyled>
      {list.map((item, index) => (
        <li key={index}>
          <CardProduto
            item={item}
            setCarrinho={setCarrinho}
            carrinho={carrinho}
            compravel={compravel}
          />
        </li>
      ))}
    </UlStyled>
  );
};
