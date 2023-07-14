import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../Actions/UserAction";
import LoopIcon from '@mui/icons-material/Loop';

const AllUser = () => {
  const dispatch = useDispatch();
  const { is_user_list_ready, loading, users,newLoading } = useSelector(
    (state) => state.usersList
  );

  const loadmore =()=>{
    dispatch(getUserList(4,users));

  }

   

  useEffect(() => {
if(!is_user_list_ready){ 
  dispatch(getUserList(4));
} 
  }, []);

  

  return (
    <div>

    <div className="cards-container">
      
      {!loading ? (
        users.map((user,index) => {
          const { id, first_name, last_name, avatar, employment } = user;
          return (
            <div className="card "  >
              <div>
                <img src={avatar} className="avatar" alt="" />
              </div>
              <div className="details">
                <h2 class="employee-id">Employee ID: {id}</h2>
                <h1 class="employee-name">{first_name + " " + last_name}</h1>
                <h3 class="employee-title">{employment.title}</h3>
              </div>
            </div>
          );
        })
        ) : (
          <span style={{textAlign:"center"}}><LoopIcon className="loader"></LoopIcon></span>
          )}
          </div>
          <button class="load-more-button" onClick={()=>loadmore()}>{!newLoading?"Load More":<LoopIcon className="loader"></LoopIcon>}</button>
    </div>
  );
};

export default AllUser;
