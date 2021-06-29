import React from 'react';
import {makeStyles, Paper, Typography} from '@material-ui/core';
import styles from './styles';
import LinkButton from '../../../../components/LinkButton/LinkButton';

const useStyles = makeStyles(styles);

const TokenInfo = ({ token }) => {
    const classes = useStyles();

    const { symbol, website, address, network, description} = token;

    return (
        <Paper className={classes.cardContainer}>
            <div className={classes.cardHeader}>
                <div>
                    <div>
                        <Typography className={classes.cardTitle}>{symbol}</Typography>
                    </div>
                    <div>
                        <Typography className={classes.cardSubtitle}>Asset details</Typography>
                    </div>
                </div>
                <div className={classes.cardActions}>
                    {website ? (
                        <div className={classes.cardAction}>
                            <LinkButton href={website} text="Website" />
                        </div>
                    ) : null}
                    <div className={classes.cardAction}>
                        <LinkButton href={address}  className={classes.cardAction} text="Token Contract" />
                    </div>
                </div>
            </div>
            <div className={classes.cardContent}>
                <Typography className={classes.text}>
                    {description ? description : 'No token description available.'}
                </Typography>
            </div>
        </Paper>
    );
};

export default TokenInfo;
