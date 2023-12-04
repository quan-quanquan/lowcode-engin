import * as prettier from "prettier";

export async function format (code) {
  const results = await prettier.format(code, 
    { 
      semi: false,
      parser: "babel" 
    }
  )
  return results
}