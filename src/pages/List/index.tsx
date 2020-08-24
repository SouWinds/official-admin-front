import React from "react";
import s from "./index.less";
import { List, Avatar } from "antd";
import c from 'classnames';
import { MessageOutlined, LikeOutlined, EyeOutlined } from "@ant-design/icons";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "http://ant.design",
    title: `EC-UI PC 版发布啦！赶紧来下载吧 ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "2020-08-10 12:20",
    content:
      "最新discuzQ主题，本主题完全永久免费，旨在跟进最新版discuzQ程序默认主题二次开发，为广大站长定制化优化主题。针对于原生discuzQ前端部分二次开发，给予不一样的首页、搜索页、个人主页、发布页等。并且含多语言、首页关注等功能。主题持续维护并完全免费，感谢大家关注！."
  });
}

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

export default () => (
  <div className={c(s.container)}>
    <div id="components-list-demo-vertical">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 10
        }}
        dataSource={listData}
        footer={
          <div>
            <b>EC-UI</b> for Discuz!Q
          </div>
        }
        renderItem={item => (
          <List.Item
            onClick={e => alert(item.title)}
            key={item.title}
            actions={[
              <IconText
                icon={EyeOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar size="large" src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  </div>
);
