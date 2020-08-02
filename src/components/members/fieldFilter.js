import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  TextField,
  Container,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import "./style.scss";

const FieldFilter = ({ onChange }) => {
  const { members } = useSelector((state) => state.members);
  const [obj, setObj] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    if (members.length) {
      const keys = Object.keys(members[0]);
      const aux4 = getKeyValue(keys);
      setObj(aux4);
    }
  }, [members]);

  const getKeyValue = (keys) =>
    keys.map((key) => ({
      key,
      value: transformKey(key),
    }));

  const transformKey = (string) => {
    const aux = string.split("_");
    const aux2 = aux.map(
      (name) => name.charAt(0).toUpperCase() + name.slice(1)
    );
    const aux3 = aux2.join(" ");
    return aux3;
  };

  return (
    <Container>
      <div className='advancedFilter'>
        <FormControl variant='outlined'>
          <InputLabel id='selectLabel'>Advanced Filter</InputLabel>
          <Select
            labelId='selectLabel'
            className='select'
            onChange={(event) => setActiveFilter(event.target.value)}
          >
            {obj.map((key) => (
              <MenuItem value={key.key}>{key.value}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          variant='outlined'
          label='Search'
          autoFocus
          onChange={(event) => onChange(event.target.value, activeFilter)}
          className='textField'
        />
      </div>
    </Container>
  );
};

export default FieldFilter;
