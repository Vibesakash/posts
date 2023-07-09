import { Box } from '@mui/material';
import React from 'react';

const PostListing = ({ posts }) => {
  return (
    <Box >
     
      {posts.map((post) => (
        <Box sx={
        {
            padding:'30px',
            bgcolor: '#f6f6f610',
            boxShadow: '0px 0px 10px 0px',
            margin: '20px auto',
            textAlign: 'center',
            width: '70%'

        }
    } key={post.id}>
          <h3 className='post-heading'>{post.title}</h3>
          <img loading="lazy" src={post.image} alt={post.title}  width={300} height={400} style={{objectFit:'cover', objectPosition:'center'}}/>
          <p className='box-text-description'>{post.description}</p>
        </Box>
      ))}
    </Box>
  );
};

export default PostListing;