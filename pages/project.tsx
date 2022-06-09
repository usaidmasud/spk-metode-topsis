import { NextPage } from "next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, PageHeader, RenderButtonAction, RenderStatus } from "../components/atoms";
import { Layout } from "../components/templates";
import { fetchProject } from "../utils/redux/slices/projectSlice";
import { AppDispatch, RootState } from "../utils/redux/store";

const Project: NextPage = () => {
  const state = useSelector((state: RootState) => state.project);
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  return (
    <Layout>
      <PageHeader title="Project">
        {/*  START: Table */}
        <div className="table-responsive ">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {state.loading && <Loading colSpan={4} />}
              {state.records.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td><RenderStatus value={!item.status} /></td>
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

export default Project;
