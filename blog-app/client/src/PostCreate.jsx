import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', { title });
        setTitle('');
    };

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary mt-3">Submit</button>
            </form>
        </React.Fragment>
    );
};

export default PostCreate;
