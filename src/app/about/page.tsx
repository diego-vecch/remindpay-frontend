
import { NavbarHomepage } from "@/components/NavbarHomepage";

export default function page(): JSX.Element {
  return (
    <>
      <div className=" flex h-full flex-col justify-center w-full mx-auto my-auto">
        <NavbarHomepage active=" " />
        <div className="flex justify-center items-center text-violet-900 text-4xl font-semibold font-['Concert One'] ">
          <h1>About</h1>
        </div>
         <div className="flex justify-center items-center mt-4 mr-24 ">
          <div className="flex">
            <div className="flex w-96 ml-24">
              <img
                src="https://res.cloudinary.com/dvlpzbeub/image/upload/v1701118200/Remind%20Pay/image_13_viemro.svg"
                alt=""
              />
            </div>
            <div className="w-96 ml-28 bg-purple-400 rounded">
            <div className="text-violet-900 text-center font-medium font-['DM Sans'] mx-9 my-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type  specimen book.</div>
            </div>
          </div>
        </div> 
      
      </div>
      
    </>
  );
}
