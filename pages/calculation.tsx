import type { NextPage } from "next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Card, Loading, PageHeader } from "../components/atoms";
import { Layout } from "../components/templates";
import { numberFormat } from "../config/traits";
import { fetchCalculation } from "../utils/redux/slices/calculationSlice";
import { AppDispatch, RootState } from "../utils/redux/store";

const Calculation: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.calculation);
  React.useEffect(() => {
    dispatch(fetchCalculation());
  }, [dispatch]);
  return (
    <Layout>
      <PageHeader title="Calculation">
        <Card>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Code</th>
                <th>Name</th>
                <th>Value</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              {state.loading && <Loading colSpan={5} />}
              {state.getNiliaiPreferensi.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>{numberFormat(item.value)}</td>
                  <td>{item.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <div className="mt-4">
          <Card title="Proses Perhitungan" bordered>
            <Tabs>
              <TabList>
                <Tab>Normalisasi - R - </Tab>
                <Tab>Normalisasi - Y - </Tab>
                <Tab>Solusi Ideal </Tab>
                <Tab>Nilai Jarak </Tab>
              </TabList>
              <TabPanel>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Pembagi</th>
                        {state.pembagi.map((item, index) => (
                          <th key={index}>{numberFormat(item, 5)}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {state.normalisasiR.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          {item.value.map((val, indexVal) => (
                            <td key={indexVal}>{numberFormat(val, 5)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Pembagi</th>
                        {state.pembagi.map((item, index) => (
                          <th key={index}>{item}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {state.getNormalisasiY.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          {item.value.map((val, indexVal) => (
                            <td key={indexVal}>{numberFormat(val, 5)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>SOlusi Ideal +</td>
                        {state.getSolusiIdealPositif.map((item, index) => (
                          <td key={index}>{numberFormat(item, 5)}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>SOlusi Ideal -</td>
                        {state.getSolusiIdealPositif.map((item, index) => (
                          <td key={index}>{numberFormat(item, 5)}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>dPlus</th>
                        <th>dMin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.getJarak.map((item, index) => (
                        <tr key={index}>
                          <td>{++index}</td>
                          <td>{item.code}</td>
                          <td>{item.name}</td>
                          <td>{item.dPlus}</td>
                          <td>{item.dMin}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabPanel>
            </Tabs>
          </Card>
        </div>
      </PageHeader>
    </Layout>
  );
};

export default Calculation;
