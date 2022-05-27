export type TCriteriaType = "benefit" | "cost";

export interface ICriteria {
  code: string;
  name: string;
  value: number;
  type: TCriteriaType;
}

export interface IPeople {
  code: string;
  name: string;
  value: number[];
}
