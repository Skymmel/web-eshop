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
        imgUrl: "https://media.wired.com/photos/5926a19ecfe0d93c47430e1a/master/pass/NES_SystemHP-1.jpg",
        price: 3000,
    },
    {
        name: "Super Nintendo Entertainment System",
        description: "It is an 8-bit home video game console.",
        imgUrl: "https://media.wired.com/photos/5926a19ecfe0d93c47430e1a/master/pass/NES_SystemHP-1.jpg",
        price: 3000,
    },
    {
        name: "Casio  A158WA-1DF",
        description: "Retro digitální hodinky Casio.",
        imgUrl: "https://images.uzum.uz/cmjt761s99ouqbfr09og/original.jpg",
        price: 2000,
    }
]