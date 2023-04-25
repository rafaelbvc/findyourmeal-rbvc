import RestaurantHeader from "./components/restaurantHeader";


export function generateMetadata({params}:{params: {slug: string}}){
  const pageName = params.slug.split("-"); 
  for (let i = 0; i < pageName.length; i++){
    pageName[i] = pageName[i][0].toUpperCase() + pageName[i].substring(1)
  }
  const sPageName = `${pageName.join(" ")}`
  return {title: sPageName}
}


function RestaurantLayout({ children, params }: { children: React.ReactNode; params: {slug: string} }) {

  return (
    <>
      <main>
        <RestaurantHeader name={params.slug}/>
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          {children}
        </div>
      </main>
      </>
  );
}

export default RestaurantLayout;
