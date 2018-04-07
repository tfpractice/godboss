import { Request } from "../../utils";

const { rqConstants } = Request;

export const PREFIX = `DOGS`;

export const SET_DOGS = `SET_DOGS`;

export const GET_DOGS = `GET_DOGS`;

export const DOG_REQUEST_ACTIONS = rqConstants(PREFIX);

export const DOG_ACTIONS = new Set([ SET_DOGS ]);

export const REQUEST_ACTIONS = new Set(DOG_REQUEST_ACTIONS);

export const DOG_URL = `https://dog.ceo/api/breeds/list/all`;
