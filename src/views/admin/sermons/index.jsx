import React, { useEffect, useState } from 'react'
import { Table,  } from 'antd';
import { useSelector } from 'react-redux';


const Sermons = () => {
  const sermons = useSelector((state) => state.sermons);
  const [data,setData] = useState([]);

  useEffect(() => {
    gridData();
  },[])

  const gridData = () => {
      setData(
       sermons.map((sermon) => ({
        pictures: sermon.pictures[0].url,
         _id: sermon._id,
         title: sermon.title,
         preacher: sermon.preacher,
         date: sermon.date
       }))
    )
  }



  const columns = [
    {
      title: 'Sermon Image',
      dataIndex: 'pictures',
      render: pictures => <img src={pictures} className='h-20  w-20' alt="pictures" />
    },
    {
      title: 'Sermon ID',
      dataIndex: '_id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Preacher',
      dataIndex: 'preacher',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    }
  ];
  return (
    <div className='mt-[30px] text-center'>
        <Table 
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 4
          }}
        
        />

    </div>
  )
}

export default Sermons