import React, { useState } from "react";
import { Button, Modal, Input, Radio, Form } from "antd";
import { postAddOpportunity } from "../utils";

const AddOpportunityModel = ({ customer, onAddOpportunity }) => {
  const [opportunity, setOpportunity] = useState({ name: "", status: "New" });
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleOk = () => {
    postAddOpportunity(opportunity, customer.id)
      .then((res) => {
        if (res.status === 201) {
          const data = res.data;
          console.log("data", data);
          onAddOpportunity({
            ...opportunity,
            id: data.id,
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
        onClick={() => {
          setIsModelOpen(true);
        }}
      >
        Add Opportunity
      </Button>
      <Modal
        title="Add Opportunity"
        open={isModelOpen}
        onCancel={() => setIsModelOpen(false)}
        onOk={handleOk}
      >
        <Form>
          <Form.Item
            label="Opportunity Name"
            rules={[
              { required: true, message: "Please input opportunity name!" },
            ]}
          >
            <Input
              aria-label="Opportunity Name"
              value={opportunity.name}
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

export default AddOpportunityModel;
