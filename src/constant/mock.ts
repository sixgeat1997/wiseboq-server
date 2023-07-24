export interface IProject {
  id: number;
  name: string;
  userId: string;
  categories: ICategories[];
}

export interface ICategories {
  id: number;
  projectId: string;
  name: string;
  list: IList[];
}

export interface IList {
  id: string;
  categoryId: string;
  itemName: string;
  cost: number;
  quantity: number;
  unit: string;
  price: number;
}
