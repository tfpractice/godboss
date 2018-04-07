import { compose, withHandlers, withState } from 'recompose';

const defProps = { location: `/`, index: 0 };

const withIndex = compose(
  withState(`index`, `setIndex`, ({ index } = defProps) => index || 0),
  withHandlers({
    set: ({ setIndex }) => (e, i) => setIndex(i),
    changeSet: ({ setIndex }) => i => setIndex(i),
    hPush: ({ history }) => link => () => history.push(link),
  }),
);

export default withIndex;
