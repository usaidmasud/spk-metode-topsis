import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../utils/redux/slices/peopleSlice";
import { AppDispatch, RootState } from "../../../utils/redux/store";

const People: React.FC = () => {
  const dispatch:AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.people);
  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);
  
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="">
          <th scope="col">#</th>
          <th scope="col">Code</th>
          <th scope="col">Name</th>
        </thead>
        <tbody>
          {state.records.map((criteria, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{criteria.code}</td>
              <td>{criteria.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default People;
