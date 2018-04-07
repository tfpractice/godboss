const PENDING = `PENDING`;

const SUCCESS = `SUCCESS`;

const FAILURE = `FAILURE`;

const STATUS_ACTIONS = [ PENDING, SUCCESS, FAILURE ];

export const getData = ({ data }) => data;

const actionString = prefix => action => `${prefix}_${action}`;

export const pending = param => state => ({
  ...state,
  status: `pending`,
  updatedAt: Date.now(),
  param,
});

export const success = message => state => ({
  ...state,
  status: `suceeded`,
  updatedAt: Date.now(),
  message,
});

export const failure = message => state => ({
  ...state,
  status: `failed`,
  updatedAt: Date.now(),
  message,
});

export const rqConstants = prefix =>
  new Set(STATUS_ACTIONS.map(actionString(prefix)));

export const rqActions = prefix => ({
  pending: param => ({
    type: actionString(prefix)(PENDING),
    curry: pending(param),
  }),
  success: message => ({
    type: actionString(prefix)(SUCCESS),
    curry: success(message),
  }),
  failure: message => ({
    type: actionString(prefix)(FAILURE),
    curry: failure(message),
  }),
});
