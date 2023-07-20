import CustomInput from 'components/customInput'
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useCreateSermonMutation } from 'services/appApi';
import axios from "../../../axios";
const AddSermon = () => {
  const navigate = useNavigate();
  const [title,setTitle] = useState("");
  const [preacher,setPreacher] = useState("")
  const [date,setDate] = useState("")
  const [description,setDescription] = useState("");
  const [songs,setSongs] = useState([]);
  const [images,setImages] = useState([]);
  const [imgToRemove, setImgToRemove] = useState(null);
  const [createSermon, {isError,error,isLoading,isSuccess}] = useCreateSermonMutation();
  const handleRemoveImg = (imgObj) => {
    setImgToRemove(imgObj.public_id);
    axios
        .delete(`/images/${imgObj.public_id}/`)
        .then((res) => {
          setImgToRemove(null);
          setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
        })
        .catch((e) => console.log(e));
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!title || !preacher || !date || !songs.length  || !description || !images.length) {
          return alert("Please fill out all the fields");
      }
      createSermon({ title , preacher , date , description, songs,  images}).then(({ data }) => {
        if(data.length > 0) {
          setTimeout(() => {
            navigate("/admin/default");
          }, 1500);
        }
      });
    }
    const showWidget2 = () => {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dg4icria6",
          uploadPreset: "lbtvgqck",
        },
        (error,result) => {
          if(!error && result.event === "success") {
            setSongs((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id,
              resource_type: result.info.auto
            }]);
          }
        }
      );
      widget.open();
    }
    const showWidget = () => {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dg4icria6",
          uploadPreset: "lbtvgqck",
        },
        (error,result) => {
          if(!error && result.event === "success") {
            setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id,
              resource_type: result.info.auto
            }]);
          }
        }
      );
      widget.open();
    }
    
    const [desc,setDesc] = useState();
    const handleDesc = (e) => {
        setDesc(e);
    }


  return (
    <div className='mt-[50px] dark:text-white'>
        <form onSubmit={handleSubmit}>
          {isSuccess && <Alert variant='success'>Sermon Created with Success</Alert>}
          {isError && <Alert variant='danger'>{error.data}</Alert>}
           <div className="mb-3">
            <CustomInput type="text" placeholder="Enter Sermon Title" value={title}
             onChange={(e) => setTitle(e.target.value)} />
           </div>
           <div className="mb-3">
           <CustomInput type="text" placeholder="Enter Preacher Name" value={preacher}
             onChange={(e) => setPreacher(e.target.value)} />
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
           <div className='mb-3'>
           {/* <CustomInput type="file" placeholder="Choose Audio" value={audio}
             onChange={(e) => setAudio(e.target.value)} /> */}
             {/* <input type="file" 
             value={audio} onChange={(e) => setAudio(e.target.value)}
             /> */}
             <button className="button border-0" type='button' onClick={showWidget2}>
                            Upload Audios
                     </button>
                     <div className='images-preview-container'>
                                {songs.map((song) => (
                                    <div className="image-preview">
                                        <img src={song.url} />
                                        {/* {imgToRemove != song.public_id && <i className="fa fa-times-circle" onClick={() => handleRemoveImg(song)}></i>} */}
                                    </div>
                                ))}
                     </div>
           </div>
           <div className='mb-4'>
                     <button className="button border-0" type='button' onClick={showWidget}>
                            Upload Images
                     </button>
                     <div className='images-preview-container'>
                                {images.map((image) => (
                                    <div className="image-preview">
                                        <img src={image.url} />
                                        {imgToRemove != image.public_id && <i className="fa fa-times-circle" onClick={() => handleRemoveImg(image)}></i>}
                                    </div>
                                ))}
                     </div>
           </div>
           <button 
                type='submit' disabled={isLoading || isSuccess}
                className="button border-0 rounded-3 my-5">
                    Add Sermon
            </button>

        </form>
    </div>
  )
}

export default AddSermon