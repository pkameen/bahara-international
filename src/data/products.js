import cardamomImg from "../assets/spices/cardamom.jpg";
import pepperImg from "../assets/spices/pepper.jpg";
import cashewImg from "../assets/spices/cashew.jpg";
import barkImg from "../assets/spices/bark.jpg";
import cloveImg from "../assets/spices/clove.jpg";
import maceImg from "../assets/spices/mace.jpg";
import nutmegImg from "../assets/spices/nutmeg.jpg";
import starAniseImg from "../assets/spices/staranise.jpg";

/**
 * Bahara International - Central Product Catalog
 * 
 * Dynamic data structure supporting:
 * - image: Product photography asset
 * - name: Full product name
 * - category: Product classification
 * - grade: Export quality / grade designation
 * - origin: Geographic provenance
 * - description: Detailed export-grade product description & definition
 * - specifications: Key technical export specifications
 */
export const products = [
  {
    id: "green-cardamom",
    name: "Green Cardamom",
    category: "Whole Spices",
    grade: "Export Grade: AGEB (8mm+ Jumbo Bold)",
    origin: "Idukki, Kerala, India",
    description:
      "Carefully selected premium Kerala green cardamom from the Western Ghats. Characterized by intense natural aroma, uniform extra-bold pods, vibrant deep green color, and high essential oil content meeting rigorous international export standards.",
    image: cardamomImg,
    specifications: [
      { label: "Grade", value: "AGEB / 8mm+ Extra Bold" },
      { label: "Origin", value: "Kerala, India" },
      { label: "Moisture", value: "< 10% Standard" },
      { label: "Processing", value: "Machine Cleaned & Graded" },
    ],
  },
  {
    id: "premium-black-pepper",
    name: "Premium Black Pepper",
    category: "Whole Spices",
    grade: "Export Grade: TGEB (Tellicherry Extra Bold 550+ GL)",
    origin: "Malabar Coast, Kerala, India",
    description:
      "World-renowned export-grade Tellicherry and Malabar black pepper. Celebrated for high piperine pungency, rich essential oils, bold spherical berries, and strictly monitored moisture content conforming to international food safety benchmarks.",
    image: pepperImg,
    specifications: [
      { label: "Grade", value: "TGEB / TGSEB (550+ GL)" },
      { label: "Origin", value: "Kerala, India" },
      { label: "Moisture", value: "< 12% Max" },
      { label: "Processing", value: "Garbled, Sun-Dried & Cleaned" },
    ],
  },
  {
    id: "cinnamon-bark",
    name: "Cinnamon Bark",
    category: "Whole Spices",
    grade: "Export Grade: Clean Cut Rolled Quills / Bark",
    origin: "Kerala, India",
    description:
      "Premium selected Kerala cinnamon bark celebrated for its sweet-woody fragrance, delicate rolled quills, and rich natural cinnamaldehyde content. Thoroughly sun-cured and trimmed under strict hygiene controls for global culinary and essential oil extraction markets.",
    image: barkImg,
    specifications: [
      { label: "Grade", value: "Selected Rolled Bark" },
      { label: "Origin", value: "Kerala, India" },
      { label: "Moisture", value: "< 12% Max" },
      { label: "Volatile Oil", value: "Min 1.5% Essential Oil" },
    ],
  },
  {
    id: "cloves",
    name: "Cloves",
    category: "Whole Spices",
    grade: "Export Grade: Hand-Picked Clean (HPS / Lalpari)",
    origin: "Kerala, India",
    description:
      "Superior export-quality whole cloves harvested from Kerala's lush hills. Meticulously hand-sorted for intact crowns, rich reddish-brown tone, intense eugenol oil concentration, and a warm, penetrating aromatic flavor profile demanded by international buyers.",
    image: cloveImg,
    specifications: [
      { label: "Grade", value: "Hand Picked Selected (HPS)" },
      { label: "Origin", value: "Kerala, India" },
      { label: "Headless/Stem", value: "< 1% Strictly Sorted" },
      { label: "Moisture", value: "< 10% Standard" },
    ],
  },
  {
    id: "mace",
    name: "Mace",
    category: "Whole Spices",
    grade: "Export Grade: Golden Yellow Whole Flower (Grade 1)",
    origin: "Kerala, India",
    description:
      "Hand-harvested whole mace blades—the prized lace-like aril encasing the nutmeg seed. Gently cured under natural shade to preserve its vivid golden-orange hue, sophisticated warm fragrance, and delicate sweetness highly sought after by premium culinary industries.",
    image: maceImg,
    specifications: [
      { label: "Grade", value: "Whole Golden Blades (Grade 1)" },
      { label: "Origin", value: "Kerala, India" },
      { label: "Moisture", value: "< 8% Moisture" },
      { label: "Purity", value: "100% Unbroken Blades" },
    ],
  },
  {
    id: "nutmeg",
    name: "Nutmeg",
    category: "Whole Spices",
    grade: "Export Grade: ABCD Sound Wholes (With / Without Shell)",
    origin: "Kerala, India",
    description:
      "Premium whole nutmeg harvested from traditional spice gardens in Kerala. Recognized for dense, heavy oval kernels, rich aromatic volatile oils, and warm, nutty sweetness. Thoroughly sorted and tested to ensure zero mold and strict compliance with global export standards.",
    image: nutmegImg,
    specifications: [
      { label: "Grade", value: "ABCD Sound Wholes" },
      { label: "Origin", value: "Kerala, India" },
      { label: "Moisture", value: "< 10% Max" },
      { label: "Processing", value: "Sun-Cured & Machine Graded" },
    ],
  },
  {
    id: "star-anise",
    name: "Star Anise",
    category: "Whole Spices",
    grade: "Export Grade: Whole 8-Point Star (Autumn Harvest)",
    origin: "Kerala, India",
    description:
      "Select export-grade whole star anise featuring distinctive symmetrical eight-pointed star pods containing glossy, anise-rich seeds. Delivers a robust licorice-like aroma with natural sweetness, carefully machine-cleaned and graded for peak export excellence.",
    image: starAniseImg,
    specifications: [
      { label: "Grade", value: "8-Point Hand-Selected Wholes" },
      { label: "Origin", value: "Kerala, India" },
      { label: "Broken Pods", value: "< 3% Strict Limit" },
      { label: "Volatile Oil", value: "Min 8.0% Anethole Oil" },
    ],
  },
  {
    id: "premium-cashew",
    name: "Premium Cashew",
    category: "Kernels & Dry Fruits",
    grade: "Export Grade: W-180 / W-210 Jumbo Wholes",
    origin: "Kerala, India",
    description:
      "Supreme-grade whole cashew kernels, meticulously processed and steam-peeled under strict international hygiene controls. Featuring characteristic natural sweetness, ivory color, wholesome crunch, and zero chemical treatment.",
    image: cashewImg,
    specifications: [
      { label: "Grade", value: "W-180 / W-210 King Size" },
      { label: "Origin", value: "Kerala, India" },
      { label: "Packaging", value: "Vacuum-Flushed Flexible Pouches" },
      { label: "Quality", value: "100% Unbroken White Wholes" },
    ],
  },
];

export default products;
