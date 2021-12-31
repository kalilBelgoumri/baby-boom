export default function Card({ title, img }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={img} alt="image" />
    </>
  );
}
