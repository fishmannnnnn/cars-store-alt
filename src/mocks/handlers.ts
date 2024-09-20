import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('/user', () => {
        return HttpResponse.json(
            [
                {
                    image: 'dfs',
                    model: 'X1',
                    price: '39.644,60',
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
                    image: 'dfs',
                    model: 'X1',
                    price: '39.644,60',
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