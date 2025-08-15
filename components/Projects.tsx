"use client"

import React, { useState } from 'react'
import {
    Container,
    Typography,
    Box,
    Button,
    Grid,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';
import { amber } from '@mui/material/colors';

const categories = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'];

const projectsData = [
    {
        id: 1,
        category: 'Web Design',
        title: 'AirCalling Landing Page Design',
        imageUrl: '/proje/1.jpg',
    },
    {
        id: 2,
        category: 'Web Design',
        title: 'Business Landing Page Design',
        imageUrl: '/proje/2.jpg',
    },
    {
        id: 3,
        category: 'Web Design',
        title: 'Ecom Web Page Design',
        imageUrl: '/proje/3.jpg',
    },
    {
        id: 4,
        category: 'UI/UX',
        title: 'Mobile Banking App',
        imageUrl: '/proje/4.jpg',
    },
    {
        id: 5,
        category: 'App Design',
        title: 'Food Delivery App',
        imageUrl: '/proje/5.jpg',
    },
    {
        id: 6,
        category: 'Graphic Design',
        title: 'Social Media Templates',
        imageUrl: '/proje/6.jpg',
    },
];


const Project = () => {


    const [selectedCategory, setSelectedCategory] = useState('All');
    const filteredProjects =
        selectedCategory === 'All'
            ? projectsData
            : projectsData.filter((p) => p.category === selectedCategory);


    return (
        <section className='py-10' id='projects' >
            <div className='max-w-6xl mx-auto px-4'>
                <Container maxWidth="lg" sx={{ py: 8 }}>
                    <Box textAlign="center" mb={4}>
                        <Typography variant="h4" fontWeight="bold" sx={{ color: amber[600] }}>
                            My Projects
                        </Typography>
                        <Typography variant="body1" sx={{ color: "slategray" }} mt={1}>
                            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus
                            lectus. Phasellus consequat urna tellus
                        </Typography>
                    </Box>

                    <Box textAlign={"center"} mb={4}>
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={cat === selectedCategory ? 'contained' : 'outlined'}
                                sx={{
                                    m: 1,
                                    borderColor: amber[600],
                                    color: cat === selectedCategory ? '#000' : amber[600],
                                    backgroundColor: cat === selectedCategory ? amber[600] : 'transparent',
                                    '&:hover': {
                                        backgroundColor: cat === selectedCategory ? amber[700] : amber[50],
                                        borderColor: amber[600],
                                    },
                                }}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </Button>
                        ))}

                        <Grid container spacing={4} mt={4}>
                            {filteredProjects.map((project) => (
                                <Grid key={project.id}>
                                    <Card sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: "transparent" }}>
                                        <CardMedia
                                            component="img"
                                            image={project.imageUrl}
                                            alt={project.title}
                                            sx={{
                                                height: 180,
                                                objectFit: 'contain',
                                            }}
                                        />
                                        <CardContent>
                                            <Typography variant="body2" sx={{ color: amber[600] }}>
                                                {project.category}
                                            </Typography>
                                            <Typography variant="h6" mt={1} sx={{ color: 'slategray' }}>
                                                {project.title}
                                            </Typography>
                                        </CardContent>

                                    </Card>

                                </Grid>
                            ))}

                        </Grid>

                    </Box>

                </Container>

            </div>


        </section>
    )
}

export default Project