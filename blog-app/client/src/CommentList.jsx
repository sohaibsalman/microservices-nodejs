import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(
            `http://localhost:4001/posts/${postId}/comments`
        );
        setComments(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderedComments = comments.map((comment) => {
        return (
            <li className="list-group-item" key={comment.id}>
                {comment.content}
            </li>
        );
    });

    return (
        <div className="mt-3">
            <ul className="list-group">{renderedComments}</ul>
        </div>
    );
};

export default CommentList;
