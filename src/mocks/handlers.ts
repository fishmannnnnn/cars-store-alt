import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('https://www.everyapi.com/cars', () => {
        return HttpResponse.json(
            [
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/1421/c29de26e9b1f3db89aeb1fb3053a6dc5x.jpg?impolicy=resize&w=1024',
                    model: 'X1',
                    price: 39640,
                    characteristics: {
                        year: '2024',
                        body: 'sedan',
                        VIN: 'WBX13EF07S5060074',
                        exteriorColor: 'blue',
                        driveLine: 'AWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Convenience Package'
                },
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/0570/bdd801e2e44675d1a8a19673b258a30ax.jpg?impolicy=downsize_bkpt&imdensity=1&w=520',
                    model: '330i',
                    price: 51830,
                    characteristics: {
                        year: '2024',
                        body: 'sedan',
                        VIN: 'WBX13EF07S5060074',
                        exteriorColor: 'blue',
                        driveLine: 'AWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Premium Package'
                },
    ]
    )
    }),
]