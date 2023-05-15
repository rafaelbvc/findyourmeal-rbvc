function Header({ image }: { image: string }) {
  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center  h-full flex justify-center items-center">
        <img src={image} alt="Main Image" className="object-fill" />
      </div>
    </div>
  );
}

export default Header;
