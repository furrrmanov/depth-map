export const transformDataList = (data) => {
  return data.reduce((acc, item) => {
    acc.push({ ...item[1], id: item[0] })
    return acc
  }, [])
}

export const filteredEntityList = (data, id = '', listName) => {
  const filteredData = data.find((item) => item.id === id)
  return filteredData && filteredData[`${listName}`]
    ? filteredData[`${listName}`]
    : []
}
