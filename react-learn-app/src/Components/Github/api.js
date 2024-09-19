export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/Akshatsharma888');
  return response.json();
};