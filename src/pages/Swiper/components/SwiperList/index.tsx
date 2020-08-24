import React from "react";
import styles from "./index.less";
import { Table, Tag } from "antd";
import { render } from 'react-dom';



const data = [
  {
    id: "1",
    order: "1",
    name: '第一个swiper',
    img_src: "http://...",
    target: "http://...",
    status: 1,
    updated_at: 92340239424,
  },
  {
    id: "2",
    order: "2",
    name: '第一个swiper',
    img_src: "http://...",
    target: "http://...",
    status: 1,
    updated_at: 92340239424,
  },
  {
    id: "3",
    order: "3",
    name: '第一个swiper',
    img_src: "http://...",
    target: "http://...",
    status: 1,
    updated_at: 92340239424,
  },
];

export default ({onEditor}) => {

  // 
  const getColumns = () => {
    return [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
      },
      {
        title: "名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "图片",
        dataIndex: "img_src",
        key: "img_src",
        render: img => {
          return <img src={img} />
        }
      },
      {
        title: "目标地址",
        dataIndex: "target",
        key: "target"
      },
      {
        title: "状态",
        key: "status",
        dataIndex: "status",
        render: status => (
          <Tag key={status}>
            {status ? '正常' : '关闭'}
          </Tag>
        )
      },
      {
        title: "最后更新",
        dataIndex: "updated_at",
        key: "updated_at"
      },
      {
        title: "动作",
        key: "action",
        render: (values) => (
          <span>
            <a style={{ marginRight: 16 }} onClick={() => onEditor(values)}>编辑</a>
            <a>删除</a>
          </span>
        )
      }
    ];
  }
  
  return <div className={styles.container}>
    <div id="components-table-demo-basic">
      <Table columns={getColumns()} dataSource={data} />
    </div>
  </div>
}
