export const clock = (active = false, remaining = 0) => ({ active, remaining });

export const active = ({ active } = clock()) => active;

export const remaining = ({ remaining } = clock()) => remaining;

export const setActive = a => ck => clock(a, remaining(ck));

export const setRemaining = rem => ck => clock(active(ck), rem);

export const pause = ck => setActive(false)(ck);

export const start = ck => setActive(true)(ck);

export const toggle = ck => setActive(!active(ck))(ck);

export const checkRem = ck => !!remaining(ck);

export const clearRem = ck => setRemaining(0)(ck);

export const decRem = ck =>
  checkRem(ck) ? setRemaining(remaining(ck) - 1)(ck) : clearRem(ck);
