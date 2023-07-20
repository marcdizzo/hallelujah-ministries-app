import React, { useEffect, useState } from 'react'
import { Table,  } from 'antd';
import { useSelector } from 'react-redux';


const Devotionals = () => {
  const devotions = useSelector((state) => state.devotions);
  const [gridData,setGridData] = useState([]);
  useEffect(() => {
      getData();
  },[]);

  const getData = () => {
    setGridData(
      devotions.map((devotion) => ({
         imgs: devotion.imgs[0].url,
         _id: devotion._id,
         title: devotion.title,
         date: devotion.date,
      }))
    )
  }


  const columns = [
    {
      title: 'Devotional Image',
      dataIndex: 'imgs',
      render: imgs => <img src={imgs} className='w-20 h-20' alt="img" />
    },
    {
      title: 'Devotional ID',
      dataIndex: '_id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    }
  ];
  return (
    <div className='mt-[50px]'>
       <Table 
       columns={columns}
       dataSource={gridData}
       pagination={{
        pageSize: 4
       }}
       />
    </div>
  )
}

export default Devotionals