import moment from 'moment';

import { Time } from '../../utils';
import { Timer } from '../../store';

const { deFormat, fieldFormat } = Time;

const { operations: { fromInput, checkStart, checkEnd }} = Timer;

export const startsBefore = (val, all) =>
  checkStart(fromInput(all)) ? '' : 'Start Time must be before end time';

export const endsAfter = (val, all) =>
  checkEnd(fromInput(all)) ? '' : 'End Time must be after start time';

export const endsLater = val =>
  moment(deFormat(val)).isAfter(moment())
    ? ''
    : `End Time must be after now ${fieldFormat(moment())}`;
