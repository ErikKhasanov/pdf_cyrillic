import React from 'react';
import {createUseStyles} from "react-jss";

import Button from "../Button";

const useStyles = createUseStyles({
  root: {
    margin: '20px auto 0 auto'
  },
  btn: {
    display: 'inline-block',
    background: 'rgb(25, 118, 210)',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px',
    color: '#fff',
    minWidth: '64px',
    padding: '6px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '0 10px'
  },
  count: {
    color: '#000',
    fontSize: '18px',
  }
})

const DocumentControl = ({handlePage, page, numPages}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button className={classes.btn} handler={() => handlePage('decrement')}>
        Назад
      </Button>
      <span className={classes.count}>
        {page} из {numPages}
      </span>
      <Button className={classes.btn} handler={() => handlePage('increment')}>
        Вперед
      </Button>
    </div>
  );
};

export default DocumentControl;