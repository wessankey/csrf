export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<boolean> => {
  await fetch("http://localhost:8080/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

  return true;
};
