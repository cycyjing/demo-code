import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getAllCustomers, patchStatusChange } from "../utils";
import CustomerFilterModel from "../components/CustomerFilterModel";
import CustomerStatusLink from "../components/CustomerStatusLink";
import CustomerDetailsAndOpportunitiesDrawer from "../components/CustomerDetailsAndOpportunitiesDrawer";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState({});

  useEffect(() => {
    getAllCustomers().then((res) => {
      setCustomers(res);
    });
  }, []);

  const handleStatusChangeRequest = (id, status) => {
    patchStatusChange(id, status);
    setCustomers((pre) =>
      pre.map((customer) => {
        if (customer.id === id) return { ...customer, status };
        return customer;
      })
    );
  };

  const openDrawer = (record) => () => {
    setSelectedCustomer(record);
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => setIsDrawerOpen(false);

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "name",
      sorter: (a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      },
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        close,
      }) => (
        <CustomerFilterModel
          onSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          close={close}
        />
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? "#1677ff" : undefined,
          }}
        />
      ),
      onFilter: (value, record) =>
        record["name"].toString().toLowerCase().includes(value.toLowerCase()),
      render: (name, record) => <a onClick={openDrawer(record)}>{name}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        { text: "Active", value: "Active" },
        { text: "Non-Active", value: "Non-Active" },
        { text: "Lead", value: "Lead" },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      render: (text, record) => (
        <CustomerStatusLink
          text={text}
          record={record}
          onStatusChange={handleStatusChangeRequest}
        />
      ),
    },
  ];

  return (
    <>
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={customers}
      />
      <CustomerDetailsAndOpportunitiesDrawer
        isDrawerOpen={isDrawerOpen}
        onClose={closeDrawer}
        selectedCustomer={selectedCustomer}
      />
    </>
  );
};

export default Customers;
