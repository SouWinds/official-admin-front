import React from "react";
import styles from "./index.less";
import { Layout, Menu, Breadcrumb } from "antd";

import CarouselAutoplay from '../CarouselAutoplay';
const { Header, Content, Footer } = Layout;

export default () => (
  <div className={styles.container}>
    <div id="components-layout-demo-fixed">
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">分类</Menu.Item>
            <Menu.Item key="3">话题</Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <CarouselAutoplay />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
         EC-UI fro Discuz!Q PC 20200810
        </Footer>
      </Layout>
    </div>
  </div>
);
