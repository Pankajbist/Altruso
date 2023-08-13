import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import { Skeleton,Switch } from 'antd';

const columns = [
  {
    title: 'Full Name',
    dataIndex: 'fullName',
    render: (text) => <a>{text}</a>,
  },
 
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Mode',
    dataIndex: 'mode',
  },
 
];


// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};
const CustomTable = (props) => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
   

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={props.users}
      />
    </div>
  );
};
export default CustomTable;