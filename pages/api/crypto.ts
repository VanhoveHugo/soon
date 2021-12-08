import type { NextApiRequest, NextApiResponse } from 'next'

// Je sais que je devais faire un Data fetching plus clean avec un GetStaticProps mais pas le temps <3

export default async function(req: NextApiRequest, res: NextApiResponse){
    let JSON = await fetch('https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd')
    let data = await JSON.json()
    res.send(data)
}

