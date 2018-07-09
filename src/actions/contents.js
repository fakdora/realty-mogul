export const GET_CONTENTS = "GET_CONTENTS"

export function getContents(contents) {
  return {
    type: GET_CONTENTS,
    contents,
  }
}
