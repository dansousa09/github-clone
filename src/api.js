export const getUserData = async (endpoint) => {
  try {
    const res = await fetch(`https://api.github.com/users/${endpoint}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getRepoData = async (endpoint) => {
  try {
    const res = await fetch(`https://api.github.com/users/${endpoint}/repos`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
