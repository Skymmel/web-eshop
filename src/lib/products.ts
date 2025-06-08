export interface Products {
    name: string;
    description: string;
    imgUrl: string;
    price: number;
}
export const products: Products[] = [
    {
        name: "Nintendo Entertainment System",
        description: "8-bitová domací herní konzole od Nintendo.",
        imgUrl: "https://i.pinimg.com/736x/76/7d/8e/767d8e41db431d07492c940225fd29b2.jpg",
        price: 3000,
    },
    {
        name: "Super NES",
        description: "16-bitová domací herní konzole od Nintendo.",
        imgUrl: "https://i.pinimg.com/736x/67/2f/76/672f76e3e874d2a2e5fc861ba9397e5d.jpg",
        price: 3000,
    },
    {
        name: "Game Boy OLED",
        description: "Game Boy Color OLED Q10 Backlight Kit s Touch Screenem",
        imgUrl: "https://i.pinimg.com/736x/48/51/9a/48519aacabc82e172917c7f9aaac84c6.jpg",
        price: 1500,
    },
    {
        name: "R36 Plus Wifi",
        description: "Autentický zážitek z retro her v moderním provedení",
        imgUrl: "https://cdn.myshoptet.com/usr/www.konzoliste.cz/user/shop/big/110735-2_retro-handheld-konzole-r36-plus-wifi-bila.jpg?6834360d",
        price: 2000,
    },
    {
        name: " GPO Retro Cassette Walkman ",
        description: "Kazetový přehrávač - walkman, retro design, FM rádio.",
        imgUrl: "https://image.alza.cz/products/GPOw01/GPOw01.jpg",
        price: 2000,
    },
    {
        name: "Casio  A158WA-1DF",
        description: "Retro digitální hodinky Casio.",
        imgUrl: "https://images.uzum.uz/cmjt761s99ouqbfr09og/original.jpg",
        price: 2000,
    },
]