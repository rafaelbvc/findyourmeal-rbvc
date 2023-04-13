export default function Reviews() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What 100 people are saying
      </h1>
      <div>
        <div className="border-b pb-7 mb-7">
          <div className="flex">
            <div className="w-1/6 flex flex-col items-center">
              <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                <h2 className="text-white text-2xl">BD</h2>
              </div>
              <p className="text-center">Bruce Dickinson</p>
            </div>
            <div className="ml-10 w-5/6">
              <div className="flex items-center">
                <div className="mt-5">
                  <div className="flex mr-5">*****</div>
                  <p className="text-lg font-light">
                    Portions are good but dishes are generally run of the mill,
                    the bright soots are the rolls and bolognese. Dishes are
                    very overpriced for both quantity and variety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
