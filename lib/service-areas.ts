export interface ServiceCounty {
  name: string;
  description: string;
  cities: string[];
}

/** Cities we remodel in — grouped by county for the Areas We Serve page. */
export const SERVICE_COUNTIES: ServiceCounty[] = [
  {
    name: "Salt Lake County",
    description:
      "Kitchen, bathroom, and basement remodels across the Salt Lake Valley — from established neighborhoods to newer communities along the south end.",
    cities: [
      "Salt Lake City",
      "Sandy",
      "Draper",
      "South Jordan",
      "West Jordan",
      "Riverton",
      "Herriman",
      "Bluffdale",
      "Murray",
      "Midvale",
      "Holladay",
      "Millcreek",
      "Cottonwood Heights",
      "Taylorsville",
      "West Valley City",
    ],
  },
  {
    name: "Utah County",
    description:
      "We work throughout Utah County, helping homeowners update kitchens and baths, finish basements, and install fireplaces from Lehi to Spanish Fork.",
    cities: [
      "Lehi",
      "American Fork",
      "Pleasant Grove",
      "Lindon",
      "Orem",
      "Provo",
      "Spanish Fork",
      "Springville",
      "Mapleton",
      "Payson",
      "Saratoga Springs",
      "Eagle Mountain",
      "Highland",
      "Alpine",
      "Cedar Hills",
      "Vineyard",
    ],
  },
  {
    name: "Wasatch County",
    description:
      "Remodels and fireplace installs for homes in the Heber Valley — clear estimates, quality craftsmanship, and a timeline you can count on.",
    cities: [
      "Heber City",
      "Midway",
      "Park City",
      "Charleston",
      "Daniel",
      "Hideout",
    ],
  },
];

/** Flat list of all service cities for schema and short mentions. */
export const SERVICE_CITIES = SERVICE_COUNTIES.flatMap(
  (county) => county.cities,
);
