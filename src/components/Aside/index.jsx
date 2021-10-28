import { useState } from "react";
import * as C from "./styles";
import { MdLocationOn } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";

const Aside = ({ userData }) => {
  const [isFollowing, setIsFollowing] = useState(true);

  const follow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <C.Container>
      <C.LogoArea>
        <h1>
          Git<span>Hub</span>
        </h1>
      </C.LogoArea>
      <C.UserProfile>
        <C.UserImg>
          <img src={userData.avatar_url} alt="UserImg" />
        </C.UserImg>
        <C.UserName>
          <h3>{userData.name}</h3>
          <h4>{userData.login}</h4>
        </C.UserName>
        <C.FollowInfo>
          <div>
            <span>
              {userData.followers < 10
                ? "0" + userData.followers
                : userData.followers}
            </span>
            <p>followers</p>
          </div>
          <div>
            <span>
              {userData.following < 10
                ? "0" + userData.following
                : userData.following}
            </span>
            <p>following</p>
          </div>
          <div>
            <span>{userData.public_repos}</span>
            <p>repos</p>
          </div>
        </C.FollowInfo>
        <hr />
        {isFollowing ? (
          <C.FollowingButton onClick={follow}>Seguindo</C.FollowingButton>
        ) : (
          <C.FollowButton onClick={follow}>Seguir</C.FollowButton>
        )}
        <C.Bio>
          {!userData.bio
            ? "O usuário ainda não adicionou uma bio..."
            : userData.bio}
        </C.Bio>
        <C.MoreInfo>
          {!userData.location ? (
            <></>
          ) : (
            <div>
              <MdLocationOn />
              <p>{userData.location}</p>
            </div>
          )}
          {!userData.email ? (
            <></>
          ) : (
            <div>
              <GrMail />
              <p>{userData.email}</p>
            </div>
          )}

          {!userData.blog ? (
            <></>
          ) : (
            <div>
              <a href={userData.blog}>
                <BiWorld />
                <p>{userData.blog}</p>
              </a>
            </div>
          )}
        </C.MoreInfo>
        <C.BlockReport>
          <p>Block or Report</p>
        </C.BlockReport>
      </C.UserProfile>
    </C.Container>
  );
};

export default Aside;
