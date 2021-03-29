import * as React from "react";
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import reduxActions from "../redux/actions";
import Loader from "../../components/loader";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import {
    Container,
    makeStyles,
    Grid,
    Paper,
    Divider,
    Typography,
    Box,
    Avatar,
    Link,
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableRow,
    Button
} from "@material-ui/core"
import styles from "./styles"
import {calcDaily, formatApy, formatTvl} from "../../helpers/format";

const useStyles = makeStyles(styles);
let isLoading = true;

const chartData = [
    { name: "28 Jan", apy: 45.00 },
    { name: "4 Feb", apy: 57.15 },
    { name: "11 Feb", apy: 38.50 },
    { name: "18 Feb", apy: 41.37 }
];

const getVault = (pools, id) => {
    if(pools.length === 0) {
        return false;
    }
    for(let key in pools) {
        if(pools[key].id === id) {
            return pools[key];
        }
    }
}

const Vault = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    let { id } = useParams();
    let vault = {};
    const vaultReducer = useSelector(state => state.vaultReducer);

    React.useEffect(() => {
        dispatch(reduxActions.vault.fetchPools(false));
        dispatch(reduxActions.wallet.fetchRpc());
        dispatch(reduxActions.vault.fetchPoolsData());
    }, [dispatch]);

    vault = getVault(vaultReducer.pools, id);

    if(vault) {
        isLoading = false;
    } else {
        if(vaultReducer.lastUpdated > 0) {
            history.push('/error');
        }
    }

    return (
        <div className="App">
            {isLoading ? (
            <Container maxWidth="lg">
                <Loader message="Getting vault data..." />
            </Container>
            ) : (
            <Container maxWidth="lg">
                <Box textAlign={'right'} style={{marginTop: "40px"}}>
                    <Button variant="contained" onClick={() => {history.goBack()}}>Go back</Button>
                </Box>
                <Grid container spacing={2} style={{marginTop: "20px"}}>
                    <Grid item xs={12} md={3}>
                        <Paper>
                            <Grid style={{textAlign: 'center'}}>
                                <Box style={{justifyContent: 'center', display: 'flex'}}>
                                    <Avatar className={classes.logo} alt={vault.name} src={require('../../images/' + vault.logo).default} />
                                </Box>
                                <Typography className={classes.logoTitle}>{vault.name}</Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Paper>
                            <Typography className={classes.cardTitle}>Daily APY</Typography>
                            <Divider />
                            <Typography className={classes.cardBody}>{calcDaily(vault.apy)}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Paper>
                            <Typography className={classes.cardTitle}>APY</Typography>
                            <Divider />
                            <Typography className={classes.cardBody}>{formatApy(vault.apy)}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Paper>
                            <Typography className={classes.cardTitle}>TVL</Typography>
                            <Divider />
                            <Typography className={classes.cardBody}>{formatTvl(vault.tvl)}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop: "20px"}}>
                    <Grid item xs={12} md={6}>
                        <Paper>
                            <Typography className={[classes.cardTitle, classes.cardLeftStrong].join(' ')}>Wallet Balance: <span>17998</span></Typography>
                            <Divider />
                            <Typography className={classes.cardBody}>deposit form</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper>
                            <Typography className={[classes.cardTitle, classes.cardLeftStrong].join(' ')}>Deposited: <span>0</span></Typography>
                            <Divider />
                            <Typography className={classes.cardBody}>withdraw form</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop: "20px"}}>
                    <Grid item xs={12} md={8}>
                        <Paper>
                            <Typography className={classes.cardTitle}>Last 30 days</Typography>
                            <Divider />
                            <Box className={classes.height}>
                                <ResponsiveContainer>
                                    <LineChart data={chartData} margin={{top: 10, right: 30, left: 0, bottom: 5}}>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="apy" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Typography className={classes.cardTitle}>Vault Information</Typography>
                            <Divider />
                            <TableContainer className={classes.height}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Created on</TableCell>
                                            <TableCell align="right">18 Feb 2021</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Contract Address</TableCell>
                                            <TableCell align="right"><Link href="#">0x00000000000</Link></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Strategy Address</TableCell>
                                            <TableCell align="right"><Link href="#">0x00000000000</Link></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Last Harvest</TableCell>
                                            <TableCell align="right">1 hour 23 mins ago</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            )}
        </div>
    )
};

export default Vault;
