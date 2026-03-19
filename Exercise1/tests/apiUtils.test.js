
//ok: false + json succeeds DONE
//ok: true + json succeeds DONE
//ok: true + json fails DONE
//ok: false + json fails  DONE

/*Remember: Arrange, Act, Assert */
const { handleResponse } = require("../src/utils/apiUtils");


test('Valid response', async () => {
    const fakeResponse = {
      ok: true,
      json: () => Promise.resolve({
        "Name" : "Kababjees"
      }) 
    }

    result = await handleResponse(fakeResponse)

    //toBe is for check primitives
    expect(result).toStrictEqual({"Name": "Kababjees"})

})

test('Response.json() fails', async () => {
   const fakeResponse = {
      ok: true,
      json: () => Promise.reject({
        "error": "reject"
      }) 
    }
    //  let result
    //  try {
    //     result = await handleResponse(fakeResponse)
    //     expect(result).toStrictEqual({})
    //  } catch(error) {
    //  }
   await expect(handleResponse(fakeResponse)).resolves.toStrictEqual({})
})

test('response.ok is false and so does Response.json() fails', async () => {
  const fakeResponse = {
    ok: false,
    json: () => Promise.reject(new Error("doesnt matter what put here"))
  }

  await expect(handleResponse(fakeResponse)).rejects.toStrictEqual( { message: 'something', status: 404 })
}) 

test('response.ok is false but Response.json() succeeds', async () => {
  const fakeResponse = {
    ok: false,
    json: () => Promise.resolve({ error : { message: 'something else', status: 409 }}),
   
  }

  await expect(handleResponse(fakeResponse)).rejects.toStrictEqual( { message: 'something else', status: 409 })
}) 
