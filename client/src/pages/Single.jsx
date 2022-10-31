import React from "react";
import EditImg from "../imgs/edit.png";
import DeleteImg from "../imgs/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Ahmed</span>
            <p>Posted 2 days ago</p>
          </div>
          {/* {currentUser.username === post.username && ( */}
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={EditImg} alt="" />
            </Link>
            <img src={DeleteImg} alt="" />
          </div>
          {/* )} */}
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          aperiam illo voluptatibus ipsam ducimus enim asperiores veniam
          doloremque et. Ullam nostrum, ipsam optio non deleniti a corporis
          alias eum asperiores. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Numquam dolor tempora eius qui! Fugiat corrupti
          porro, in iure obcaecati id odio corporis blanditiis perspiciatis
          adipisci illum aliquam quis quod suscipit.
        </p>{" "}
      </div>
      <Menu />
    </div>
  );
};

export default Single;
