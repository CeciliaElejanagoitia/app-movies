import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { servicesUpcoming } from "../../../services/upcoming";
import { UpComingType } from "../../../types"
import { apiMovies } from "../../../utils/axios";

const UpComing = () => {

    // const { register, handleSubmit } = useForm<UpComingType>()

    // const onSubmit = (data: UpComingType) => {
    //     servicesUpcoming.get()
    // }
    // // servicesUpcoming.get()

    // return (
    //     <Card style={{ width: '18rem' }} onSubmit={handleSubmit(onSubmit)}>
    //         <Card.Img variant="top" {...register('posterPath')} />
    //         <Card.Body>
    //             <Card.Title {...register('title')}></Card.Title>
    //             <Card.Text{...register('overview')}>
    //             </Card.Text>
    //             <Button variant="primary">Go somewhere</Button>
    //         </Card.Body>
    // </Card>
    // );
    
}

export { UpComing } 