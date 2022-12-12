import React from "react";
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import useStyles from "./styles";


const App=()=>{
    const classes=useStyles();
    const cards=[1,2,3,4,5,6,7,8,9,10,11,12];
    return (   
        <div>
            <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <PhotoCameraIcon className={classes.icon}></PhotoCameraIcon>
                        <Typography variant="h6">Photo Album</Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div className={classes.container}>
                        <Container maxWidth="sm" style={{marginTop:'100px'}}>
                            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                                Photo Album
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quas. Necessitatibus cupiditate id iste magnam impedit nobis velit, error assumenda odit libero quas, vitae corporis perferendis qui itaque distinctio asperiores cum omnis sequi ex? Ex eaque quia natus. Blanditiis perspiciatis eos rem quod expedita totam. Vel totam non vero fuga.
                            </Typography>
                            <div className={classes.button}>
                                <Grid container spacing={2} justifyContent="center" >
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            See my photos
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Edit photos
                                        </Button>
                                    </Grid>
                                    
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <Container className={classes.cardGrid} maxWidth='md'>
                        <Grid container spacing={4}>
                        {cards.map(()=>(
                            <Grid item key={cards} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia 
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media item 
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))};
                        </Grid>  
                    </Container>
                </main>
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
                        Something is here just add your footer
                        I am not good a gradients so add yours
                    </Typography>
                </footer>
        </div>
    );
}

export default App;