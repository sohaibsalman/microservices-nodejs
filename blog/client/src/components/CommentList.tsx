export interface Comment {
  id: string;
  content: string;
}

const CommentList = ({ comments }: { comments: Comment[] }) => {
  const renderedComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
