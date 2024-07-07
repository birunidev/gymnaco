export default function SlideItem({ imgSrc, onClick }) {
  return (
    <div className="w-full">
      <img src={imgSrc} onClick={onClick} className="w-full" alt="" />
    </div>
  );
}
