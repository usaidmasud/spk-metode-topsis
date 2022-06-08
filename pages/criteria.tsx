import type { NextPage } from "next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <section className="p-8">
        <div className="table-responsive">
          <table className="table">
            <thead className="">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {state.records.map((criteria, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{criteria.code}</td>
                  <td>{criteria.name}</td>
                  <td>{criteria.value}</td>
                  <td>{criteria.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default Criteria;
