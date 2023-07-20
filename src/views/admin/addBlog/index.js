import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCreateBlogMutation } from 'services/appApi'
import axios from "../../../axios";
import CustomInput from 'components/customInput';
import { Alert } from 'react-bootstrap';


const AddBlog = () => {
  const navigate = useNavigate()
  const blogs = useSelector((state) => state.blogs);
  const [title,setTitle] = useState("")
  const [article,setArticle] = useState("");
  const [date,setDate] = useState("");
  const [quote,setQuote] = useState("");
  const [pics,setPics] = useState([]);
  const [imgToRemove, setImgToRemove] = useState(null);
  const [createBlog,{isError,error,isLoading,isSuccess}] = useCreateBlogMutation();

  const handleRemoveImg = (imgObj) => {
    setImgToRemove(imgObj.public_id);
    axios
        .delete(`/images/${imgObj.public_id}/`)
        .then((res) => {
          setImgToRemove(null);
          setPics((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
        })
        .catch((e) => console.log(e));
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!title || !article || !quote || !date  || !pics.length) {
          return alert("Please fill out all the fields");
      }
      createBlog({ title , article , quote , date, pics}).then(({ data }) => {
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
          uploadPreset: "lbtvgqck",
        },
        (error,result) => {
          if(!error && result.event === "success") {
            setPics((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id,
              resource_type: result.info.auto
            }]);
          }
        }
      );
      widget.open();
    }
  return (
    <div className='mt-[50px] dark:text-white'>
       <form onSubmit={handleSubmit}>
          {isSuccess && <Alert variant='success'>Sermon Created with Success</Alert>}
          {isError && <Alert variant='danger'>{error.data}</Alert>}
           <div className="mb-3">
            <CustomInput type="text" placeholder="Enter Blog Title" value={title}
             onChange={(e) => setTitle(e.target.value)} />
           </div>
           <div className="mb-3">
           <textarea className="form-control" id="exampleFormControlTextarea1"
                                placeholder='Article' value={article} onChange={(e) => setArticle(e.target.value)} 
                         rows="3"></textarea>
           </div>
           <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                placeholder='Enter Quote' value={quote} onChange={(e) => setQuote(e.target.value)} 
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
             <button className="button border-0" type='button' onClick={showWidget}>
                            Upload Images
                     </button>
                     <div className='images-preview-container'>
                                {pics.map((pic) => (
                                    <div className="image-preview">
                                        <img src={pic.url} />
                                        {imgToRemove != pic.public_id && <i className="fa fa-times-circle" onClick={() => handleRemoveImg(pic)}></i>}
                                    </div>
                                ))}
                     </div>
           </div>
           <button 
                type='submit' disabled={isLoading || isSuccess}
                className="button border-0 rounded-3 my-5">
                    Add Blog
            </button>

        </form>
    </div>
  )
}

export default AddBlog