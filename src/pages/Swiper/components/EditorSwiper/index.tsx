import React, { useState } from "react";
import s from "./index.less";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  Select,
  Switch,
  Button,
  Cascader,
  InputNumber,
  Upload,
} from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export default ({data, back}) =>{
  const {id, order, name, img_src, target, status, updated_at} = data
  const [avatarState, setAvatarState] = useState(false)

  return <div className={s.container}>
    <div id="components-form-demo-validate-static">
      <div style={{textAlign: 'center'}}>
      <Upload
          name="avatar"
          listType="picture-card"
          className={s['avatar-uploader']}
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          // beforeUpload={beforeUpload}
          // onChange={this.handleChange}
        >
          {img_src ? (
            <img src={img_src} alt="avatar" style={{ width: "100%" }} />
          ) : (
            <div>
              {avatarState ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
            </div>
          )}
        </Upload>
      </div>
      <Form {...formItemLayout}>
        <Form.Item
          label="标题"
        >
          <Input value={name} id="name" />
        </Form.Item>

        <Form.Item label="排序">
          <Input
            value={order}
            id="order"
          />
        </Form.Item>

        <Form.Item
          label="目标URL"
        >
          <Input
            value={target}
            id="target"
          />
        </Form.Item>

        <Form.Item name="status" label="显示隐藏" valuePropName="status">
          <Switch checked={!!status} />
        </Form.Item>

        <Button onClick={() => back(false)}>返回</Button>
        <Button type="primary">保存</Button>
      </Form>
    </div>
  </div>}