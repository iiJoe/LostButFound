import React, { useState } from 'react';
import { testFile } from '../functions/test';
import "../css/found.css"
import { FoundFormProps } from '../functions/types';

const Found = () => {
  const [form, setForm] = useState<FoundFormProps>({
    handle: "",
    description: "",
    image: null
  });
  const [image, setImage] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.image) {
      const formData = new FormData();
      formData.append('image', form.image);
      // Send formData to server using AJAX or form submission
      testFile(form)
      
    }
    console.log(form.handle)
    console.log(form.description)
    console.log(form.image)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setForm({ ...form, image: file || null });
  }

  return (
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

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export { Found }