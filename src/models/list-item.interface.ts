export interface ListItem {
  id: string;
  taskNumber: string;
  name: string;
  description: string;
  status: 'TO_DO' | 'IN_PROGRESS' | 'DONE';
  priority: 'HIGH' | 'NORMAL' | 'MEDIUM' | 'LOW';
  percentageOfProgress: number;
  startDate: string;
  endDate: string;
  childTasks: ListItem[];
}
