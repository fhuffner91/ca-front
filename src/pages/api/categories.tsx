const categories = [
  {
    slug: "categoria-1",
    title: "Categoria 1",
    description: "Descrição da Categoria",
  },
  {
    slug: "categoria-2",
    title: "Categoria 2",
    description: "Descrição da Categoria",
  },
  {
    slug: "categoria-3",
    title: "Categoria 3",
    description: "Descrição da Categoria",
  },
];

export default function handler(req, res) {
  res.status(200).json(categories);
}
