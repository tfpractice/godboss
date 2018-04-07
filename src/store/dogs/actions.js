import axios from "axios";

import { DOG_URL, PREFIX, SET_DOGS } from "./constants";
import { Request } from "../../utils";

const { rqActions } = Request;

const dogPend = rqActions(PREFIX).pending;

const dogFail = rqActions(PREFIX).failure;

const dogSucc = rqActions(PREFIX).success;

const set = arr => state => arr;

export const setDogs = dogs => ({
  type: SET_DOGS,
  curry: set(dogs),
});

export const getDogs = () => dispatch =>
  axios
    .get(DOG_URL)
    .then(x => console.log(`x`, x) || setDogs(x.data.message))
    .then(dispatch);
