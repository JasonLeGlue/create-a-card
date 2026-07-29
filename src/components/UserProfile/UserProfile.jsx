import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/userService.js";
import { getBinderByUserId } from "../../services/binderService.js";
import { Link } from "react-router-dom";
import { Card } from "../card/Card.jsx";
import { getCardById } from "../../services/cardService.js";

export const UserProfile = () => {
  const { userId } = useParams({});
  const [userObj, setUserObj] = useState({});
  const [formattedBinder, setFormattedBinder] = useState([]);

  // useEffect(() => {
  //   getUserById(userId).then(setUserObj);
  //   getBinderByUserId(userId).then(setBinderArray);
  // }, [userId]);

  const getAndSetFormattedBinder = async () => {
    getUserById(userId).then(setUserObj);
    const binderCards = await getBinderByUserId(userId);
    const cards = await Promise.all(
      binderCards.map((binderCard) => getCardById(binderCard.card.id)),
    );

    setFormattedBinder(cards);
  };

  useEffect(() => {
    getAndSetFormattedBinder();
  }, []);

  return (
    <>
      {userObj && formattedBinder ? (
        <>
          <div className="userItems">
            <img src={userObj.profileImageUrl} />
            <h3 className="username">{userObj.username}</h3>
            <p className="bio">{userObj.bioText}</p>
          </div>
          <div className="binderContainer">
            <h2>{userObj.username}'s Binder</h2>
            <div className="binder">
              {formattedBinder.map((binderObj) => (
                <Link to={`/card/${binderObj.id}`}>
                  <Card cardObj={binderObj} key={binderObj.id} />
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
