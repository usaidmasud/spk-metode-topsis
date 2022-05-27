import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../utils/redux/slices/criteriaSlice";
import { AppDispatch, RootState } from "../../../utils/redux/store";

const Criteria: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.criteria);

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
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
  );
};

export default Criteria;
