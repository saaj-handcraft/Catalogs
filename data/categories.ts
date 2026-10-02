import type { Category } from "@/types/catalog";
import diyaImage from "../images/Products/Diyas/Diyas.png";
import toranImage from "../images/Products/Toran/Toran.png";
import wallHangingImage from "../images/Products/WallHanger/WallHanger.png";
import TableRunnerImage from "../images/Products/TableRunner/TableRunner.png";
import RangoliImage from "../images/Products/Rangoli/Rangoli.png";
import MatsImage from "../images/Products/Mats/Mats.png";


const categoryImage = (photoId: string) =>
    `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=85`;

export const categories: Category[] = [
    {
        id: "toran",
        name: "Toran",
        slug: "toran",
        image: toranImage,
        imageAlt: "Flower garland arranged as a festive toran",
    },
    {
        id: "wall-hanging",
        name: "Wall Hanging",
        slug: "wall-hanging",
        image: wallHangingImage,
        imageAlt: "Colorful decorative wall hanging in a home",
    },
    {
        id: "rangoli",
        name: "Rangoli",
        slug: "rangoli",
        image: RangoliImage,
        imageAlt: "Festive rangoli-inspired decoration with candlelight",
    },
    {
        id: "mats",
        name: "Mats",
        slug: "mats",
        image: MatsImage,
        imageAlt: "Woven mat arranged in a warm home interior",
    },
    {
        id: "candle-holders",
        name: "Candle holders",
        slug: "candle-holders",
        image: diyaImage,
        imageAlt: "Decorative candle holders arranged on a tabletop",
    },
    {
        id: "table-runners",
        name: "Table runners",
        slug: "table-runners",
        image: TableRunnerImage,
        imageAlt: "Handmade table runner set for a festive meal",
    },
];