import react from "react";
import s from './Users.module.css'

const Users = (props) => {
  console.log(props.users.fullName)
  return <div>
    {
      props.users.map(u => {
        return <div>
          <span>
            <img className={s.avatar} src={u.photoURL}/>
            {
              u.followed ? <button>Unfollow</button> : <button>Follow</button>
            }
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      })
    }
  </div>
};

export default Users;
