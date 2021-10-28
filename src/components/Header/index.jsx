import * as C from "./styles";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";

const Header = () => {
  return (
    <C.Container>
      <C.SearchInput>
        <label for="searchInput">
          <BiSearch />
        </label>
        <input id="searchInput" type="search" placeholder="Search or Jump" />
      </C.SearchInput>
      <C.TopMenu>
        <li>Pull Request</li>
        <li>Issues</li>
        <li>MarktPlace</li>
        <li>Explore</li>
      </C.TopMenu>
      <C.Icons>
        <MdNotificationsNone />
        <BiUserCircle />
      </C.Icons>
    </C.Container>
  );
};

export default Header;
