import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="text-white h-[100px] flex items-center justify-center">
        <div className="flex flex-1 items-center justify-center text-3xl">
          User : {userid}
        </div>
      </div>
    </>
  );
}
export default User;