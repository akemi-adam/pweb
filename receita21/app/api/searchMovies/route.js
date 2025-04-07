export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchParams.get('title')}&type=${searchParams.get('type')}`)
    const jsonRes = await httpRes.json()
    return Response.json({ ...jsonRes })
}