import CustomInput from 'components/customInput';
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useCreateDevotionMutation } from 'services/appApi';
import axios from "../../../axios";


const AddDevotional = () => {
  const navigate = useNavigate();
  const [title,setTitle] = useState("");
  const [thought,setThought] = useState("");
  const [prayerFocus,setPrayerFocus] = useState("");
  const [description,setDescription] = useState("");
  const [prayer,setPrayer] = useState("");
  const [date,setDate] = useState("");
  const [devs,setDevs] = useState([]);
  const [imgToRemove, setImgToRemove] = useState(null);
  const [createDevotion,{isError,isLoading,isSuccess,error}] = useCreateDevotionMutation();

  const handleRemoveImg = (imgObj) => {
    setImgToRemove(imgObj.public_id);
    axios
        .delete(`/images/${imgObj.public_id}/`)
        .then((res) => {
          setImgToRemove(null);
          setDevs((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
        })
        .catch((e) => console.log(e));
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!title || !prayerFocus || !date || !prayer || !thought || !description || !devs.length) {
          return alert("Please fill out all the fields");
      }
      createDevotion({ title , prayerFocus , date , description, thought, prayer,  devs}).then(({ data }) => {
        if(data.length > 0) {
          setTimeout(() => {
            navigate("/admin/default");
          }, 1500);
        }
      });
    }
    const showWidget = () => {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dg4icria6",
          uploadPreset: "jddmyosk",
        },
        (error,result) => {
          if(!error && result.event === "success") {
            setDevs((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id,
              // resource_type: result.info.auto
            }]);
          }
        }
      );
      widget.open();
    }

    // const [desc,setDesc] = useState();
    // const handleDesc = (e) => {
    //     setDesc(e);
    // }

  return ( 
    <div className='mt-[50px] dark:text-white'>
        <form onSubmit={handleSubmit}>
          {isSuccess && <Alert variant='success'>Devotion Created with Success</Alert>}
          {isError && <Alert variant='danger'>{error.data}</Alert>}
           <div className="mb-3">
            <CustomInput type="text" placeholder="Enter Devotional Title" value={title}
             onChange={(e) => setTitle(e.target.value)} />
           </div>
           <div className="mb-3">
           <CustomInput type="text" placeholder="Enter thought of the day" value={thought}
             onChange={(e) => setThought(e.target.value)} />
           </div>
           <div className="mb-3">
           <CustomInput type="text" placeholder="Enter Prayer Focus" value={prayerFocus}
             onChange={(e) => setPrayerFocus(e.target.value)} />
           </div>
           <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} 
                         rows="3"></textarea>
           </div>
           <div className="mb-3">
           <CustomInput type="date" placeholder="Enter Date" value={date}
             onChange={(e) => setDate(e.target.value)} />
           </div>
           <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                placeholder='Prayer' value={prayer} onChange={(e) => setPrayer(e.target.value)} 
                         rows="3"></textarea>
           </div>
           <div className='mb-4'>
                     <button className="button border-0" type='button' onClick={showWidget}>
                            Upload Images
                     </button>
                     <div className='images-preview-container'>
                                {devs.map((image) => (
                                    <div className="image-preview">
                                        <img src={image.url} />
                                        {imgToRemove !== image.public_id && <i className="fa fa-times-circle" onClick={() => handleRemoveImg(image)}></i>}
                                    </div>
                                ))}
                     </div>
           </div>
           <button 
                type='submit' disabled={isLoading || isSuccess}
                className="button border-0 rounded-3 my-5">
                    Add Devotion
            </button>

        </form>
    </div>
  )
}

export default AddDevotional