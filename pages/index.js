import PostListing from '@/Components/ListItems'
import { Grid , Box, Hidden } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState , useEffect } from 'react'

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // Fetch data from the API and update the state
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.log(error));
    }, []);
  return (
    <>
      <Grid container spacing={2} sx={
        {
          height:'100vh',overflow:'hidden',
          bgcolor : '#0a1929'
        }
      }>
          
        <Grid item lg={7} sm={12} sx={{height:'100%',overflowY:'scroll'}}>
          <PostListing posts={posts} sx={{width:'100%'}}/>
        </Grid>
        <Grid item lg={3} sm={12}  sx={{height:'100vh',overflow:'hidden'}}>
          <Box container sx={{ backgroundColor: '#f6f6f604', padding: '3rem', height : '100vh'}}>
            <div className='user-profile'>
              <Image src="next.svg" width={200} height={200} objectFit='contain' alt="user" />
            </div>
            <div className="user-profile-name">Akash Saini
            </div>
            <div className="user-decription"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cumque voluptatibus provident animi earum, nulla qui unde architecto consectetur molestiae iusto necessitatibus voluptas facere aliquam hic! Velit, ab quas! Quis 
            </div>
          </Box>
        </Grid>
        <Grid item lg={2} sm={12} sx={{height:'100vh'}}>
        <Box container sx={
            { backgroundColor: '#f6f6f604', padding: '3rem', height : '100%' , position: 'fixed', top : 0 }
          }>
          <ul className='navigation-ul'>
            <li>
              <Link href="#">
                Home
              </Link>
            </li>
            <li>
              <Link href="#">
                Search
              </Link>
            </li>
            <li>
              <Link href="#">
                Posts
              </Link>
            </li>
            <li>
              <Link href="#">
                Live
              </Link>
            </li>
        
          </ul>
          <ul className='navigation-ul'>
               
          <li className='logout'><Link href="#">Logout</Link></li>
          </ul>
        </Box>
        </Grid>
      </Grid>

    </>
  )
}

export default HomePage
