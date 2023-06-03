import React from "react";
import { Drawer } from "antd";
import CustomerDetails from "./CustomerDetails";
import Opportunities from "./Opportunities";

const CustomerDetailsAndOpportunitiesDrawer = ({
  isDrawerOpen,
  onClose,
  selectedCustomer,
}) => {
  return (
    <Drawer width="60vw" closable="false" open={isDrawerOpen} onClose={onClose}>
      <CustomerDetails customer={selectedCustomer} />
      <Opportunities customer={selectedCustomer} />
    </Drawer>
  );
};

export default CustomerDetailsAndOpportunitiesDrawer;
