import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import ColorizeRoundedIcon from '@material-ui/icons/ColorizeRounded'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function TransferColor(props) {
  const { classes } = props;
  const [hex, setHex] = useState('')

  const handleHexChange = e => {
    let value = e.target.value.trim()
    value.startsWith('#')
      ? value = value.substr(0, 7)
      : value = value.substr(0, 6)
    setHex(value)
  }
  const handleRGBChange = e => {}
  const handleClear = () => setHex('')

  const parseNumsFromHex = hex => {
    if (!/^\s*#?[0-9a-f]{6}\s*$/i.test(hex)) return null
    hex = hex.trim()
    let r, g, b, i
    if (hex.startsWith('#')) {
      i = 1
    } else {
      i = 0
    }
    r = hex.substr(i, 2)
    g = hex.substr(i + 2, 2)
    b = hex.substr(i + 4, 2)
    return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)]
  }

  const rgb = parseNumsFromHex(hex)
    ? `rgb(${parseNumsFromHex(hex)[0]}, ${parseNumsFromHex(hex)[1]}, ${parseNumsFromHex(hex)[2]})`
    : ''

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar} style={{backgroundColor: rgb}}>
          <ColorizeRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Hex to RGB color converter
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" fullWidth>
            <TextField
              id="outlined-name"
              label="hex"
              className={classes.textField}
              value={hex}
              onChange={handleHexChange}
              margin="normal"
              variant="outlined"
              autoFocus
            />
            <TextField
              id="outlined-name"
              label="rgb"
              className={classes.textField}
              value={rgb}
              onChange={handleRGBChange}
              margin="normal"
              variant="outlined"
              disabled
            />
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClear}
          >
            Clear
          </Button>
        </form>
      </Paper>
    </main>
  );
}

TransferColor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransferColor);