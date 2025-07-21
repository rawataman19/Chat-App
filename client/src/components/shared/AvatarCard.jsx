import { AvatarGroup, Stack, Box } from '@mui/material';
import React from 'react';

const AvatarCard = ({avatar=[],max=4}) => {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
        <AvatarGroup max={max}>
            {avatar.map((i, index) => (
                <img
                    key={index}
                    src={i}
                    alt={`Avatar ${index + 1}`}
                    style={{
                        width: "3rem",
                        height: "3rem",
                        marginLeft: index === 0 ? 0 : "-1.5rem",
                        borderRadius: "50%",
                        border: "2px solid white",
                        objectFit: "cover"
                    }}
                />
            ))}
        </AvatarGroup>
    </Stack>
  )
}

export default AvatarCard