import type { Category } from "@/types/catalog";

const categoryImage = (photoId: string) =>
    `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=85`;

export const categories: Category[] = [
    {
        id: "toran",
        name: "Toran",
        slug: "toran",
        image: categoryImage("photo-1490750967868-88aa4486c946"),
        imageAlt: "Flower garland arranged as a festive toran",
    },
    {
        id: "wall-hanging",
        name: "Wall Hanging",
        slug: "wall-hanging",
        image: categoryImage("photo-1579783902614-a3fb3927b6a5"),
        imageAlt: "Colorful decorative wall hanging in a home",
    },
    {
        id: "rangoli",
        name: "Rangoli",
        slug: "rangoli",
        image: categoryImage("photo-1603006905003-be475563bc59"),
        imageAlt: "Festive rangoli-inspired decoration with candlelight",
    },
    {
        id: "mats",
        name: "Mats",
        slug: "mats",
        image: categoryImage("photo-1600210492486-724fe5c67fb0"),
        imageAlt: "Woven mat arranged in a warm home interior",
    },
    {
        id: "candle-holders",
        name: "Candle holders",
        slug: "candle-holders",
        image: categoryImage("photo-1602874801007-bd458bb1b8b6"),
        imageAlt: "Decorative candle holders arranged on a tabletop",
    },
    {
        id: "table-runners",
        name: "Table runners",
        slug: "table-runners",
        image: categoryImage("photo-1603199506016-b9a594b593c0"),
        imageAlt: "Handmade table runner set for a festive meal",
    },
];