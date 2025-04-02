import times from './../../data/times.json'

export async function GET() {
    return Response.json(times)
}