import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { getAllOpportunities } from "../utils";

const useFetchOpportunities = (customerId) => {
  const [opportunities, setOpportunities] = useState([]);
  useEffect(() => {
    getAllOpportunities(customerId).then((res) => {
      console.log("res", res);
      setOpportunities(res);
    });
  }, [customerId]);

  const handleAddOpportunity = (newOp) => {
    setOpportunities((pre) => {
      return [...pre, newOp];
    });
  };
  const handleUpdateOpportunity = (newOp) => {
    setOpportunities((pre) => {
      return pre.map((opportunity) => {
        if (opportunity.id === newOp.id) {
          return newOp;
        }
        return opportunity;
      });
    });
  };
  return { opportunities, handleUpdateOpportunity, handleAddOpportunity };
};

const Opportunities = ({ customer }) => {
  const { opportunities, handleUpdateOpportunity, handleAddOpportunity } =
    useFetchOpportunities(customer.id);
  const columns = [
    {
      title: "Opportunity Name",
      dataIndex: "name",
    },

    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  return (
    <div style={{ marginTop: 30 }}>
      <Table
        style={{ width: "60vw" }}
        rowKey={(record) => record.id}
        dataSource={opportunities}
        columns={columns}
      />
    </div>
  );
};

export default Opportunities;
