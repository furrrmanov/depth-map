export const transformDataList = (data) => {
  return data.reduce((acc, item) => {
    acc.push({ ...item[1], id: item[0] })
    return acc
  }, [])
}
