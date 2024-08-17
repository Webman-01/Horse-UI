export const virtualizedProps = {
  size: {
    type: Number,
    default: 32,
  },
  remain: {
    type: Number,
    default: 8,
  },
  items: {
    type: Array,
    default: ():any => [],
  },
};
