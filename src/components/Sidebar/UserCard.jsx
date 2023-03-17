import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowRight from './icons/arrow-right.svg'
import { Collapse } from '@mui/material';

const ProfileCard = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  background: '#29292C',
  width: 314,
  height: 80,
  PaddingLeft: 16
});

const ProfileAvatar = styled(Avatar)(({ theme, open }) => ({
  width: 48,
  height: 48,
  marginRight: 10,
  marginLeft: open ? 16 : 8,
}));

const ProfileInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const ProfileName = styled(Typography)({
  //fontWeight: 'bold',
  fontSize: '1rem',
  color: '#FFFFFF'
});

const ProfileAge = styled(Typography)({
  color: '#898989',
  marginRight: 10,
});

export default function UserCard({ src, name, idade, open }) {
  return (
    <ProfileCard>
      <ProfileAvatar alt="User Avatar" src={src} variant="rounded" open={open} />
      <Collapse orientation="horizontal" in={open}>
        <ProfileInfo>
          <ProfileName variant="body2">{name}</ProfileName>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <ProfileAge variant="subtitle2">{idade} </ProfileAge>
            <img src={ArrowRight} alt="ArrowRight" width={17} />
          </div>
        </ProfileInfo>
      </Collapse>
    </ProfileCard >
  );
}