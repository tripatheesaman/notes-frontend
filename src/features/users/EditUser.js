import { useParams } from "react-router-dom";
import EditUserForm from "./EditUserForm";
import { useGetUsersQuery } from "./usersApiSlice";
import RingLoader from "react-spinners/RingLoader";
import useTitle from "../../hooks/useTItle";
const EditUser = () => {
  useTitle("Edit User");
  const { id } = useParams();

  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  });

  if (!user) return <RingLoader color={"#FFF"} />;

  const content = <EditUserForm user={user} />;
  return content;
};

export default EditUser;
