export default {
    APP_TITLE: "Clube Atacadão",
    APP_DESCRIPTION: "Descrição do APP",
    APP_LOGO: "/vercel.svg",
    GTM_API_KEY: "",
    ANALYTICS_API_KEY: "",
    MENU: [
        { title: "Página Inicial", path: "/" },
        { title: "Categoria 1", path: "/categoria-1" },
        { title: "Pool 1", path: "/categoria-1/pool-de-compras-1" },
        { title: "Minha Conta", path: "/minha-conta" },
        { title: "Termos de Uso", path: "/termos-de-uso" },
        { title: "Finalizar Compra", path: "/finalizar-compra" },
        { title: "Contato", path: "/contato" }
    ],
    CATEGORIES: [
        { slug: 'categoria-1', title: "Categoria 1", description: "Descrição da Categoria" },
        { slug: 'categoria-2', title: "Categoria 2", description: "Descrição da Categoria" },
        { slug: 'categoria-3', title: "Categoria 3", description: "Descrição da Categoria" },
    ],
    POOLS: [
        { slug: 'pool-de-compras-1', title: "Pool de Compras 1", description: "Descrição do Pool", category: "categoria-1" },
        { slug: 'pool-de-compras-2', title: "Pool de Compras 2", description: "Descrição do Pool", category: "categoria-1" },
        { slug: 'pool-de-compras-3', title: "Pool de Compras 3", description: "Descrição do Pool", category: "categoria-1" },
        { slug: 'pool-de-compras-4', title: "Pool de Compras 4", description: "Descrição do Pool", category: "categoria-1" },
        { slug: 'pool-de-compras-5', title: "Pool de Compras 5", description: "Descrição do Pool", category: "categoria-1" },
    ]
};