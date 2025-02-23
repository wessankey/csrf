import { Comment } from "../Comments";

export const getComments = async () => {
  const response = await fetch(
    "https://westonsankey-csrf-service-a.fly.dev/api/comments"
  );
  return response.json();
};

export const addComment = async (comment: Comment): Promise<Comment> => {
  const response = await fetch(
    "https://westonsankey-csrf-service-a.fly.dev/api/comments",
    {
      method: "POST",
      body: JSON.stringify(comment),
    }
  );

  return response.json();
};
