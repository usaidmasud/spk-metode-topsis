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
  values: IAlternatifValue[];
}

export interface ICalculation {
  data: IDatum[];
  criteria: ICriteria[];
  pembagi: number[];
  normalisasiR: IGetNormalisasiY[];
  getNormalisasiY: IGetNormalisasiY[];
  getSolusiIdealPositif: number[];
  getSolusiIdealNegatif: number[];
  getJarak: IGetJarak[];
  getNiliaiPreferensi: IGetNiliaiPreferensi[];
}

export interface IDatum {
  id: number;
  code: string;
  name: string;
  value: { [key: string]: string };
}

export interface IGetJarak {
  id: number;
  code: string;
  name: string;
  dPlus: number;
  dMin: number;
}

export interface IGetNiliaiPreferensi {
  code: string;
  name: string;
  value: number;
  rank: number;
}

export interface IGetNormalisasiY {
  id: number;
  code: string;
  name: string;
  value: number[];
}
