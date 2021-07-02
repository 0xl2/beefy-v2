import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import styles from './styles';
import LinkButton from '../../../../components/LinkButton';
import Tooltip from '../../../../components/Tooltip';
import question from "./question.svg";
import up from "./up.svg";
import down from "./down.svg";
import { RISKS } from "../../../../config/risk";
import safetyScore from "../../../../helpers/safetyScore";
import SafetyScore from "../../../../components/SafetyScore";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardContent from "../Card/CardContent";
import CardTitle from "../Card/CardTitle";

const useStyles = makeStyles(styles);

const SafetyCard = ({ vaultRisks }) => {
    const classes = useStyles();

    const categoryText = c => `${c.charAt(0).toUpperCase()}${c.slice(1)} Risk`
    
    return (
        <Card>
            <CardHeader className={classes.cardHeader}>
                <CardTitle title={<SafetyScore score={safetyScore(vaultRisks)} />} subtitle="Safety Score" />
                <div className={classes.cardActions}>
                    <LinkButton href="#" text="How is it calculated?" />
                </div>
            </CardHeader>
            <CardContent>
                <div className={classes.riskList}>
                    {vaultRisks.map(risk => (
                        <>
                            {RISKS[risk] && (
                                <div className={classes.riskRow}>
                                <div className={classes.infoContainer}>
                                    {RISKS[risk].score <= 0 ? (
                                        <img src={up} className={classes.arrow} />
                                    ) : (
                                        <img src={down} className={classes.arrow} />
                                    )}
                                    <div>
                                        <Typography className={classes.risk}>{RISKS[risk].title}</Typography>
                                        <Typography className={classes.riskCategory}>{categoryText(RISKS[risk].category)}</Typography>
                                    </div>
                                </div>
                                <Tooltip title={RISKS[risk].title} description={RISKS[risk].explanation}>
                                    <div className={classes.moreInfoContainer}>
                                        <Typography className={classes.moreInfoLabel}>What does this mean</Typography>
                                        <img src={question} className={classes.moreInfoIcon}/>
                                    </div>
                                </Tooltip>
                            </div>
                            )}
                        </>
                    ))}
                </div>
                <div className={classes.notes}>
                    <Typography>The higher the Beefy Safe Score the safer your investment.</Typography>
                    <Typography>
                        Your funds are secure on beefy.finance. The development team put a lot of time and effort into checking the code 
                        of the vaults they add to the platform. They also have a panic button to pause and protect your assets at short 
                        notice if there is any suspicious activity.
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};



export default SafetyCard;
