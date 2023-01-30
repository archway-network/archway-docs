import { HeaderItem, TableRow } from '@/types';

class TableData {
  constructor(public header: HeaderItem[], public rows: TableRow[]) {}

  static make(attributes: { header: HeaderItem[]; rows: TableRow[] }) {
    return new TableData(attributes?.header || [{}], attributes?.rows || [{}]);
  }
}

export default TableData;
