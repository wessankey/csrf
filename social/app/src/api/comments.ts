import { Comment } from "../pages/Comments";

export const getComments = async () => {
  const response = await fetch(
    `https://westonsankey-social-service.fly.dev/api/comments`
  );
  return response.json();
};

export const addComment = async (comment: Comment): Promise<Comment> => {
  const response = await fetch(
    `https://westonsankey-social-service.fly.dev/api/comments`,
    {
      method: "POST",
      body: JSON.stringify(comment),
    }
  );

  return response.json();
};
