import Navbar from "../components/Navbar";
import ProductName from "../components/ProductName";
import ProductDes from "../components/ProductDescription";
import ProductPrice from "../components/ProductPrice";
import UploadImg from "../components/UploadImageBtn";
import Available from "../components/AvialiableBtn";
import NotAvailable from "../components/NotAvialableBtn";
import CategoryMenu from "../components/CategoryMenu";
import SaveBtn from "../components/SaveBtn";

function AddProduct() {
  return (
    <>
      
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[350px] md:h-[400px] flex flex-col justify-center text-white"
        style={{
          backgroundImage:  "url('/img/agregar-fondo.png')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <Navbar />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 mt-12 sm:mt-14 md:mt-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight md:leading-tight mb-4 tracking-tight">
              INSPIRING <br /> THE WORLD
            </h1>
            <p className="text-xs sm:text-sm md:text-base max-w-full sm:max-w-md">
              Upload your products and promote a unique fashion world.
            </p>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 sm:gap-10 px-4 sm:px-8 md:px-20 py-12 sm:py-16 bg-white">
        
        <div className="flex justify-center md:justify-start w-full md:w-1/3">
          <div className="bg-gray-300 rounded-2xl w-48 sm:w-56 md:w-64 h-64 sm:h-72 md:h-80 flex items-center justify-center shadow-sm">
            <UploadImg />
          </div>
        </div>

        
        <div className="w-full md:w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-2xl font-bold mb-6 sm:mb-8 text-center md:text-left">
            Add New Product
          </h1>

          <div className="space-y-4 sm:space-y-5">
           
            <div>
              <h2 className="text-xs sm:text-sm md:text-sm font-semibold mb-1 sm:mb-2 text-gray-800">
                Product Name
              </h2>
              <ProductName />
            </div>

            
            <div>
              <h2 className="text-xs sm:text-sm md:text-sm font-semibold mb-1 sm:mb-2 text-gray-800">
                Product Description
              </h2>
              <ProductDes />
            </div>

           
            <div>
              <h2 className="text-xs sm:text-sm md:text-sm font-semibold mb-1 sm:mb-2 text-gray-800">
                Price
              </h2>
              <ProductPrice />
            </div>

   
            <div>
              <h2 className="text-xs sm:text-sm md:text-sm font-semibold mb-1 sm:mb-2 text-gray-800">
                Category
              </h2>
              <div className="flex justify-start w-full">
                <CategoryMenu />
              </div>
            </div>

            
            <div>
              <h2 className="text-xs sm:text-sm md:text-sm font-semibold mb-1 sm:mb-2 text-gray-800">
                Availability
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Available />
                <NotAvailable />
              </div>
            </div>

           
            <div className="mt-4 sm:mt-6 flex justify-center md:justify-start">
              <SaveBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
