import react from 'react';
import s from './ProfileInfo.module.css';
import image from '../../../assets/images/Bobur va men.jpg';
import Preloader from './../../commons/Preloader/Preloader.js'

const ProfileInfo = (props) => {
  if(!props.profile) return <Preloader />
  return (
    <div className={s.content}>
        <img className={s.img} src=" "/>
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large}/>
          <span>{props.profile.userId}</span><br/>
          <span>{props.profile.aboutMe}</span><br/>
          <span>{props.profile.fullName}</span><br/>
          avatar + description
        </div>
    </div>
  );
};

export default ProfileInfo;
