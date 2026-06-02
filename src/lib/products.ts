import journal from "@/assets/p-journal.jpg";
import pen from "@/assets/p-pen.jpg";
import mug from "@/assets/p-mug.jpg";
import candle from "@/assets/p-candle.jpg";
import bottle from "@/assets/p-bottle.jpg";
import tote from "@/assets/p-tote.jpg";
import earbuds from "@/assets/p-earbuds.jpg";
import chocolate from "@/assets/p-chocolate.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  occasion: string[];
  price: number;
  image: string;
  badge?: string;
  recipient: string[];
  customizable: boolean;
};

export const products: Product[] = [
  { id: "leather-journal", name: "Embossed Leather Journal", category: "Office Essentials", occasion: ["Onboarding", "Milestones"], price: 1499, image: journal, badge: "Bestseller", recipient: ["Employees", "Executives"], customizable: true },
  { id: "gold-pen", name: "Signature Gold Pen Set", category: "Executive Gifting", occasion: ["Milestones", "Recognition"], price: 3499, image: pen, badge: "Premium", recipient: ["Executives", "Clients"], customizable: true },
  { id: "ceramic-mug", name: "Heritage Ceramic Mug", category: "Office Essentials", occasion: ["Onboarding", "Birthdays"], price: 699, image: mug, recipient: ["Employees"], customizable: true },
  { id: "scented-candle", name: "Champagne Soy Candle", category: "Wellness & Lifestyle", occasion: ["Diwali", "Wellness"], price: 1199, image: candle, badge: "HR Loved", recipient: ["Employees", "Clients"], customizable: false },
  { id: "gold-bottle", name: "Insulated Champagne Bottle", category: "Wellness & Lifestyle", occasion: ["Onboarding", "Wellness"], price: 1299, image: bottle, recipient: ["Employees"], customizable: true },
  { id: "leather-tote", name: "Tan Leather Tote", category: "Employee Kits", occasion: ["Onboarding", "Women's Day"], price: 2499, image: tote, badge: "New", recipient: ["Employees"], customizable: true },
  { id: "navy-earbuds", name: "Navy Wireless Earbuds Pro", category: "Executive Gifting", occasion: ["Milestones", "Tech"], price: 4499, image: earbuds, badge: "Premium", recipient: ["Executives"], customizable: false },
  { id: "chocolate-box", name: "Royal Chocolate Hamper", category: "Festive Gifts", occasion: ["Diwali", "Christmas", "New Year"], price: 1899, image: chocolate, badge: "Festive", recipient: ["Clients", "Employees"], customizable: true },
];

export const categories = [
  "Employee Kits",
  "Festive Gifts",
  "Executive Gifting",
  "Office Essentials",
  "Wellness & Lifestyle",
  "Training Programs",
];

export const occasions = ["Diwali", "Christmas", "Eid", "Women's Day", "Men's Day", "New Year", "Birthdays", "Milestones"];

export const budgetRanges = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1500", min: 500, max: 1500 },
  { label: "₹1500 - ₹3000", min: 1500, max: 3000 },
  { label: "₹3000 - ₹5000", min: 3000, max: 5000 },
  { label: "₹5000+", min: 5000, max: 999999 },
];

export const recipients = ["Employees", "Executives", "Clients", "Partners", "Interns"];

export function formatINR(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}
