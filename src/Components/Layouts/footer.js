import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation( {group, categories, onSelect} ) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        onSelect(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <BottomNavigationAction label="All" icon={<RestoreIcon />} />
      {categories.map(category => 
        <BottomNavigationAction label={category} value={category} key={category} icon={<RestoreIcon />} />
      )}
    </BottomNavigation>
  );
}
