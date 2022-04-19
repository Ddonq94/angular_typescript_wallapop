export interface IItem {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
}

export interface IItemData {
  items: IItem[];
}
