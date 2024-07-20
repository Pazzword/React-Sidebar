import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined } from '@ant-design/icons';

const MenuList = ({ darkTheme }) => {
  const items = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: 'activity',
      icon: <AppstoreOutlined />,
      label: 'Activity',
    },
    {
      key: 'subtask',
      icon: <BarsOutlined />,
      label: 'Tasks',
      children: [
        {
          key: 'task-1',
          label: 'Task-1',
        },
        {
          key: 'task-2',
          label: 'Task-2',
        },
      ],
    },
    {
      key: 'progress',
      icon: <AreaChartOutlined />,
      label: 'Progress',
    },
    {
      key: 'payment',
      icon: <PayCircleOutlined />,
      label: 'Payment',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar" items={items} />
  );
};

export default MenuList;
