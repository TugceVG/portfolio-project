import { useRef, useState } from 'react';

import "./form.scss";

export default function Form({ toggleForm, setShouldUpdate }) {
    const formRef = useRef(null);
    const [file, setFile] = useState(null);

    const saveTestimonial = async (data) => {
        try {
            await fetch("/testimonials/add", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            formRef.current.reset();
            setShouldUpdate(true);
            toggleForm();
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, userTitle, userCompany, comment } = formRef.current;
        const formData = {
            userName: username.value,
            userTitle: userTitle.value,
            userCompany: userCompany.value,
            comment: comment.value,
            isVisible: false,
        };

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            formData.userPicture = fileName;
            // console.log("file", file)

            try {
                await fetch("/upload", {
                    method: "POST",
                    body: data,
                    // headers: { 'Content-Type': 'multipart/form-data' }
                });
            } catch (err) {
                console.log(err);
            }
        }
        saveTestimonial(formData);
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="form">
            <label htmlFor="picture">Profile Picture</label>
            <input id="picture" name="picture" type="file" accept=".png,.jpeg,.jpg" placeholder="User Picture" onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" placeholder="Name" />
            <label htmlFor="userTitle">Title</label>
            <input id="userTitle" name="userTitle" type="text" placeholder="Title" />
            <label htmlFor="userCompany">Company</label>
            <input id="userCompany" name="userCompany" type="text" placeholder="Company" />
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" name="comment" placeholder="Comment" />
            <input type="submit" placeholder="Submit" />
        </form>
    )
}
