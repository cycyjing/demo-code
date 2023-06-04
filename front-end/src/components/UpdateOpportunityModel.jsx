import React, { useState } from "react";
import { Button, Modal, Input, Radio, Form } from "antd";
import { patchUpdateOpportunity } from "../utils";

const UpdateOpportunityModel = ({ record, onUpdateOp }) => {
  const [opportunity, setOpportunity] = useState({
    name: record.name,
    status: record.status,
  });
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleOk = () => {
    patchUpdateOpportunity(record.id, opportunity)
      .then((res) => {
        if (res.status === 200) {
          onUpdateOp({
            ...record,
            ...opportunity,
          });
        }
      })
      .finally(() => {
        setIsModelOpen(false);
      });
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setIsModelOpen(true);
        }}
      >
        Update
      </Button>
      <Modal
        title="Update Opportunity"
        open={isModelOpen}
        onCancel={() => setIsModelOpen(false)}
        onOk={handleOk}
        // footer={null}
      >
        <Form>
          <Form.Item
            label="Opportunity Name"
            rules={[
              { required: true, message: "Please input opportunity name!" },
            ]}
          >
            <Input
              value={opportunity.name}
              aria-label="Opportunity Name"
              onChange={(e) => {
                setOpportunity({
                  ...opportunity,
                  name: e.target.value,
                });
              }}
            />
          </Form.Item>
          <Form.Item label="Opportunity Status">
            <Radio.Group
              onChange={(e) => {
                setOpportunity({
                  ...opportunity,
                  status: e.target.value,
                });
              }}
              value={opportunity.status}
            >
              <Radio value="New">New</Radio>
              <Radio value="Closed Won">Closed Won</Radio>
              <Radio value="Closed Lost">Closed Lost</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateOpportunityModel;
