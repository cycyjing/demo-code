import React from "react";
import { Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const CustomerFilterModel = ({
  onSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  close,
}) => {
  return (
    <div
      style={{
        padding: 8,
      }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <Input
        placeholder="Search Customer Name"
        value={selectedKeys[0]}
        onChange={(e) =>
          onSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => confirm()}
        style={{
          marginBottom: 8,
          display: "block",
        }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => confirm()}
          icon={<SearchOutlined />}
          size="small"
          style={{
            width: 90,
          }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters()}
          size="small"
          style={{
            width: 90,
          }}
        >
          Reset
        </Button>
        <Button type="link" size="small" onClick={() => close()}>
          Close
        </Button>
      </Space>
    </div>
  );
};

export default CustomerFilterModel;
