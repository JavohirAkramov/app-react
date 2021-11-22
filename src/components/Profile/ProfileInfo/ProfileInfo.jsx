import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../commons/Preloader/Preloader';
import ProfileStatus from './ProfileStatus.jsx'

const ProfileInfo = (props) => {
  if(!props.profile) return <Preloader />
  return (
    <div className={s.content}>
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
  );
};

export default ProfileInfo;
