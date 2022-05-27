export type TCriteriaType = "benefit" | "cost";

export interface ICriteria {
  code: string;
  name: string;
  value: number;
  type: TCriteriaType;
}

interface IPeopleValue {
  codeCriteria: string;
  value: number;
}
export interface IPeople {
  code: string;
  name: string;
  value: IPeopleValue[]
}
