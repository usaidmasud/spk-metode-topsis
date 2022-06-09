import type { NextPage } from "next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, PageHeader, RenderBenefit, RenderButtonAction } from "../components/atoms";
import { Layout } from "../components/templates";
import { fetchCriteria } from "../utils/redux/slices/criteriaSlice";
import { AppDispatch, RootState } from "../utils/redux/store";

const Criteria: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.criteria);

  React.useEffect(() => {
    dispatch(fetchCriteria());
  }, [dispatch]);
  return (
    <Layout>
      <PageHeader title="Criteria">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {state.loading && <Loading colSpan={6} />}
              {state.records.map((criteria, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{criteria.code}</td>
                  <td>{criteria.name}</td>
                  <td>{criteria.value}</td>
                  <td><RenderBenefit type={criteria.type} /></td>
                  <td>
                    <RenderButtonAction />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageHeader>
    </Layout>
  );
};

export default Criteria;
