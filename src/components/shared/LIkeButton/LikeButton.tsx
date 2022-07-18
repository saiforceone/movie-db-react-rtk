/**
 * File: LikeButton.tsx
 * Created by: sai @ 7/15/22
 */

import {ButtonHTMLAttributes, FC} from 'react';
import styled from 'styled-components';
import {Heart3 as HeartFullIcon} from 'styled-icons/remix-fill';
import {Heart as HeartOutlineIcon} from 'styled-icons/remix-line';
import {DefaultButton} from '../DefaultButton/DefaultButton';

interface LikeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  liked: boolean;
}

const _LikeButton: FC<LikeButtonProps> = ({liked, ...props}) => {
  return (
    <DefaultButton
      icon={liked ? <HeartOutlineIcon /> : <HeartFullIcon />}
      {...props}
    >
      {liked ? 'Unlike' : 'Like'}
    </DefaultButton>
  )
}

export const LikeButton = styled(_LikeButton)<LikeButtonProps>`
  background-color: ${props => (props.liked ? '#ff0000' : '#00ff00')}
`;


