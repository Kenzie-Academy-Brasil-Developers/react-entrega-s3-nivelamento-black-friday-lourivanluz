import { useState } from "react";
import { CardPromo } from "../CardPromo";
import { Cart } from "../Cart";
import { ListaProdutos } from "../ListaProdutos";

export const Display = () => {
  const [product, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);

  const [carrinho, setCarrinho] = useState([]);

  const [produtoPromo, setProdutoPromo] = useState({});
  const [promo, setPromo] = useState(0);

  const sorteio = () => {
    const id = Math.floor(Math.random() * 6) + 1;
    const filtred = product.filter((item) => item.id === id);
    const promo = (Math.floor(Math.random() * (90 - 40 + 1)) + 40) / 100;
    setProdutoPromo(filtred[0]);
    setPromo(promo);
  };

  const total = carrinho.reduce((acc, item) => Number(item.price) + acc, 0);
  return (
    <div>
      <h1>Produtos</h1>
      <ListaProdutos
        list={product}
        setCarrinho={setCarrinho}
        carrinho={carrinho}
        compravel={true}
      />
      <button onClick={sorteio}>Gerar promoção</button>
      <CardPromo
        produtoPromo={produtoPromo}
        promo={promo}
        setCarrinho={setCarrinho}
        carrinho={carrinho}
      />
      <Cart list={carrinho} />

      <p>{`preço total: ${total}`}</p>
    </div>
  );
};
