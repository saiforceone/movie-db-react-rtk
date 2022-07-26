/**
 * File: Menu.tsx
 * Created by: sai @ 7/25/22
 */

import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MenuContainer = styled.div`
  display: flex;
  padding: 0 0.5rem;
`;

export const Menu = () => {
  return (
    <MenuContainer>
      <Link to="">Popular Movies</Link>
      <Link to="liked-movies">Liked Movies</Link>
    </MenuContainer>
  )
}
