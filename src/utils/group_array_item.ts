type Props = {
  data: any[],
  perPage: number
}
const groupArrayItem = (props: Props) => {
  let data = props.data ?? []
  let perPage = props.perPage ?? 6
  let result = data
  .map((e, i) => {
    return i % perPage === 0 ? data.slice(i, i + perPage) : null;
  })
  .filter(e => {
    return e;
  });

  return result
}

export default groupArrayItem;
