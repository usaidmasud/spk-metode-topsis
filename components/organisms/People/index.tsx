import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCriteria } from "../../../utils/redux/slices/criteriaSlice";
import { fetchPeople } from "../../../utils/redux/slices/peopleSlice";
import { AppDispatch, RootState } from "../../../utils/redux/store";

const People: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const statePeople = useSelector((state: RootState) => state.people);
  const stateCriteria = useSelector((state: RootState) => state.criteria);
  useEffect(() => {
    dispatch(fetchPeople());
    dispatch(fetchCriteria());
  }, [dispatch]);

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th rowSpan={2} scope="col">
              #
            </th>
            <th rowSpan={2} scope="col">
              Code
            </th>
            <th rowSpan={2} scope="col">
              Name
            </th>
            <th colSpan={stateCriteria.records.length} scope="col">Value</th>
          </tr>
          <tr>
            {stateCriteria.records.map((criteria, index) => (
              <th key={index} scope="col">
                {criteria.code}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {statePeople.records.map((people, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{people.code}</td>
              <td>{people.name}</td>
              {people.value.map((value, index) => (
                <td key={index}>{value.value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default People;
