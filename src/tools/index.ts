export const firebaseJSONParser = (data: any) => {
  return Object.entries(data)
    .map(([key, val]: any) => {
      return {
        ...val,
        id: key,
      }
    })
}