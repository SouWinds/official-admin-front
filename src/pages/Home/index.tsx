import React from "react";
import s from "./index.less";
import c from "classnames";
import { Layout, Menu, Breadcrumb, Avatar, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";
import List from '../List'
import SelectSearch from '../SelectSearch'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);


export default () => (
  <div className={s.container}>
    <div id="components-layout-demo-top-side">
      <Layout>
        <Header className="header fbh">
          <div className={c('logo', s.logo)}>EC-UI</div>
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
          <div className="fb1"><SelectSearch /></div>
          <div className="fbae-s fbh">
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Avatar size={36} /> 南风 <DownOutlined />
              </a>
            </Dropdown>,
          </div>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>帖子</Breadcrumb.Item>
            <Breadcrumb.Item>新版</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <UserOutlined />
                      帖子
                    </span>
                  }
                >
                  <Menu.Item key="1">
                    新版
                  </Menu.Item>
                  <Menu.Item key="2">BUG</Menu.Item>
                  <Menu.Item key="3">提问</Menu.Item>
                  <Menu.Item key="4">定制</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <LaptopOutlined />
                      图片
                    </span>
                  }
                >
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <NotificationOutlined />
                      视频
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <List />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          EC-UI for Discuz!Q PC ©2020 Created by Engine China <br />
          赣 ICP备 214124124 号 <br />
          <a href="#">下载EC-UI</a> | <a href="#">支持EC-UI</a> | <a href="#">GitHub</a> | <a href="#">Gitee</a>
        </Footer>
      </Layout>
    </div>
  </div>
);
