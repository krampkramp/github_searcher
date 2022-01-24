export const getUser = (name) => {
  return fetch(`https://api.github.com/users/${name}`)
  .then( res => res.json())
      .catch(e => {
      if (e.status === 404) {
        console.log(`NOT FOUND`);
      } else {
        console.log(`🚧👷💻 WIP error ${e.status}: ${e.statusText}`)
      }
    });
}