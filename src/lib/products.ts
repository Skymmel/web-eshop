export interface Products {
    name: string;
    description: string;
    imgUrl: string;
    price: number;
}
export const products: Products[] = [
    {
        name: "Nintendo Entertainment System",
        description: "It is an 8-bit home video game console.",
        imgUrl: "https://i.pinimg.com/736x/76/7d/8e/767d8e41db431d07492c940225fd29b2.jpg",
        price: 3000,
    },
    {
        name: "Super NES",
        description: "It is an 8-bit home video game console.",
        imgUrl: "https://i.pinimg.com/736x/67/2f/76/672f76e3e874d2a2e5fc861ba9397e5d.jpg",
        price: 3000,
    },
    {
        name: "Casio  A158WA-1DF",
        description: "Retro digitální hodinky Casio.",
        imgUrl: "https://images.uzum.uz/cmjt761s99ouqbfr09og/original.jpg",
        price: 2000,
    }
]