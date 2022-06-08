import { NextPage } from "next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-semibold text-gray-700">
          Alternatif Pilihan
        </h1>

        {/*  START: Table */}
        <div className="relative overflow-x-auto shadow-sm ">
          <table className="table-auto w-full">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
              <tr className="text-center">
                <th rowSpan={2} scope="col" className="px-4 py-2">
                  No
                </th>
                <th rowSpan={2} scope="col" className="px-4 py-2">
                  Alternatif
                </th>
                <th rowSpan={2} scope="col" className="px-4 py-2">
                  Project
                </th>
                <th colSpan={5} className="px-4 py-2">
                  Value
                </th>
                <th rowSpan={2} scope="col" className="px-4 py-2">
                  Aksi
                </th>
              </tr>
              <tr>
                {
                  stateCriteria.records.map((criteria, index) => (
                    <th key={index} className="px-4 py-2">
                      {criteria.code}
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {stateAlternatif.records.map((alternatif, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{alternatif.name}</td>
                  <td className="border px-4 py-2">
                    {alternatif.project.name}
                  </td>
                  {alternatif.values.map((criteria, index2) => (
                    <td key={index2} className="border px-4 py-2">
                      {criteria.value}
                    </td>
                  ))}
                  <td className="border px-4 py-2">
                    <div className="flex gap-1">
                      <button className="bg-green-600 text-sm bg-opacity-80 hover:bg-opacity-100 text-white py-1 px-2 rounded">
                        Edit
                      </button>
                      <button className="bg-red-600 text-sm bg-opacity-80 hover:bg-opacity-100 text-white py-1 px-2 rounded">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*  END: Table */}
      </div>
    </Layout>
  );
};

export default Alternatif;
