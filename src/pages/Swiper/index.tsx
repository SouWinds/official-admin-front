import React, { useState } from "react";
import s from "./index.less";
import c from "classnames";
import { Layout, Menu} from "antd";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";
import SwiperList from './components/SwiperList'
import EditorSwiper from './components/EditorSwiper';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default ({}) => {
  const [activeEditor, setActiveEditor] = useState(false)
  const [activeList, setActiveList] = useState(true)

  const onEditor = valuse => {
    setActiveEditor(valuse)
    setActiveList(!valuse)
  }
  return <div>
      {activeList && <SwiperList onEditor={onEditor} />}
      {activeEditor && <EditorSwiper data={activeEditor} back={onEditor}  />}
  </div>
}

