import "firebase/firestore";

const createUser = async (user) => {
  const ref = await firestore.collection("users").add(user);

  const newUser = {
    id: ref.id,
    ...user,
  };

  console.log(newUser);
  return newUser;
};

export default createUser;
