import { useEffect, useState } from "react";
import { CardPromo } from "../CardPromo";
import { Cart } from "../Cart";
import { ListaProdutos } from "../ListaProdutos";

export const Display = () => {
  const [product, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 100 },
    { id: 2, name: "PlayStation 5", price: 100 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 100 },
    { id: 4, name: "Headset s fio Logitech G935", price: 100 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 100 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 100 },
  ]);

  const [carrinho, setCarrinho] = useState([]);

  const [id, setId] = useState("");
  const [produtoPromo, setProdutoPromo] = useState({});

  useEffect(() => {
    if (id) {
      const filtred = product.filter((item) => item.id === id);
      setProdutoPromo(filtred[0]);
    }
  }, [id]);

  const sorteio = () => {
    const numero = Math.floor(Math.random() * (6 + 1));
    setId(numero);
  };

  const total = carrinho.reduce((acc, item) => item.price + acc, 0);
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
        setCarrinho={setCarrinho}
        carrinho={carrinho}
      />
      <Cart list={carrinho} />

      <p>{`preço total: ${total}`}</p>
    </div>
  );
};
