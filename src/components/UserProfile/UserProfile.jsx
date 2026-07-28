import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/userService.js";
import { getBinderByUserId } from "../../services/binderService.js";
import { Link } from "react-router-dom";
import { Card } from "../card/Card.jsx";

export const UserProfile = () => {
  const { userId } = useParams({});
  const [userObj, setUserObj] = useState({});
  const [binderArray, setBinderArray] = useState([]);

  useEffect(() => {
    getUserById(userId).then(setUserObj);
    getBinderByUserId(userId).then(setBinderArray);
  }, [userId]);

  return (
    <>
      {userObj && binderArray ? (
        <>
          <div className="userItems">
            <img src={userObj.profileImageUrl} />
            <h3 className="username">{userObj.username}</h3>
            <p className="bio">{userObj.bioText}</p>
          </div>
          <div className="binderContainer">
            <h2>{userObj.username}'s Binder</h2>
            <div className="binder">
              {binderArray.map((binderObj) => (
                <Link to={`/card/${binderObj.card.id}`}>
                  <Card cardObj={binderObj.card} key={binderObj.card.id} />
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
