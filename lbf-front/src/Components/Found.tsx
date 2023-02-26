import React, { useState } from 'react';
import { submitForm } from '../functions/api';
import "../css/found.css"
import { FoundFormProps, PageProps } from '../functions/types';

const Found = (props: PageProps) => {
  const [form, setForm] = useState<FoundFormProps>({
    handle: "",
    description: "",
    image: null,
    date: null,
  });
  const [image, setImage] = useState("")
  const [body, setBody] = useState("success")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.image) {
      const formData = new FormData();
      formData.append('image', form.image);
      setBody("loading")
      // Send formData to server using AJAX or form submission
      submitForm(form).then((value) => {
        setBody("success")
      })
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setForm({ ...form, image: file || null });
      };

      reader.readAsDataURL(file);
    }
  }

  const resubmitForm = () => {
    setBody("form")
  }

  return (
    <>
    {body === "form" ?
      <div className="found-container">
        <h1> Report a Lost Item :) </h1>
        <form onSubmit={handleSubmit} className="found-form">
          <div className="found-form-input">
            <label>Telegram Handle: </label>
            <input type="text" name="handle" value={form.handle} onChange={handleInputChange} />
          </div>
          <div className="found-form-input">
            <label>
              Description:
            </label>
            <input type="text" name="description" value={form.description} onChange={handleInputChange} />
          </div>
          <div className="found-form-input">
            <label>
              Picture of Item:
            </label>
            <input type="file" accept="image/*" name="image" onChange={handleFileChange} />
          </div>
          {image && <img className="selected-image" src={image} alt="Preview" id="previewImage" />}

          <button type="submit">Submit</button>
        </form>
      </div>: <></>}
    {
      body === "loading" ?
      <>
        <img src="/images/loading.webp" alt="loading"></img>
        <h1>Upload in progress...</h1>
      </>: <></>
    }
    {body === "success" ?
      <div className="found-container">
        <img src="/images/found.jpg" alt="found.jpg"/>
        <h1 className="success-message">Upload Successful!</h1>
        <div className="success-actions">
          <div className="success-action" onClick={() => props.switchTo("main")}>Return to home</div>
          <div className="success-action" onClick={resubmitForm}>Submit another lost item</div>
        </div>
      </div> : <></>}
    </>
  )
}
export { Found }