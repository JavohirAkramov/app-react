import react from 'react';
import s from './ProfileInfo.module.css';
import image from '../../../assets/images/Bobur va men.jpg';
import Preloader from './../../commons/Preloader/Preloader.js';
import ProfileStatus from './ProfileStatus.jsx';

const ProfileInfo = (props) => {
  if(!props.profile) return <Preloader />
  return (
    <div className={s.content}>
        {/*<img className={s.img} src=" "/>*/}
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large}/>
          {/*<span>{props.profile.userId}</span><br/>
          <span>{props.profile.aboutMe}</span><br/>
          <span>{props.profile.fullName}</span><br/>*/}
          <ProfileStatus status={"this is status"}/>
        </div>
    </div>
  );
};

export default ProfileInfo;
