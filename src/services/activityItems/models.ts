import { Tag } from "../tag/models";
export interface ActivityItem {
  id: string;
  title: string;
  body: string;
  hour: number;
  minutes: number;
  createdAt: Date;
  updatedAt: Date;
  tags?: Tag[];
}
