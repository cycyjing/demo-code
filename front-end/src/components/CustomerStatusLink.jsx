import React, { useState } from "react";
import { Modal, Radio } from "antd";

const CustomerStatusLink = ({ text, record, onStatusChange }) => {
  const [status, setStatus] = useState(record.status);
  const [open, setOpen] = useState(false);
  const handleOkClick = () => {
    onStatusChange(record.id, status);
    setOpen(false);
  };
  const handleStatusChange = () => {
    setOpen(true);
  };
  return (
    <>
      <a onClick={handleStatusChange}>{text}</a>
      <Modal
        title="Manage Status"
        open={open}
        onOk={handleOkClick}
        onCancel={() => {
          setStatus(record.status);
          setOpen(false);
        }}
      >
        <Radio.Group
          name="status"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <Radio value="Active">Active</Radio>
          <Radio value="Non-Active">Non-Active</Radio>
          <Radio value="Lead">Lead</Radio>
        </Radio.Group>
      </Modal>
    </>
  );
};

export default CustomerStatusLink;
