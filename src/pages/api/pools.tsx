const pools = [
  {
    slug: "pool-de-compras-1",
    title: "Pool de Compras 1",
    description: "Descrição do Pool",
    department: "bebidas",
    category: "bebidas-alcoolicas",
    subcategory: "cerveja",
  },
  {
    slug: "pool-de-compras-2",
    title: "Pool de Compras 2",
    description: "Descrição do Pool",
    department: "bebidas",
    category: "bebidas-alcoolicas",
    subcategory: "cerveja",
  },
  {
    slug: "pool-de-compras-3",
    title: "Pool de Compras 3",
    description: "Descrição do Pool",
    department: "bebidas",
    category: "bebidas-alcoolicas",
    subcategory: "cerveja",
  },
  {
    slug: "pool-de-compras-4",
    title: "Pool de Compras 4",
    description: "Descrição do Pool",
    department: "bebidas",
    category: "bebidas-alcoolicas",
    subcategory: "cerveja",
  },
  {
    slug: "pool-de-compras-5",
    title: "Pool de Compras 5",
    description: "Descrição do Pool",
    department: "bebidas",
    category: "bebidas-alcoolicas",
    subcategory: "cerveja",
  },
];

export default function handler(req, res) {
  res.status(200).json(pools);
}
