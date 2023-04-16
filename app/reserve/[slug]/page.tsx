import Form from "./components/form";
import Header from "./components/header";


export default function Reserve() {
  return (
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <Header />
          <Form />
        </div>
      </div>
  );
}
