import { NextPage } from "next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, PageHeader, RenderButtonAction } from "../components/atoms";
import { Layout } from "../components/templates";
import { fetchAlternatif } from "../utils/redux/slices/alternatifSlice";
import { fetchCriteria } from "../utils/redux/slices/criteriaSlice";
import { AppDispatch, RootState } from "../utils/redux/store";

const Alternatif: NextPage = () => {
  const stateAlternatif = useSelector((state: RootState) => state.alternatif);
  const stateCriteria = useSelector((state: RootState) => state.criteria);
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAlternatif());
    dispatch(fetchCriteria());
  }, [dispatch]);

  return (
    <Layout>
      <PageHeader title="Alternatif">
        {/*  START: Table */}
        <div className="table-responsive ">
          <table className="table">
            <thead>
              <tr>
                <th rowSpan={2} scope="col">
                  No
                </th>
                <th rowSpan={2} scope="col">
                  Alternatif
                </th>
                <th rowSpan={2} scope="col">
                  Project
                </th>
                <th colSpan={5}>Value</th>
                <th rowSpan={2} scope="col">
                  Aksi
                </th>
              </tr>
              <tr>
                {stateCriteria.records.map((criteria, index) => (
                  <th key={index} className="px-4 py-2">
                    {criteria.code}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stateAlternatif.loading && <Loading colSpan={9} />}
              {stateAlternatif.records.map((alternatif, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{alternatif.name}</td>
                  <td>{alternatif.project.name}</td>
                  {alternatif.values.map((criteria, index2) => (
                    <td key={index2}>{criteria.value}</td>
                  ))}
                  <td>
                    <RenderButtonAction />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*  END: Table */}
      </PageHeader>
    </Layout>
  );
};

export default Alternatif;
