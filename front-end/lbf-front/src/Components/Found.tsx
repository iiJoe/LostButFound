import React, { useState } from 'react';
import { testFile } from '../functions/test';



const Found = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      // Send formData to server using AJAX or form submission
      testFile(file)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  }

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <label>
          Upload an image:
          <input type="file" onChange={handleFileChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export { Found }