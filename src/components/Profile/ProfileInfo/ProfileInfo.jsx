<<<<<<< HEAD
import react from 'react';
import s from './ProfileInfo.module.css';
import image from '../../../assets/images/Bobur va men.jpg';
import Preloader from './../../commons/Preloader/Preloader.js'
=======
import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../commons/Preloader/Preloader';
import ProfileStatus from './ProfileStatus.jsx'
>>>>>>> app-br-remembered

const ProfileInfo = (props) => {
  if(!props.profile) return <Preloader />
  return (
    <div className={s.content}>
<<<<<<< HEAD
        <img className={s.img} src=" "/>
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large}/>
          <span>{props.profile.userId}</span><br/>
          <span>{props.profile.aboutMe}</span><br/>
          <span>{props.profile.fullName}</span><br/>
          avatar + description
        </div>
    </div>
=======
        {/*<img className={s.img} src=" "/>*/}
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large}/>
          {/*{props.profile.userId}<br/>
          {props.profile.fullName}<br/>
          {props.profile.contacts.facebook}<br/>
          {props.profile.lookingForAJobDescription}<br/>
          avatar + description*/}
          <ProfileStatus status={'this is status'}/>
        </div>
      </div>
>>>>>>> app-br-remembered
  );
};

export default ProfileInfo;
