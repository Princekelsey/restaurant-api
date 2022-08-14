import Chance from "chance";

const makeStoreData = () => {
  const chance = new Chance();
  const data = Array.from(Array(100)).map((_, i) => ({
    name: chance.name(),
    email: chance.email(),
    phone: chance.phone(),
    address: chance.address(),
  }));

  return data;
};

export default makeStoreData;
