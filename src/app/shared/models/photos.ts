import { Photo } from './photo'; 

export class Photos {
  page: number;
  pages: string;
  perpage: number;
  total: string;
  photo: Array<Photo>;
}