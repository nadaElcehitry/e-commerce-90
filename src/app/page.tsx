
import HeaderSlider from "./_sharedComponent/Home/HeaderSlider/HeaderSlider";
import CategorySlider from "./_sharedComponent/Home/CategorySlider/CategorySlider";
import HomeProducts from "./_sharedComponent/Home/HomeProducts/HomeProducts";

export default function Home() {
  return (
    <>
      {/* header slider */}
      <header className="bg-gray-50">
        <HeaderSlider />
      </header>


      {/*  category slider */}
      <CategorySlider />
      {/* Products */}
      <HomeProducts />

    </>
  );
}
