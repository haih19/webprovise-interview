import { appRoutes } from "@/routes/path-constant";
import { LayoutProps } from "@/types";
import { Layout, theme, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Units } from "@/helpers/enum";
import { storage } from "@/utils/storage";
import { UNIT_PREFERENCE_KEY } from "@/helpers/constant";

const { Header, Content, Footer } = Layout;

const onClick: MenuProps["onClick"] = ({ key }) => {
  storage.set(UNIT_PREFERENCE_KEY, key);
  window.location.reload();
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Units",
    children: [
      {
        key: Units.standard,
        label: "Standard",
      },
      {
        key: Units.metric,
        label: "Metric",
      },
      {
        key: Units.imperial,
        label: "Imperial",
      },
    ],
  },
];

const MainLayout = ({ children }: LayoutProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const onRedirectToHome = () => {
    navigate(appRoutes.home);
  };
  return (
    <Layout
      style={{
        height: "100dvh",
      }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <div
          className="demo-logo flex items-center gap-2.5 cursor-pointer"
          onClick={onRedirectToHome}>
          <div className="w-[24px] h-[24px]">
            <img
              src="/assets/sun.png"
              className="aspect-square"
              alt="Logo"
            />
          </div>
          <div className="text-white font-medium text-lg">WebProvise</div>
        </div>
        <div className="cursor-pointer">
          <Dropdown menu={{ items, onClick }}>
            <MenuOutlined className="text-white text-lg font-medium" />
          </Dropdown>
        </div>
      </Header>
      <Content
        style={{ height: "100%" }}
        className=" md:px-[32px] xl:px-[48px]">
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: "100%",
            overflowX: "hidden",
          }}>
          <Content
            style={{
              padding: "0 24px",
              maxWidth: "90%",
              width: 1200,
              margin: "auto",
            }}>
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Weather ©{new Date().getFullYear()} Created by Haih
      </Footer>
    </Layout>
  );
};

export default MainLayout;
