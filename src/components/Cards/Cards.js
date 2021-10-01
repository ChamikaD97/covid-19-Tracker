import React from 'react';
import {Card,CardContent,Typography,Grid, StylesProvider,CardMedia } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import style from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } } ) => {
    console.log(confirmed);
       if(!confirmed){
        return "Loading...";
    }
    return(
        <div className={style.container}>
        <Grid container spacing={4} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.infected)}>
                    <CardContent>
                    <Typography  variant="h5" className={cx(style.topic)}><b>Infected Cases</b></Typography>
                        <Typography variant="h4" className={cx(style.H4Inf)}>
                        <b>

                        <CountUp
                            start={0}
                            end = {confirmed.value}
                            duration={5}
                            separator=","
                        />
                        </b>
                        </Typography>
                        <Typography variant="body2" >Last Update - {new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.recovered)}>
                    <CardContent>
                        <Typography  variant="h5" className={cx(style.topic)}><b>Recoveries</b></Typography>
                        <Typography variant="h4" className={cx(style.H4REC)}>
                        <b>
                        <CountUp
                            start={0}
                            end = {recovered.value}
                            duration={5}
                            separator=","
                        />
                        </b>
                        </Typography>
                        <Typography variant="body2" >Last Update - {new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>

                
                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.deaths)}>
                    <CardContent>
                    <Typography  variant="h5" className={cx(style.topic)}><b>Deaths</b></Typography>
                        <Typography variant="h4" className={cx(style.H4Deaths)}>
                        <b>

                        <CountUp
                            start={0}
                            end = {deaths.value}
                            duration={5}
                            separator=","
                        />
                                                </b>

                        </Typography>
                        <Typography variant="body2" >Last Update - {new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )}

export default Cards;
