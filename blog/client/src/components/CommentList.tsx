export interface Comment {
  id: string;
  content: string;
  status: string;
}

const CommentList = ({ comments }: { comments: Comment[] }) => {
  const renderedComments = comments.map((comment) => {
    let content = comment.content;

    if (comment.status === "pending") {
      content = "This comment is pending approval from moderator.";
    } else if (comment.status === "rejected") {
      content = "This comment has been rejected by the moderator.";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
