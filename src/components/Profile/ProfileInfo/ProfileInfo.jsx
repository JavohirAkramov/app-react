import react from 'react';
import s from './ProfileInfo.module.css'
 
const ProfileInfo = () => {
  return (
    <div className={s.content}>
        <img className={s.img} src=" "/>
        <div className={s.descriptionBlock}> avatar + description </div>
      </div>
  );
};

export default ProfileInfo;