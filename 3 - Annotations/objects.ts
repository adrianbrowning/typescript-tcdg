const profile = {
  name: "Adrian",
  age: 35,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

{
  const { age } = profile;
}
{
  const { age }: { age: number } = profile;
}
{
  const { age, name }: { age: number; name: string } = profile;
}

const {
  coords: { lat, lng }
} = profile;
{
  //destructure with type
  const {
    coords: { lat, lng }
  }: { coords: { lat: number; lng: number } } = profile;
}
