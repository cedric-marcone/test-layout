export type Merchant = {
  id: number;
  code: string;
  name: string;
  slug: string;
  image?: string; // Pour esf : image est la composition du nom du resort + le logo svg => Générateur de logo esf en svg ?
  location?: [number, number]; // si aucun marchand n'a de location, désactiver la map dans le layout
  taxonomy?: Record<string, number | string | Array<number>>;
};

export type Dictionary = {
  name?: string;
  values: Array<{ code: number | string; name: string }>;
};

export type Dictionaries = Record<string, Dictionary>;

export type Data = {
  merchants: Merchant[];
  dictionary: Dictionaries;
};

/*
- taxonomy : 
  category?: string; // Ecole de ski / Hébergements / Activités / Forfaits remontées mécaniques / Location de matériel
  category2?: string; // Lister les variantes par categorie1
  category3?: string; // Lister les variantes par categorie1 / categorie2
  category4?: string; // Lister les variantes par categorie1 / categorie2 / categorie3
*/
