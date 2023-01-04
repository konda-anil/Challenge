import { Employee } from '../../features';

export enum TableActionType {
  Edit = 'Edit',
  ModalEdit = 'Modal Edit',
}


export interface TableProps {
  header: TableHeader[],
  data: TableData[],
  actionHandler?: (row: TableData, actionType: TableActionType) => void;
}

export interface TableHeader {
  name: string;
  propName: (TableDataKey | TableActionType),
}

export type TableData = Employee // Add more data types using union type
export type TableDataKey = keyof Employee // add more key types using union type