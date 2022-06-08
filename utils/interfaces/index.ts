export type TCriteriaType = "benefit" | "cost";

export interface ICriteria {
  code: string;
  name: string;
  value: number;
  type: TCriteriaType;
}

export interface IProject {
  id: number;
  name: string;
  date: Date;
  status: boolean;
}
interface IAlternatifValue {
  alternatif_id: string;
  criteria_id: string;
  value: number;
}

export interface IAlternatif {
  id: number;
  code: string;
  name: string;
  project_id: number;
  project: IProject;
  values: IAlternatifValue[]
}
