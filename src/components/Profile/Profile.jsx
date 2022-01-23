import react from "react";
import s from "./Profile.module.css";
import MyPostContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile}/>
      <MyPostContainer />
    </div>
  );
};

export default Profile;
