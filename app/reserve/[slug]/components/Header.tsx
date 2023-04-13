"use client";

const Header = () => {
  return (
    <div>
      <h3 className="font-bold">You're almost done!</h3>
      <div className="mt-5 flex">
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/42597725.jpg"
          alt="Image"
          className="w-32 h-18 rounded"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">
            JG SkyHigh All Day Dining & Lounge
          </h1>
          <div className="flex mt-3">
            <p className="mr-6">Mon, 10, 2023</p>
            <p className="mr-6">7:30 PM</p>
            <p className="mr-6">3 people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header